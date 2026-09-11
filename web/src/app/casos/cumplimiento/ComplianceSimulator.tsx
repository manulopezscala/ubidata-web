"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { makeCx } from "@/lib/cx";
import {
  FileText,
  Pin,
  ShieldCheck,
  Shield,
  Braces,
  Check,
  RefreshCw,
  AlertTriangle,
  X,
  ArrowRight,
  FileCheck,
} from "@/components/icons";

const c = makeCx(styles);

type Tone = "ok" | "info" | "warn" | "bad";

type Case = {
  q: string;
  tone: Tone;
  status: string;
  sub: string;
  score: string;
  conf: string;
  latency: string;
  norm: string;
  city: string;
  prov: string;
  diag: string;
  log: string;
  action: string;
  fixes: [string, string, string][];
  note: string;
};

const TONE: Record<Tone, { bg: string; fg: string }> = {
  ok: { bg: "rgba(31,157,99,0.16)", fg: "var(--green-400)" },
  info: { bg: "rgba(0,170,185,0.16)", fg: "var(--cyan-300)" },
  warn: { bg: "rgba(185,122,9,0.20)", fg: "#E8B54A" },
  bad: { bg: "rgba(204,61,61,0.18)", fg: "#F08A8A" },
};

function ToneIcon({ tone }: { tone: Tone }) {
  if (tone === "ok") return <Check className={c("i")} strokeWidth={2.4} />;
  if (tone === "info") return <RefreshCw className={c("i")} />;
  if (tone === "warn") return <AlertTriangle className={c("i")} />;
  return <X className={c("i")} strokeWidth={2.2} />;
}

/** Mock validation outcomes — stands in for the real control API. */
const CASES: Case[] = [
  {
    q: "Cordoba 1430 Cap Fed",
    tone: "info",
    status: "Corregido",
    sub: "Dirección interpretada y normalizada",
    score: "0.941",
    conf: "Alta",
    latency: "82 ms",
    norm: "Av. Córdoba 1430",
    city: "Ciudad Autónoma de Buenos Aires",
    prov: "CABA",
    diag: "Dirección interpretada y normalizada",
    log: "Validación registrada",
    action: "Guardar versión normalizada y continuar",
    fixes: [
      ["Cordoba", "Córdoba", "ortografía"],
      ["Cap Fed", "Ciudad Autónoma de Buenos Aires", "expansión"],
      ["—", "Av. (tipo de vía inferido)", "inferido"],
    ],
    note: "Se normalizaron 3 campos sin intervención manual. El texto original queda registrado junto al resultado.",
  },
  {
    q: "Av. Córdoba 1430",
    tone: "ok",
    status: "Validado",
    sub: "Coincidencia exacta encontrada",
    score: "0.987",
    conf: "Alta",
    latency: "76 ms",
    norm: "Av. Córdoba 1430",
    city: "Ciudad Autónoma de Buenos Aires",
    prov: "CABA",
    diag: "Coincidencia encontrada · Campos completos",
    log: "Validación registrada",
    action: "Continuar flujo",
    fixes: [
      ["—", "Sin correcciones aplicadas", "sin cambios"],
      ["—", "Altura y vía confirmadas", "verificado"],
    ],
    note: "La dirección informada coincide con el resultado normalizado. No se requirieron correcciones.",
  },
  {
    q: "Calle 14 s/n",
    tone: "warn",
    status: "Requiere revisión",
    sub: "Datos insuficientes para resolver con confianza alta",
    score: "0.612",
    conf: "Media",
    latency: "89 ms",
    norm: "Calle 14 (altura no informada)",
    city: "Localidad no determinada",
    prov: "Buenos Aires",
    diag: "Múltiples coincidencias posibles · Altura ausente",
    log: "Caso derivado a revisión",
    action: "Derivar a revisión interna o solicitar información adicional",
    fixes: [
      ["s/n", "Altura no informada", "campo faltante"],
      ["Calle 14", "4 coincidencias en la provincia", "ambigüedad"],
    ],
    note: "El resultado se marca como no concluyente. La decisión final queda en tus reglas internas.",
  },
  {
    q: "Zona norte lote 8",
    tone: "bad",
    status: "No resoluble",
    sub: "No pudo validarse con la información disponible",
    score: "0.218",
    conf: "Baja",
    latency: "91 ms",
    norm: "Sin resultado normalizado",
    city: "No determinada",
    prov: "No determinada",
    diag: "Referencia sin vía ni localidad identificable",
    log: "Resultado registrado como no resoluble",
    action: "Bloquear avance, solicitar corrección o escalar según reglas internas",
    fixes: [
      ["Zona norte", "Referencia genérica no georreferenciable", "no interpretable"],
      ["lote 8", "Sin vía ni localidad asociada", "campo insuficiente"],
    ],
    note: "Ubidata devuelve el diagnóstico para que el proceso decida: pedir corrección, escalar o rechazar.",
  },
];

