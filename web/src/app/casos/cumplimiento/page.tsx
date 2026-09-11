import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import { makeCx } from "@/lib/cx";
import ComplianceSimulator from "./ComplianceSimulator";
import {
  ShieldCheck,
  File,
  FileCheck,
  ArrowDown,
  ArrowRight,
  Pin,
  Search,
  CheckSquare,
  ClockDial,
  X,
  Check,
  Type,
  BarChartBig,
  AlertTriangle,
  RefreshCw,
  Bookmark,
  Users,
  Plus,
  Grid,
  Braces,
  AlignLeft,
  Database,
  Activity,
  Star,
  ServerStack,
  Wrench,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Cumplimiento normativo — Ubidata",
  description:
    "Ubidata incorpora validación, normalización y diagnóstico de direcciones en flujos sensibles, fortaleciendo controles, trazabilidad y calidad de datos.",
};

const c = makeCx(styles);

export default function Cumplimiento() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className={c("spotlight", "hero")}>
        <div className={c("wrap", "hero__grid")}>
          <div>
            <span className={c("hero__crumb")}>
              <Link href="/#casos">Casos de uso</Link> <span className={c("sep")}>/</span>{" "}
              Cumplimiento normativo
            </span>
            <h1 className={c("hero__h1")}>
              Convertí domicilios declarados en <span className={c("grad")}>datos trazables</span>
            </h1>
            <p className={c("hero__sub")}>
              Ubidata incorpora validación, normalización y diagnóstico de direcciones en flujos
              sensibles, ayudando a fortalecer controles, trazabilidad y calidad de datos sin
              rediseñar toda tu operación.
            </p>
            <div className={c("hero__ctas")}>
              <a className={c("btn", "btn-grad")} href="#cta">
                Solicitar demo <ArrowRight className={c("i")} />
              </a>
              <a className={c("btn", "btn-glass")} href="#productos">
                Ver productos relacionados
              </a>
            </div>
          </div>

          {/* Compliance control console */}
          <div>
            <div className={c("console")}>
              <div className={c("console__bar")}>
                <span className={c("ic")}>
                  <ShieldCheck className={c("i")} strokeWidth={1.8} />
                </span>
                <span className={c("t")}>Control de validación de domicilio</span>
                <span className={c("id")}>CASE-2291 · KYC</span>
              </div>
              <div className={c("console__body")}>
                <div className={c("cline")}>
                  <span className={c("cline__k")}>Domicilio informado</span>
                  <div className={c("cin")}>
                    <File className={c("i")} strokeWidth={1.8} /> Cordoba 1430 Cap Fed
                  </div>
                </div>
                <div className={c("carrow")}>
                  <ArrowDown className={c("i")} /> Motor de Address Intelligence
                </div>
                <div className={c("cline")}>
                  <span className={c("cline__k")}>Resultado Ubidata</span>
                  <div className={c("cout")}>
                    <Pin className={c("i")} strokeWidth={1.8} /> Av. Córdoba 1430, Ciudad Autónoma de
                    Buenos Aires
                  </div>
                </div>
                <div className={c("cgrid")}>
                  <div className={c("cstat")}>
                    <span className={c("cstat__k")}>Estado</span>
                    <span className={c("cstat__v")}>
                      <span className={c("d", "d--ok")} />
                      Validado
                    </span>
                  </div>
                  <div className={c("cstat")}>
                    <span className={c("cstat__k")}>Nivel de confianza</span>
                    <span className={c("cstat__v")}>
                      <span className={c("d", "d--hi")} />
                      Alto
                    </span>
                  </div>
                </div>
                <div className={c("crow")}>
                  <Search className={c("i")} strokeWidth={1.8} />
                  <span>
                    <span className={c("ck")}>Diagnóstico</span>
                    <span className={c("cv")}>Coincidencia encontrada · Campos normalizados</span>
                  </span>
                </div>
                <div className={c("crow", "crow--action")}>
                  <CheckSquare className={c("i")} />
                  <span>
                    <span className={c("ck")}>Acción sugerida</span>
                    <span className={c("cv")}>Continuar flujo</span>
                  </span>
                </div>
                <div className={c("caudit")}>
                  <span className={c("caudit__h")}>
                    <ClockDial className={c("i")} /> Audit trail
                  </span>
                  <div className={c("caudit__steps")}>
                    <span>
                      <span className={c("d")} />
                      Validado
                    </span>
                    <span>
                      <span className={c("d")} />
                      Normalizado
                    </span>
                    <span>
                      <span className={c("d")} />
                      Registrado
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CONTROL LAYER ===================== */}
      <section className={c("sec", "sec--subtle")}>
        <div className={c("wrap")}>
          <div className={c("sec-head")} data-reveal>
            <span className={c("eyebrow")}>La dirección como punto de control</span>
            <h2 className={c("sec-h2")}>
              El riesgo no está solo en una dirección incorrecta. Está en no poder explicar qué pasó
              con ese dato.
            </h2>
            <p className={c("sec-lead")}>
              En flujos sensibles, una dirección incompleta, ambigua o inconsistente puede avanzar por
              distintos sistemas sin que quede claro si fue validada, corregida, rechazada o enviada a
              revisión. Ubidata agrega una capa de diagnóstico para que cada domicilio tenga un estado
              y una decisión asociada.
            </p>
          </div>

          <div className={c("flow")}>
            {/* Antes */}
            <div className={c("fcard")} data-reveal>
              <span className={c("fcard__step")}>
                <span className={c("n")}>1</span>Antes · dato ambiguo
              </span>
              <h3>Un domicilio entra como texto libre</h3>
              <p>
                El usuario, cliente o sistema informa una dirección con abreviaciones, errores o datos
                incompletos. El flujo puede continuar, pero el dato todavía no tiene un estado
                confiable.
              </p>
              <div className={c("fdata")}>
                <span className={c("d")} />
                Cordoba 1430 Cap Fed
              </div>
              <ul className={c("flist")}>
                <li>
                  <X className={c("i")} strokeWidth={2.2} /> No estandarizado
                </li>
                <li>
                  <X className={c("i")} strokeWidth={2.2} /> Ambiguo
                </li>
                <li>
                  <X className={c("i")} strokeWidth={2.2} /> Sin diagnóstico
                </li>
                <li>
                  <X className={c("i")} strokeWidth={2.2} /> Sin nivel de confianza
                </li>
                <li>
                  <X className={c("i")} strokeWidth={2.2} /> Difícil de auditar
                </li>
              </ul>
            </div>

            {/* Capa Ubidata */}
            <div className={c("fcard", "fcard--ubi")} data-reveal>
              <span className={c("fcard__step")}>
                <span className={c("n")}>2</span>Capa Ubidata
              </span>
              <h3>Ubidata convierte el dato en una decisión operable</h3>
              <p>
                El motor de Address Intelligence interpreta, valida, normaliza y diagnostica el
                domicilio para devolver un resultado accionable dentro del flujo de control.
              </p>
              <div className={c("ubichips")}>
                <span className={c("ubichip")}>
                  <Check className={c("i")} strokeWidth={2.2} /> Validated
                </span>
                <span className={c("ubichip")}>
                  <Type className={c("i")} strokeWidth={1.8} /> Normalized
                </span>
                <span className={c("ubichip")}>
                  <BarChartBig className={c("i")} strokeWidth={1.8} /> Confidence score
                </span>
                <span className={c("ubichip")}>
                  <Search className={c("i")} strokeWidth={1.8} /> Diagnosis
                </span>
                <span className={c("ubichip")}>
                  <AlertTriangle className={c("i")} strokeWidth={1.8} /> Review required
                </span>
                <span className={c("ubichip")}>
                  <FileCheck className={c("i")} strokeWidth={1.8} /> Audit-ready
                </span>
              </div>
              <div className={c("ubimeter")}>
                <span className={c("ubimeter__bars")}>
                  <i style={{ height: 9 }} />
                  <i style={{ height: 15 }} />
                  <i style={{ height: 22 }} />
                  <i style={{ height: 18 }} />
                  <i style={{ height: 24 }} />
                </span>
                <span className={c("ubimeter__t")}>
                  Confianza calculada por campo · <b>0.987</b>
                </span>
              </div>
            </div>

            {/* Después */}
            <div className={c("fcard")} data-reveal>
              <span className={c("fcard__step")}>
                <span className={c("n")}>3</span>Después · decisión trazable
              </span>
              <h3>El sistema sabe qué hacer con ese domicilio</h3>
              <p>
                El resultado vuelve al flujo del cliente con un estado claro: continuar, corregir,
                revisar o escalar. Esto ayuda a reducir criterios manuales dispersos y mejorar la
                trazabilidad de los procesos sensibles.
              </p>
              <div className={c("fstates")}>
                <span className={c("fstate", "fstate--ok")}>
                  <span className={c("d")} />
                  Continuar flujo
                </span>
                <span className={c("fstate", "fstate--info")}>
                  <span className={c("d")} />
                  Guardar domicilio normalizado
                </span>
                <span className={c("fstate", "fstate--warn")}>
                  <span className={c("d")} />
                  Solicitar revisión
                </span>
                <span className={c("fstate", "fstate--bad")}>
                  <span className={c("d")} />
                  Rechazar o escalar
                </span>
                <span className={c("fstate", "fstate--log")}>
                  <span className={c("d")} />
                  Registrar diagnóstico
                </span>
              </div>
            </div>
          </div>

          <div className={c("flow__close")} data-reveal>
            <div className={c("flow__close-inner")}>
              <span className={c("ic")}>
                <ShieldCheck className={c("i")} />
              </span>
              <p>
                Ubidata no reemplaza tus reglas de cumplimiento.{" "}
                <span className={c("hl")}>
                  Les da datos más confiables, consistentes y trazables para operar.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== MATRIZ DE DECISIÓN ===================== */}
      <section className={c("sec")}>
        <div className={c("wrap")}>
          <div className={c("sec-head")} data-reveal>
            <span className={c("eyebrow")}>Matriz de decisión</span>
            <h2 className={c("sec-h2")}>Cada domicilio debería volver con una respuesta clara</h2>
            <p className={c("sec-lead")}>
              No todas las direcciones tienen el mismo nivel de resolución. Ubidata permite diferenciar
              entre domicilios validados, corregidos, ambiguos o no resolubles para que tus sistemas y
              equipos sepan cómo actuar.
            </p>
          </div>

          <div className={c("matrix")}>
            <div className={c("mcard", "mcard--ok")} data-reveal>
              <span className={c("mpill")}>
                <Check className={c("i")} strokeWidth={2.4} /> Validado
              </span>
              <h3>Coincidencia encontrada</h3>
              <p>La dirección fue encontrada, normalizada y puede avanzar en el flujo.</p>
              <div className={c("maction")}>
                <span className={c("maction__k")}>Acción sugerida</span>
                <span className={c("maction__v")}>
                  <ArrowRight className={c("i")} /> Continuar proceso
                </span>
              </div>
            </div>
            <div className={c("mcard", "mcard--info")} data-reveal>
              <span className={c("mpill")}>
                <RefreshCw className={c("i")} /> Corregido
              </span>
              <h3>Interpretado y normalizado</h3>
              <p>
                La dirección fue interpretada y normalizada a partir de variantes, abreviaciones o
                inconsistencias menores.
              </p>
              <div className={c("maction")}>
                <span className={c("maction__k")}>Acción sugerida</span>
                <span className={c("maction__v")}>
                  <Bookmark className={c("i")} /> Guardar versión normalizada
                </span>
              </div>
            </div>
            <div className={c("mcard", "mcard--warn")} data-reveal>
              <span className={c("mpill")}>
                <AlertTriangle className={c("i")} /> Requiere revisión
              </span>
              <h3>Ambigüedad detectada</h3>
              <p>
                La dirección presenta ambigüedades o datos insuficientes para resolverla con confianza
                alta.
              </p>
              <div className={c("maction")}>
                <span className={c("maction__k")}>Acción sugerida</span>
                <span className={c("maction__v")}>
                  <Users className={c("i")} /> Derivar a revisión interna
                </span>
              </div>
            </div>
            <div className={c("mcard", "mcard--bad")} data-reveal>
              <span className={c("mpill")}>
                <X className={c("i")} strokeWidth={2.2} /> No resoluble
              </span>
              <h3>Sin información suficiente</h3>
              <p>La dirección no pudo validarse con la información disponible.</p>
              <div className={c("maction")}>
                <span className={c("maction__k")}>Acción sugerida</span>
                <span className={c("maction__v")}>
                  <Plus className={c("i")} /> Bloquear, corregir o escalar
                </span>
              </div>
            </div>
          </div>

          <div className={c("mtable")} data-reveal>
            <div className={c("mtable__head")}>
              <span className={c("ic")}>
                <Grid className={c("i")} strokeWidth={1.8} />
              </span>
              <span className={c("t")}>Cola de validaciones · vista de control</span>
              <span className={c("tag")}>4 registros</span>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Domicilio ingresado</th>
                  <th>Estado</th>
                  <th>Confianza</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={c("mono")}>Av. Córdoba 1430</td>
                  <td>
                    <span className={c("spill", "spill--ok")}>
                      <span className={c("d")} />
                      Validado
                    </span>
                  </td>
                  <td className={c("conf-cell")}>Alta · 0.987</td>
                  <td>Continuar</td>
                </tr>
                <tr>
                  <td className={c("mono")}>Cordoba 1430 Cap Fed</td>
                  <td>
                    <span className={c("spill", "spill--info")}>
                      <span className={c("d")} />
                      Corregido
                    </span>
                  </td>
                  <td className={c("conf-cell")}>Alta · 0.941</td>
                  <td>Guardar normalizado</td>
                </tr>
                <tr>
                  <td className={c("mono")}>Calle 14 s/n</td>
                  <td>
                    <span className={c("spill", "spill--warn")}>
                      <span className={c("d")} />
                      Requiere revisión
                    </span>
                  </td>
                  <td className={c("conf-cell")}>Media · 0.612</td>
                  <td>Revisar</td>
                </tr>
                <tr>
                  <td className={c("mono")}>Zona norte lote 8</td>
                  <td>
                    <span className={c("spill", "spill--bad")}>
                      <span className={c("d")} />
                      No resoluble
                    </span>
                  </td>
                  <td className={c("conf-cell")}>Baja · 0.218</td>
                  <td>Escalar</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===================== SIMULADOR (initial static state) ===================== */}
      <section className={c("sec", "sec--subtle")} id="simulador">
        <div className={c("wrap")}>
          <div className={c("sec-head")} data-reveal>
            <span className={c("eyebrow")}>Simulador</span>
            <h2 className={c("sec-h2")}>Cómo se vería Ubidata dentro de tu flujo de control</h2>
            <p className={c("sec-lead")}>
              Ingresá una dirección y visualizá cómo Ubidata podría devolver una versión normalizada,
              un estado de validación, un diagnóstico y una acción sugerida para tus sistemas internos.
            </p>
          </div>

          <ComplianceSimulator />
        </div>
      </section>

      {/* ===================== BENEFICIOS ===================== */}
      <section className={c("sec", "benf")}>
        <div className={c("wrap")}>
          <div className={c("sec-head")} data-reveal>
            <span className={c("eyebrow", "eyebrow--on-dark")}>Beneficios</span>
            <h2 className={c("sec-h2", "sec-h2--on-dark")}>
              Más control sobre el dato. Menos ambigüedad en el proceso.
            </h2>
            <p className={c("sec-lead", "sec-lead--on-dark")}>
              Ubidata ayuda a que cada domicilio tenga un estado claro, una versión normalizada y un
              diagnóstico disponible para tus sistemas o equipos internos.
            </p>
          </div>
          <div className={c("benf__grid")} data-reveal>
            <div className={c("gcard")} data-reveal>
              <div className={c("gcard__ic")}>
                <ClockDial className={c("i")} strokeWidth={1.8} />
              </div>
              <h3>Mayor trazabilidad</h3>
              <p>
                Registrá qué dirección fue ingresada, cómo fue interpretada y qué resultado devolvió la
                validación.
              </p>
            </div>
            <div className={c("gcard")} data-reveal>
              <div className={c("gcard__ic")}>
                <AlignLeft className={c("i")} strokeWidth={1.8} />
              </div>
              <h3>Criterios más consistentes</h3>
              <p>Reducí decisiones manuales dispersas con estados y diagnósticos estandarizados.</p>
            </div>
            <div className={c("gcard")} data-reveal>
              <div className={c("gcard__ic")}>
                <Database className={c("i")} strokeWidth={1.8} />
              </div>
              <h3>Mejor calidad de datos</h3>
              <p>Normalizá domicilios antes de que ingresen o se repliquen en sistemas internos.</p>
            </div>
            <div className={c("gcard", "gcard--half")} data-reveal>
              <div className={c("gcard__ic")}>
                <Activity className={c("i")} strokeWidth={1.8} />
              </div>
              <h3>Menos revisión innecesaria</h3>
              <p>
                Diferenciá casos validados, corregidos, ambiguos o no resolubles para enfocar la
                revisión donde realmente hace falta.
              </p>
            </div>
            <div className={c("gcard", "gcard--half")} data-reveal>
              <div className={c("gcard__ic")}>
                <Braces className={c("i")} strokeWidth={1.8} />
              </div>
              <h3>Integración con procesos sensibles</h3>
              <p>
                Incorporá validación de domicilios vía API, plataforma o soluciones a medida sin
                rediseñar todo el flujo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PRODUCTOS ===================== */}
      <section className={c("sec")} id="productos">
        <div className={c("wrap")}>
          <div className={c("sec-head")} data-reveal>
            <span className={c("eyebrow")}>Productos recomendados</span>
            <h2 className={c("sec-h2")}>Productos para fortalecer tus procesos de control</h2>
            <p className={c("sec-lead")}>
              Aplicá Address Intelligence en los puntos donde el domicilio necesita validarse,
              diagnosticarse y quedar disponible para decisiones internas.
            </p>
          </div>
          <div className={c("prodlead")}>
            <Link className={c("pfeat")} href="/#producto-api" data-reveal>
              <span className={c("pfeat__tag")}>
                <Star className={c("i")} strokeWidth={2.2} /> Producto recomendado para flujos
                sensibles
              </span>
              <div className={c("pfeat__ic")}>
                <Braces className={c("i")} strokeWidth={1.8} />
              </div>
              <h3>API REST de validación</h3>
              <p>
                Integrá validación, normalización y diagnóstico de domicilios en tiempo real dentro de
                flujos de alta, KYC, control interno, prevención de fraude o sistemas propios.
              </p>
              <pre className={c("pjson")}>
                {"{\n  "}
                <span className={c("k")}>&quot;status&quot;</span>
                {": "}
                <span className={c("s")}>&quot;corrected&quot;</span>
                {",\n  "}
                <span className={c("k")}>&quot;confidence&quot;</span>
                {": "}
                <span className={c("s")}>&quot;high&quot;</span>
                {",\n  "}
                <span className={c("k")}>&quot;normalized_address&quot;</span>
                {": "}
                <span className={c("s")}>&quot;Av. Córdoba 1430&quot;</span>
                {",\n  "}
                <span className={c("k")}>&quot;diagnosis&quot;</span>
                {": "}
                <span className={c("s")}>&quot;matched_and_normalized&quot;</span>
                {",\n  "}
                <span className={c("k")}>&quot;recommended_action&quot;</span>
                {": "}
                <span className={c("s")}>&quot;continue&quot;</span>
                {"\n}"}
              </pre>
              <span className={c("more")}>
                Ver producto <ArrowRight className={c("i")} />
              </span>
            </Link>

            <div className={c("psecs")}>
              <Link className={c("psec")} href="/#producto-api" data-reveal>
                <span className={c("psec__ic")}>
                  <ServerStack className={c("i")} strokeWidth={1.8} />
                </span>
                <div className={c("psec__b")}>
                  <h4>API SOAP</h4>
                  <p>
                    Integra validación de domicilios en arquitecturas existentes o sistemas legacy
                    donde se requiere compatibilidad con servicios tradicionales.
                  </p>
                  <span className={c("psec__tag")}>Ideal para entornos legacy</span>
                </div>
              </Link>
              <Link className={c("psec")} href="/#producto-plataforma" data-reveal>
                <span className={c("psec__ic")}>
                  <Grid className={c("i")} strokeWidth={1.8} />
                </span>
                <div className={c("psec__b")}>
                  <h4>Plataforma Ubidata</h4>
                  <p>
                    Consultá resultados, visualizá diagnósticos y centralizá la operación de
                    validaciones desde una interfaz de control.
                  </p>
                  <span className={c("psec__tag")}>Ideal para visibilidad operativa</span>
                </div>
              </Link>
              <Link className={c("psec")} href="/#producto-batch" data-reveal>
                <span className={c("psec__ic")}>
                  <Wrench className={c("i")} strokeWidth={1.8} />
                </span>
                <div className={c("psec__b")}>
                  <h4>Soluciones a medida</h4>
                  <p>
                    Adaptamos reglas, diagnósticos e integraciones a procesos sensibles, flujos
                    internos o requerimientos específicos del cliente.
                  </p>
                  <span className={c("psec__tag")}>Ideal para reglas particulares</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CTA FINAL ===================== */}
      <section className={c("cta")} id="cta">
        <div className={c("cta__inner")}>
          <div>
            <span className={c("eyebrow", "eyebrow--on-dark")}>Empezá hoy</span>
            <h2 className={c("cta__h2")}>Sumá trazabilidad al dato antes de tomar decisiones</h2>
            <p className={c("cta__p")}>
              Conocé cómo Ubidata puede integrarse a tus flujos sensibles para validar, normalizar y
              diagnosticar domicilios con criterios consistentes y resultados accionables.
            </p>
            <div className={c("cta__btns")}>
              <a className={c("btn", "btn-grad")} href="/#footer">
                Solicitar demo <ArrowRight className={c("i")} />
              </a>
              <a className={c("btn", "btn-outline-white")} href="/#novedades">
                Ver documentación
              </a>
            </div>
          </div>
          <div className={c("cta__chip")} data-reveal>
            <div className={c("ph2")}>
              <span className={c("ic")}>
                <ShieldCheck className={c("i")} strokeWidth={1.8} />
              </span>
              <span className={c("t")}>Domicilio listo para control</span>
            </div>
            <p className={c("addr")}>Av. Córdoba 1430, Ciudad Autónoma de Buenos Aires</p>
            <div className={c("states")}>
              <span>
                <span className={c("d")} />
                Validado
              </span>
              <span>
                <span className={c("d")} />
                Normalizado
              </span>
              <span>
                <span className={c("d")} />
                Diagnóstico disponible
              </span>
              <span>
                <span className={c("d")} />
                Audit-ready
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
