"use client";

import { useRef, useState } from "react";
import styles from "./home.module.css";
import { makeCx } from "@/lib/cx";
import { MapPin, X, CheckCircle } from "@/components/icons";

const c = makeCx(styles);

type Record = {
  full: string;
  calle: string;
  altura: string;
  colonia: string;
  cp: string;
  municipio: string;
  ciudad: string;
  lat: string;
  lng: string;
  conf: number;
};

/** Mock address dataset — stands in for the validation API until it exists. */
const DB: Record[] = [
  { full: "Av. Insurgentes Sur 1602, Crédito Constructor", calle: "Av. Insurgentes Sur", altura: "1602", colonia: "Crédito Constructor", cp: "03940", municipio: "Benito Juárez", ciudad: "CDMX", lat: "19.3702", lng: "-99.1830", conf: 0.987 },
  { full: "Av. Insurgentes Sur 1620, Del Valle", calle: "Av. Insurgentes Sur", altura: "1620", colonia: "Del Valle Centro", cp: "03100", municipio: "Benito Juárez", ciudad: "CDMX", lat: "19.3689", lng: "-99.1808", conf: 0.842 },
  { full: "Av. Corrientes 1234, San Nicolás", calle: "Av. Corrientes", altura: "1234", colonia: "San Nicolás", cp: "C1043", municipio: "Comuna 1", ciudad: "CABA", lat: "-34.6037", lng: "-58.3850", conf: 0.971 },
  { full: "Bartolomé Mitre 455, Centro", calle: "Bartolomé Mitre", altura: "455", colonia: "Centro", cp: "S2000", municipio: "Rosario", ciudad: "Santa Fe", lat: "-32.9468", lng: "-60.6393", conf: 0.958 },
  { full: "Calle 50 1234, La Plata", calle: "Calle 50", altura: "1234", colonia: "Casco Urbano", cp: "B1900", municipio: "La Plata", ciudad: "Buenos Aires", lat: "-34.9215", lng: "-57.9545", conf: 0.933 },
];

/** Lowercase + strip accents so "cordoba" matches "Córdoba".
 *  The character class is the combining-diacritics block U+0300–U+036F. */
const norm = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");

function matchesFor(query: string): Record[] {
  const q = norm(query.trim());
  if (!q) return [];
  return DB.filter((d) => norm(d.full).includes(q) || norm(d.calle).includes(q)).slice(0, 3);
}

export default function AddressLookupDemo() {
  const [query, setQuery] = useState("Av. Insurgentes Sur 16");
  const [selected, setSelected] = useState<Record | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const suggestions = selected ? [] : matchesFor(query);

  let hint: string | null;
  if (selected) hint = null;
  else if (!query.trim()) hint = "Escribí una dirección para ver sugerencias";
  else if (!suggestions.length) hint = 'Sin coincidencias — probá "Insurgentes", "Corrientes" o "Mitre"';
  else hint = "Elegí una sugerencia para ver la respuesta normalizada";

  function select(d: Record) {
    setSelected(d);
    setQuery(`${d.calle} ${d.altura}`);
  }

  function clear() {
    setQuery("");
    setSelected(null);
    inputRef.current?.focus();
  }

  const verified = selected ? selected.conf >= 0.95 : false;

  return (
    <div className={c("demo")} id="demo">
      <div className={c("demo__top")}>
        <span className={c("demo__ov")}>
          <span className={c("live")} /> Address Lookup · en vivo
        </span>
        <span className={c("demo__endpoint")}>POST /v2/validar</span>
      </div>

      <div className={c("demo__field")}>
        <MapPin className={c("pin")} strokeWidth={1.8} />
        <input
          ref={inputRef}
          type="text"
          autoComplete="off"
          spellCheck={false}
          placeholder="Escribí una dirección…"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setSelected(null);
          }}
        />
        <button className={c("demo__clear")} aria-label="Limpiar" onClick={clear}>
          <X className={c("i")} />
        </button>
      </div>

      <div className={c("demo__sug")}>
        {suggestions.map((d, i) => (
          <button
            key={d.full}
            className={i === 0 ? c("active") : undefined}
            onClick={() => select(d)}
          >
            <MapPin className={c("i")} />
            <span>{d.full}</span>
            <span className={c("conf")}>{d.conf.toFixed(3)}</span>
          </button>
        ))}
      </div>

      {selected && (
        <div className={c("demo__result")}>
          <div className={c("demo__rhead")}>
            <span className={c("demo__status")}>
              <CheckCircle className={c("i")} />
              {verified ? "Dirección verificada" : "Verificación parcial"}
            </span>
            <span className={c("demo__lat")}>78 ms</span>
          </div>
          <div className={c("demo__kv")}>
            <div className={c("k")}>Calle</div>
            <div className={c("v")}>{selected.calle}</div>
            <div className={c("k")}>Altura</div>
            <div className={c("v")}>{selected.altura}</div>
            <div className={c("k")}>Colonia / Barrio</div>
            <div className={c("v")}>{selected.colonia}</div>
            <div className={c("k")}>CP</div>
            <div className={c("v")}>{selected.cp}</div>
            <div className={c("k")}>Municipio</div>
            <div className={c("v")}>{selected.municipio}</div>
            <div className={c("k")}>Ciudad</div>
            <div className={c("v")}>{selected.ciudad}</div>
            <div className={c("k")}>Coordenadas</div>
            <div className={c("v")}>
              {selected.lat}, {selected.lng}
            </div>
            <div className={c("k")}>Confianza</div>
            <div className={c("v")}>
              {selected.conf.toFixed(3)}{" "}
              <span className={c("demo__conf-bar")}>
                <span style={{ width: `${Math.round(selected.conf * 100)}%` }} />
              </span>
            </div>
          </div>
        </div>
      )}

      {hint && <div className={c("demo__hint")}>{hint}</div>}
    </div>
  );
}