function pick(q: string): Case {
  const t = q.trim().toLowerCase();
  if (!t) return CASES[0];
  let best: Case | null = null;
  let bestScore = 0;
  CASES.forEach((cs) => {
    const tokens = cs.q.toLowerCase().split(/\s+/);
    let score = 0;
    tokens.forEach((tok) => {
      if (tok.length > 2 && t.includes(tok.replace(/[.,]/g, ""))) score++;
    });
    if (t.includes(cs.q.toLowerCase())) score += 3;
    if (score > bestScore) {
      bestScore = score;
      best = cs;
    }
  });
  if (best) return best;
  // Unknown addresses surface as a review case derived from the input.
  return {
    ...CASES[2],
    norm: q.trim(),
    fixes: [[q.trim(), "Sin coincidencia de alta confianza", "ambigüedad"]],
  };
}

/** Fixed demo timestamp (UTC-based so server and client always agree). */
function stamp(offsetSec: number): string {
  const base = new Date(Date.UTC(2026, 7, 25, 14, 32, 7) + offsetSec * 1000);
  return base.toISOString().replace("T", " ").slice(0, 19) + " UTC-3";
}

export default function ComplianceSimulator() {
  const [query, setQuery] = useState(CASES[0].q);
  const [result, setResult] = useState<Case | null>(null);
  const [view, setView] = useState<"resumen" | "diagnostico" | "audit">("resumen");

  const tone = result ? TONE[result.tone] : null;

  const trail: [string, string][] = result
    ? [
        ["Dirección recibida", query.trim() || result.q],
        ["Validación ejecutada", "Motor de Address Intelligence · v2"],
        ["Resultado generado", `${result.status} · confianza ${result.score}`],
        ["Acción sugerida", result.action],
        ["Registro almacenado", result.log],
      ]
    : [];

  return (
    <div className={c("sim__grid")}>
      {/* LEFT: internal request */}
      <div className={c("dpanel")}>
        <div className={c("dpanel__head")}>
          <span className={c("ic")}>
            <FileText className={c("i")} strokeWidth={1.8} />
          </span>
          <span className={c("t")}>Solicitud interna de validación</span>
          <span className={c("tag")}>Proceso sensible</span>
        </div>
        <div className={c("dpanel__body")}>
          <div className={c("fmrow")}>
            <div className={c("fmf")}>
              <span className={c("dlabel")}>Cliente / ID</span>
              <div className={c("ph", "mono")}>CLI-0093421</div>
            </div>
            <div className={c("fmf")}>
              <span className={c("dlabel")}>Tipo de proceso</span>
              <div className={c("ph")}>KYC · alta de cliente</div>
            </div>
          </div>
          <div className={c("fmrow")}>
            <div className={c("fmf")}>
              <span className={c("dlabel")}>País</span>
              <div className={c("ph")}>Argentina</div>
            </div>
            <div className={c("fmf")}>
              <span className={c("dlabel")}>Provincia</span>
              <div className={c("ph")}>CABA</div>
            </div>
          </div>
          <div className={c("fmf", "fmf--full")} style={{ marginBottom: 14 }}>
            <span className={c("dlabel")}>Localidad</span>
            <div className={c("ph")}>Ciudad Autónoma de Buenos Aires</div>
          </div>

          <div className={c("fmf", "fmf--full")}>
            <span className={c("dlabel", "dlabel--active")}>
              Domicilio informado <span className={c("req")}>· editable</span>
            </span>
            <div className={c("daddr__field")}>
              <Pin className={c("pin")} strokeWidth={1.8} />
              <input
                type="text"
                autoComplete="off"
                spellCheck={false}
                placeholder="Cordoba 1430 Cap Fed"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    setResult(pick(query));
                  }
                }}
              />
            </div>
            <div className={c("presets")}>
              <span className={c("presets__k")}>Probá con otros casos:</span>
              {CASES.map((cs) => (
                <button
                  key={cs.q}
                  className={query.trim() === cs.q ? c("preset", "is-on") : c("preset")}
                  onClick={() => {
                    setQuery(cs.q);
                    setResult(cs);
                  }}
                >
                  {cs.q}
                </button>
              ))}
            </div>
          </div>

          <button className={c("dform__submit")} onClick={() => setResult(pick(query))}>
            <ShieldCheck className={c("i")} />
            Ejecutar validación
          </button>
        </div>
      </div>

      {/* RIGHT: control result */}
      <div className={c("dpanel", "dpanel--resp")}>
        <div className={c("dpanel__head")}>
          <span className={c("ic")}>
            <Braces className={c("i")} strokeWidth={1.8} />
          </span>
          <span className={c("t")}>Resultado de control Ubidata</span>
          <span className={c("tag")}>{result ? result.latency : "—"}</span>
        </div>
        <div className={c("dtabs")} role="tablist">
          {(
            [
              ["resumen", "Resumen"],
              ["diagnostico", "Diagnóstico"],
              ["audit", "Audit trail"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              className={view === id ? c("dtab", "is-active") : c("dtab")}
              onClick={() => setView(id)}
            >
              {label}
            </button>
          ))}
        </div>
        <div className={c("dresp")}>
          {!result && (
            <div className={c("dresp__await")}>
              <span className={c("ic")}>
                <Shield className={c("i")} strokeWidth={1.6} />
              </span>
              <p>Ejecutá la validación para ver estado, diagnóstico y acción sugerida.</p>
            </div>
          )}

          {result && tone && view === "resumen" && (
            <div className={c("dview", "is-shown")}>
              <div className={c("dstatus")}>
                <span className={c("ic")} style={{ background: tone.bg, color: tone.fg }}>
                  <ToneIcon tone={result.tone} />
                </span>
                <span>
                  <span className={c("st")} style={{ color: "#fff" }}>
                    {result.status}
                  </span>
                  <span className={c("sd")}>{result.sub}</span>
                </span>
                <span className={c("score")}>
                  <span className={c("sk")}>Confianza</span>
                  <span className={c("sv")} style={{ color: tone.fg }}>
                    {result.conf} · {result.score}
                  </span>
                </span>
              </div>
              <div className={c("dkv")}>
                <div className={c("dkv__row")}>
                  <span className={c("dkv__k")}>Dirección normalizada</span>
                  <span className={c("dkv__v", "accent")}>{result.norm}</span>
                </div>
                <div className={c("dkv__row")}>
                  <span className={c("dkv__k")}>Localidad</span>
                  <span className={c("dkv__v")}>{result.city}</span>
                </div>
                <div className={c("dkv__row")}>
                  <span className={c("dkv__k")}>Provincia</span>
                  <span className={c("dkv__v")}>{result.prov}</span>
                </div>
                <div className={c("dkv__row")}>
                  <span className={c("dkv__k")}>Diagnóstico</span>
                  <span className={c("dkv__v")}>{result.diag}</span>
                </div>
                <div className={c("dkv__row")}>
                  <span className={c("dkv__k")}>Registro</span>
                  <span className={c("dkv__v")}>{result.log}</span>
                </div>
              </div>
              <div className={c("drec")}>
                <FileCheck className={c("i")} />
                <div className={c("rt")}>
                  Acción sugerida<span>{result.action}</span>
                </div>
              </div>
            </div>
          )}

          {result && view === "diagnostico" && (
            <div className={c("dview", "is-shown")}>
              <div className={c("diaglist")}>
                {result.fixes.map((f, i) => (
                  <div className={c("diagrow")} key={i}>
                    <span className={c("from")}>{f[0]}</span>
                    <ArrowRight className={c("arr")} style={{ width: 14, height: 14 }} />
                    <span className={c("to")}>{f[1]}</span>
                    <span className={c("tagf")}>{f[2]}</span>
                  </div>
                ))}
              </div>
              <p className={c("diagnote")}>{result.note}</p>
            </div>
          )}

          {result && view === "audit" && (
            <div className={c("dview", "is-shown")}>
              <div className={c("trail")}>
                {trail.map(([title, detail], i) => (
                  <div className={c("trailrow")} key={i}>
                    <span className={c("dot")}>
                      <i />
                    </span>
                    <span className={c("tb")}>
                      <span className={c("tt")}>
                        {title} — {detail}
                      </span>
                      <span className={c("tm")}>{stamp(i)}</span>
                    </span>
                  </div>
                ))}
              </div>
              <div className={c("trailfoot")}>
                <FileCheck className={c("i")} />
                <span>Registro disponible para consulta interna y auditoría posterior.</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
