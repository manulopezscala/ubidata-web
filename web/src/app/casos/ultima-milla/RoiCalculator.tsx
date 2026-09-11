"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { makeCx } from "@/lib/cx";
import { Info } from "@/components/icons";

const c = makeCx(styles);

/** Share of address errors assumed preventable — demo assumption, as in the prototype. */
const PREVENTABLE = 0.65;

const nf = new Intl.NumberFormat("es-AR");
const money = (n: number) => "$" + nf.format(Math.round(n));
const num = (n: number) => nf.format(Math.round(n));

/** Parse a localized number: drop thousand separators, treat comma as decimal. */
function parse(str: string): number {
  if (!str) return 0;
  const clean = str.replace(/[^\d,]/g, "").replace(",", ".");
  const v = parseFloat(clean);
  return isNaN(v) ? 0 : v;
}

/** Integer fields show thousand separators while typing. */
function formatInt(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  return digits ? nf.format(parseInt(digits, 10)) : "";
}

export default function RoiCalculator() {
  const [shipmentsRaw, setShipmentsRaw] = useState("10.000");
  const [costRaw, setCostRaw] = useState("3.500");
  const [rateRaw, setRateRaw] = useState("4");

  const shipments = parse(shipmentsRaw);
  const cost = parse(costRaw);
  const rate = parse(rateRaw) / 100;

  const affected = shipments * rate;
  const monthlyCost = affected * cost;
  const monthlySave = monthlyCost * PREVENTABLE;
  const annualSave = monthlySave * 12;
  const prevented = affected * PREVENTABLE;

  return (
    <>
      <div className={c("calc")}>
        <div className={c("calc__inputs")}>
          <h3>Tu operación</h3>
          <p className={c("hint")}>Ajustá los valores según tu volumen y costos reales.</p>

          <div className={c("field")}>
            <label htmlFor="ms">Envíos mensuales</label>
            <div className={c("field__wrap")}>
              <input
                id="ms"
                type="text"
                inputMode="numeric"
                autoComplete="off"
                value={shipmentsRaw}
                onChange={(e) => setShipmentsRaw(formatInt(e.target.value))}
              />
            </div>
          </div>

          <div className={c("field")}>
            <label htmlFor="ec">Costo promedio por envío fallido o reprocesado</label>
            <div className={c("field__wrap")}>
              <span className={c("field__pre")}>$</span>
              <input
                id="ec"
                className={c("has-pre")}
                type="text"
                inputMode="numeric"
                autoComplete="off"
                value={costRaw}
                onChange={(e) => setCostRaw(formatInt(e.target.value))}
              />
            </div>
          </div>

          <div className={c("field")}>
            <label htmlFor="br">Porcentaje estimado de direcciones mal cargadas</label>
            <div className={c("field__wrap")}>
              <input
                id="br"
                type="text"
                inputMode="decimal"
                autoComplete="off"
                value={rateRaw}
                onChange={(e) => setRateRaw(e.target.value.replace(/[^\d,.]/g, ""))}
              />
              <span className={c("field__suf")}>%</span>
            </div>
          </div>

          <div className={c("calc__assumption")}>
            <Info className={c("i")} />
            <div>
              <span className={c("at")}>
                Errores prevenibles con Ubidata: <b>65%</b>
              </span>
              <span className={c("an")}>
                Estimación referencial para fines demostrativos. Los resultados reales dependen del
                flujo, la calidad de datos y la integración.
              </span>
            </div>
          </div>
        </div>

        <div className={c("calc__result")}>
          <span className={c("rlabel")}>Ahorro anual estimado</span>
          <div className={c("calc__big")}>{money(annualSave)}</div>
          <span className={c("calc__sub")}>con validación de direcciones antes del despacho</span>
          <div className={c("calc__grid")}>
            <div className={c("calc__cell")}>
              <div className={c("ck")}>Envíos afectados / mes</div>
              <div className={c("cv")}>{num(affected)}</div>
            </div>
            <div className={c("calc__cell")}>
              <div className={c("ck")}>Costo mensual estimado</div>
              <div className={c("cv")}>{money(monthlyCost)}</div>
            </div>
            <div className={c("calc__cell")}>
              <div className={c("ck")}>Errores prevenibles / mes</div>
              <div className={c("cv", "accent")}>{num(prevented)}</div>
            </div>
            <div className={c("calc__cell")}>
              <div className={c("ck")}>Ahorro mensual estimado</div>
              <div className={c("cv", "accent")}>{money(monthlySave)}</div>
            </div>
          </div>
        </div>
      </div>
      <p className={c("calc__note")}>
        Esta calculadora ofrece una estimación orientativa. No representa una garantía de ahorro. Los
        resultados reales dependen de la operación, la calidad de los datos y la implementación.
      </p>
    </>
  );
}
