"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import { makeCx } from "@/lib/cx";
import {
  Pin,
  Check,
  Info,
  UserPlus,
  Braces,
  Search,
  Settings,
  Bookmark,
  CheckSquare,
} from "@/components/icons";

const c = makeCx(styles);

type Suggestion = {
  match: string[];
  label: string;
  sub: string;
  conf: string;
  confNum: string;
  latency: string;
  norm: string;
  city: string;
  prov: string;
  diag: string;
  diagCode: string;
  action: string;
};

/** Mock lookup dataset — replaced by the real API in a later stage. */
const DATA: Suggestion[] = [
  {
    match: ["cordoba 1430", "córdoba 1430", "cordoba 1430 capital", "cordoba 1430 cap", "av cordoba 1430"],
    label: "Av. Córdoba 1430",
    sub: "Ciudad Autónoma de Buenos Aires · CABA",
    conf: "98.7%",
    confNum: "0.987",
    latency: "78 ms",
    norm: "Av. Córdoba 1430",
    city: "Ciudad Autónoma de Buenos Aires",
    prov: "CABA",
    diag: "Coincidencia encontrada y normalizada",
    diagCode: "matched_and_normalized",
    action: "Guardar domicilio estructurado",
  },
  {
    match: ["corrientes 3200", "av corrientes 3200", "corrientes 3200 caba"],
    label: "Av. Corrientes 3200",
    sub: "Ciudad Autónoma de Buenos Aires · CABA",
    conf: "97.4%",
    confNum: "0.974",
    latency: "81 ms",
    norm: "Av. Corrientes 3200",
    city: "Ciudad Autónoma de Buenos Aires",
    prov: "CABA",
    diag: "Coincidencia encontrada y normalizada",
    diagCode: "matched_and_normalized",
    action: "Guardar domicilio estructurado",
  },
  {
    match: ["san martin 850 cordoba", "san martín 850", "san martin 850 cba"],
    label: "San Martín 850",
    sub: "Córdoba Capital · Córdoba",
    conf: "96.1%",
    confNum: "0.961",
    latency: "84 ms",
    norm: "San Martín 850",
    city: "Córdoba",
    prov: "Córdoba",
    diag: "Coincidencia encontrada y normalizada",
    diagCode: "matched_and_normalized",
    action: "Guardar domicilio estructurado",
  },
];

/** Loose token scoring, mirroring the prototype: always guides toward a result. */
function suggestionsFor(raw: string): Suggestion[] {
  const q = raw.trim().toLowerCase();
  if (!q) return [];
  const scored = DATA.map((d) => {
    let score = 0;
    d.match.forEach((m) => {
      if (m.includes(q) || q.includes(m.split(" ")[0])) score++;
    });
    const qt = q.split(/\s+/);
    d.match.forEach((m) =>
      qt.forEach((t) => {
        if (t.length > 2 && m.includes(t)) score += 0.5;
      })
    );
    return { d, score };
  })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score);

  let list = scored.map((x) => x.d);
  if (!list.length && q.length >= 2) list = [DATA[0]];
  return list.slice(0, 3);
}

