"use client";

import { useState, type ReactNode } from "react";
import styles from "./home.module.css";
import { makeCx } from "@/lib/cx";
import { CheckCircle } from "@/components/icons";

const c = makeCx(styles);

type Proto = "rest" | "soap";
type View = "request" | "response";

/* Syntax-highlight token helpers — the prototype's .ck/.cs/.cn/.cc/.ct colors
   live in globals.css under the .code-body hook. */
const k = (s: string) => <span className="ck">{s}</span>;
const str = (s: string) => <span className="cs">{s}</span>;
const num = (s: string) => <span className="cn">{s}</span>;
const com = (s: string) => <span className="cc">{s}</span>;
const tag = (s: string) => <span className="ct">{s}</span>;

const SAMPLES: Record<
  Proto,
  { verb: string; url: string; mime: string; request: ReactNode; response: ReactNode }
> = {
  rest: {
    verb: "POST",
    url: "/v2/direcciones/validar",
    mime: "application/json",
    request: (
      <>
        {com("// Authorization: Bearer ub_live_•••")}
        {"\n{\n  "}
        {k('"direccion"')}: {str('"Av Insurgentes Sur 1602, CDMX"')},{"\n  "}
        {k('"pais"')}: {str('"MX"')},{"\n  "}
        {k('"geocodificar"')}: {num("true")}
        {"\n}"}
      </>
    ),
    response: (
      <>
        {"{\n  "}
        {k('"estatus"')}: {str('"verificada"')},{"\n  "}
        {k('"confianza"')}: {num("0.987")},{"\n  "}
        {k('"direccion"')}: {"{\n    "}
        {k('"calle"')}: {str('"Av. Insurgentes Sur"')},{"\n    "}
        {k('"altura"')}: {str('"1602"')},{"\n    "}
        {k('"colonia"')}: {str('"Crédito Constructor"')},{"\n    "}
        {k('"cp"')}: {str('"03940"')},{"\n    "}
        {k('"municipio"')}: {str('"Benito Juárez"')}
        {"\n  },\n  "}
        {k('"geo"')}: {"{ "}
        {k('"lat"')}: {num("19.3702")}, {k('"lng"')}: {num("-99.1830")}
        {" }\n}"}
      </>
    ),
  },
  soap: {
    verb: "POST",
    url: "/soap/ValidarDireccion",
    mime: "text/xml; charset=utf-8",
    request: (
      <>
        {tag("<soap:Envelope")} {k("xmlns:soap")}={str('"http://schemas.xmlsoap.org/soap/envelope/"')}
        {tag(">")}
        {"\n  "}
        {tag("<soap:Body>")}
        {"\n    "}
        {tag("<ValidarDireccion>")}
        {"\n      "}
        {tag("<Direccion>")}
        {str("Av Insurgentes Sur 1602, CDMX")}
        {tag("</Direccion>")}
        {"\n      "}
        {tag("<Pais>")}
        {str("MX")}
        {tag("</Pais>")}
        {"\n    "}
        {tag("</ValidarDireccion>")}
        {"\n  "}
        {tag("</soap:Body>")}
        {"\n"}
        {tag("</soap:Envelope>")}
      </>
    ),
    response: (
      <>
        {tag("<soap:Envelope>")}
        {"\n  "}
        {tag("<soap:Body>")}
        {"\n    "}
        {tag("<ValidarDireccionResponse>")}
        {"\n      "}
        {tag("<Estatus>")}
        {str("verificada")}
        {tag("</Estatus>")}
        {"\n      "}
        {tag("<Confianza>")}
        {num("0.987")}
        {tag("</Confianza>")}
        {"\n      "}
        {tag("<Calle>")}
        {str("Av. Insurgentes Sur")}
        {tag("</Calle>")}
        {"\n      "}
        {tag("<CP>")}
        {str("03940")}
        {tag("</CP>")}
        {"\n    "}
        {tag("</ValidarDireccionResponse>")}
        {"\n  "}
        {tag("</soap:Body>")}
        {"\n"}
        {tag("</soap:Envelope>")}
      </>
    ),
  },
};

export default function ApiCodeCard() {
  const [proto, setProto] = useState<Proto>("rest");
  const [view, setView] = useState<View>("request");
  const sample = SAMPLES[proto];

  return (
    <div className={c("code-card")} id="codeCard">
      <div className={c("code-card__top")}>
        <div className={c("code-card__dots")}>
          <span />
          <span />
          <span />
        </div>
        <div className={c("code-card__proto")}>
          <button
            className={proto === "rest" ? c("active") : undefined}
            onClick={() => setProto("rest")}
          >
            REST
          </button>
          <button
            className={proto === "soap" ? c("active") : undefined}
            onClick={() => setProto("soap")}
          >
            SOAP
          </button>
        </div>
      </div>
      <div className={c("code-card__tabs")}>
        <button
          className={view === "request" ? c("active") : undefined}
          onClick={() => setView("request")}
        >
          Request
        </button>
        <button
          className={view === "response" ? c("active") : undefined}
          onClick={() => setView("response")}
        >
          Response
        </button>
      </div>
      <div className={c("code-card__verb")}>
        <span className={c("m")}>{sample.verb}</span>
        <span className={c("u")}>{sample.url}</span>
      </div>
      <pre className="code-body">{sample[view]}</pre>
      <div className={c("code-card__foot")}>
        <span>
          <CheckCircle className={c("i")} /> 200 OK · 78 ms
        </span>
        <span>{sample.mime}</span>
      </div>
    </div>
  );
}