export default function OnboardingDemo() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Suggestion | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  const [tab, setTab] = useState<"negocio" | "tecnica">("negocio");

  const fieldRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const list = suggestionsFor(query);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      const t = e.target as Node;
      if (!fieldRef.current?.contains(t) && !menuRef.current?.contains(t)) setMenuOpen(false);
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  function select(d: Suggestion) {
    setSelected(d);
    setQuery(`${d.label}, ${d.sub.split(" · ")[0]}`);
    setMenuOpen(false);
    setActiveIdx(-1);
  }

  function onChange(v: string) {
    setQuery(v);
    setSelected(null);
    setActiveIdx(-1);
    setMenuOpen(suggestionsFor(v).length > 0);
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!menuOpen) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIdx((i) => Math.min(i + 1, list.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const pick = list[activeIdx] ?? list[0];
      if (pick) select(pick);
    } else if (e.key === "Escape") {
      setMenuOpen(false);
    }
  }

  return (
    <div className={c("demo__grid")}>
      {/* LEFT: form */}
      <div className={c("dpanel", "dform")}>
        <div className={c("dpanel__head")}>
          <span className={c("ic")}>
            <UserPlus className={c("i")} strokeWidth={1.8} />
          </span>
          <span className={c("t")}>Formulario de alta</span>
          <span className={c("tag")}>Onboarding empresarial</span>
        </div>
        <div className={c("dpanel__body")}>
          <div className={c("fmrow")}>
            <div className={c("fmf")}>
              <span className={c("dlabel")}>Nombre y apellido</span>
              <div className={c("ph")}>María González</div>
            </div>
            <div className={c("fmf")}>
              <span className={c("dlabel")}>Email</span>
              <div className={c("ph")}>maria@empresa.com</div>
            </div>
          </div>
          <div className={c("fmrow")}>
            <div className={c("fmf")}>
              <span className={c("dlabel")}>Documento / CUIT</span>
              <div className={c("ph", "mono")}>20-31654987-4</div>
            </div>
            <div className={c("fmf")}>
              <span className={c("dlabel")}>Teléfono</span>
              <div className={c("ph", "mono")}>+54 11 5123-4567</div>
            </div>
          </div>
          <div className={c("fmf", "fmf--full")} style={{ marginBottom: 14 }}>
            <span className={c("dlabel")}>Razón social</span>
            <div className={c("ph")}>González &amp; Asociados S.R.L.</div>
          </div>

          <div className={c("fmf", "fmf--full")}>
            <span className={c("dlabel", "dlabel--active")}>
              Dirección{" "}
              <span className={c("req")} style={selected ? { color: "var(--success)" } : undefined}>
                · {selected ? "validada" : "editable"}
              </span>
            </span>
            <div className={c("daddr")}>
              <div
                ref={fieldRef}
                className={selected ? c("daddr__field", "is-valid") : c("daddr__field")}
              >
                <Pin className={c("pin")} strokeWidth={1.8} />
                <input
                  type="text"
                  autoComplete="off"
                  spellCheck={false}
                  placeholder="Escribí: Cordoba 1430 capital"
                  value={query}
                  onChange={(e) => onChange(e.target.value)}
                  onFocus={() => {
                    if (query.trim() && list.length) setMenuOpen(true);
                  }}
                  onKeyDown={onKeyDown}
                />
                <Check className={c("check")} strokeWidth={2.4} />
              </div>
              <div
                ref={menuRef}
                className={menuOpen && list.length ? c("daddr__menu", "is-open") : c("daddr__menu")}
              >
                <div className={c("daddr__menu-h")}>Sugerencias · Address Lookup</div>
                <div>
                  {list.map((d, i) => (
                    <div
                      key={d.label}
                      className={i === activeIdx ? c("dsug", "is-active") : c("dsug")}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        select(d);
                      }}
                    >
                      <Pin className={c("mp")} strokeWidth={1.8} />
                      <span className={c("stxt")}>
                        <b>{d.label}</b>
                        <span>{d.sub}</span>
                      </span>
                      <span className={c("conf")}>
                        <span className={c("d")} />
                        {d.conf}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className={c("dhint")}>
              <Info className={c("i")} /> Probá con una dirección incompleta o con abreviaciones.
            </div>
          </div>

          <button
            className={selected ? c("dform__submit", "is-ready") : c("dform__submit")}
            disabled={!selected}
          >
            {selected ? "Continuar" : "Seleccioná una dirección para continuar"}
          </button>
        </div>
      </div>

      {/* RIGHT: response panel */}
      <div className={c("dpanel", "dpanel--resp")}>
        <div className={c("dpanel__head")}>
          <span className={c("ic")}>
            <Braces className={c("i")} strokeWidth={1.8} />
          </span>
          <span className={c("t")}>Respuesta de Ubidata</span>
          <span className={c("tag")}>{selected ? selected.latency : "en tiempo real"}</span>
        </div>
        <div className={c("dtabs")} role="tablist">
          <button
            className={tab === "negocio" ? c("dtab", "is-active") : c("dtab")}
            onClick={() => setTab("negocio")}
          >
            Vista negocio
          </button>
          <button
            className={tab === "tecnica" ? c("dtab", "is-active") : c("dtab")}
            onClick={() => setTab("tecnica")}
          >
            Vista técnica
          </button>
        </div>
        <div className={c("dresp")}>
          {!selected && (
            <div className={c("dresp__await")}>
              <span className={c("ic")}>
                <Search className={c("i")} strokeWidth={1.6} />
              </span>
              <p>
                Escribí una dirección y seleccioná una sugerencia para ver el resultado de validación.
              </p>
            </div>
          )}

          {selected && tab === "negocio" && (
            <div className={c("dview", "is-shown")}>
              <div className={c("dchips")}>
                <span className={c("dchip")}>
                  <Check className={c("i")} strokeWidth={2.2} /> Validada
                </span>
                <span className={c("dchip")}>
                  <Check className={c("i")} strokeWidth={2.2} /> Normalizada
                </span>
                <span className={c("dchip")}>
                  <Settings className={c("i")} strokeWidth={2.2} /> Alta confianza
                </span>
                <span className={c("dchip")}>
                  <Bookmark className={c("i")} strokeWidth={2.2} /> Lista para guardar
                </span>
              </div>
              <div className={c("dkv")}>
                <div className={c("dkv__row")}>
                  <span className={c("dkv__k")}>Estado</span>
                  <span className={c("dkv__v", "success")}>Validada</span>
                </div>
                <div className={c("dkv__row")}>
                  <span className={c("dkv__k")}>Confianza</span>
                  <span className={c("dkv__v", "accent")}>Alto · {selected.conf}</span>
                </div>
                <div className={c("dkv__row")}>
                  <span className={c("dkv__k")}>Normalizada</span>
                  <span className={c("dkv__v")}>{selected.norm}</span>
                </div>
                <div className={c("dkv__row")}>
                  <span className={c("dkv__k")}>Localidad</span>
                  <span className={c("dkv__v")}>{selected.city}</span>
                </div>
                <div className={c("dkv__row")}>
                  <span className={c("dkv__k")}>Provincia</span>
                  <span className={c("dkv__v")}>{selected.prov}</span>
                </div>
                <div className={c("dkv__row")}>
                  <span className={c("dkv__k")}>País</span>
                  <span className={c("dkv__v")}>Argentina</span>
                </div>
                <div className={c("dkv__row")}>
                  <span className={c("dkv__k")}>Diagnóstico</span>
                  <span className={c("dkv__v")}>{selected.diag}</span>
                </div>
              </div>
              <div className={c("drec")}>
                <CheckSquare className={c("i")} />
                <div className={c("rt")}>
                  Acción recomendada<span>{selected.action}</span>
                </div>
              </div>
            </div>
          )}

          {selected && tab === "tecnica" && (
            <div className={c("dview", "is-shown")}>
              <pre className={c("djson")}>
                {"{\n  "}
                <span className={c("k")}>&quot;status&quot;</span>:{" "}
                <span className={c("s")}>&quot;validated&quot;</span>,{"\n  "}
                <span className={c("k")}>&quot;confidence&quot;</span>:{" "}
                <span className={c("s")}>&quot;high&quot;</span>,{"\n  "}
                <span className={c("k")}>&quot;score&quot;</span>:{" "}
                <span className={c("p")}>{selected.confNum}</span>,{"\n  "}
                <span className={c("k")}>&quot;normalized_address&quot;</span>:{" "}
                <span className={c("s")}>&quot;{selected.norm}&quot;</span>,{"\n  "}
                <span className={c("k")}>&quot;city&quot;</span>:{" "}
                <span className={c("s")}>&quot;{selected.city}&quot;</span>,{"\n  "}
                <span className={c("k")}>&quot;province&quot;</span>:{" "}
                <span className={c("s")}>&quot;{selected.prov}&quot;</span>,{"\n  "}
                <span className={c("k")}>&quot;country&quot;</span>:{" "}
                <span className={c("s")}>&quot;AR&quot;</span>,{"\n  "}
                <span className={c("k")}>&quot;diagnosis&quot;</span>:{" "}
                <span className={c("s")}>&quot;{selected.diagCode}&quot;</span>
                {"\n}"}
              </pre>
              <div className={c("dmeta")}>
                <div className={c("dmeta__item")}>
                  <span className={c("mk")}>Endpoint</span>
                  <span className={c("mv")} style={{ fontSize: "0.78rem" }}>
                    POST /v2/validar
                  </span>
                </div>
                <div className={c("dmeta__item")}>
                  <span className={c("mk")}>Latencia</span>
                  <span className={c("mv")}>{selected.latency}</span>
                </div>
                <div className={c("dmeta__item")}>
                  <span className={c("mk")}>Confianza</span>
                  <span className={c("mv")}>{selected.confNum}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
