import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import { makeCx } from "@/lib/cx";
import {
  ArrowRight,
  X,
  Check,
  CheckCircle,
  Settings,
  Info,
  LinkOff,
  RefreshCw,
  Truck,
  Timer,
  Search,
  Braces,
  Database,
  Wrench,
  MoveLeft,
  Bolt,
  Menu,
  LayoutGrid,
  Pin,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Última milla — Ubidata",
  description:
    "Validá, normalizá y diagnosticá direcciones antes de que lleguen a tu operación logística. Ubidata mejora la precisión de entrega y reduce reprocesos.",
};

const c = makeCx(styles);

export default function UltimaMilla() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className={c("spotlight", "hero")}>
        <div className={c("wrap", "hero__grid")}>
          <div>
            <span className={c("hero__crumb")}>
              <Link href="/#casos">Casos de uso</Link> <span className={c("sep")}>/</span> Última milla
            </span>
            <h1 className={c("hero__h1")}>
              La última milla empieza con una <span className={c("grad")}>dirección confiable</span>
            </h1>
            <p className={c("hero__sub")}>
              Validá, normalizá y diagnosticá direcciones antes de que lleguen a tu operación
              logística. Ubidata mejora la precisión de entrega, reduce reprocesos y opera con datos
              confiables desde el primer input.
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

          {/* Stylized map */}
          <div>
            <div className={c("um-map")}>
              <svg
                className={c("um-map__svg")}
                viewBox="0 0 500 420"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
                aria-hidden="true"
              >
                <rect width="500" height="420" fill="#132344" />
                <g fill="#091730">
                  <rect x="0" y="0" width="93" height="93" />
                  <rect x="107" y="0" width="117" height="93" />
                  <rect x="242" y="0" width="121" height="93" />
                  <rect x="377" y="0" width="123" height="93" />
                  <rect x="0" y="107" width="93" height="99" />
                  <rect x="107" y="107" width="117" height="99" />
                  <rect x="242" y="107" width="121" height="99" />
                  <rect x="377" y="107" width="123" height="99" />
                  <rect x="0" y="224" width="93" height="99" />
                  <rect x="107" y="224" width="117" height="99" />
                  <rect x="242" y="224" width="121" height="99" />
                  <rect x="377" y="224" width="123" height="99" />
                  <rect x="0" y="337" width="93" height="83" />
                  <rect x="107" y="337" width="117" height="83" />
                  <rect x="242" y="337" width="121" height="83" />
                  <rect x="377" y="337" width="123" height="83" />
                </g>
                <rect x="0" y="206" width="500" height="18" fill="rgba(255,255,255,0.04)" />
                <rect x="224" y="0" width="18" height="420" fill="rgba(255,255,255,0.04)" />
                <g
                  fontFamily="'IBM Plex Mono','Courier New',monospace"
                  fontSize="6.5"
                  fill="rgba(255,255,255,0.26)"
                  letterSpacing="0.04em"
                >
                  <text x="5" y="103">TUCUMÁN</text>
                  <text x="5" y="218" fontWeight="600">AV. CÓRDOBA</text>
                  <text x="5" y="332">AV. CORRIENTES</text>
                  <text transform="translate(233,165) rotate(-90)" textAnchor="middle">AV. CALLAO</text>
                </g>
                <path
                  className={c("um-map__route-glow", "draw")}
                  d="M0,215 L100,215 L100,100 L233,100 L370,100 L370,215 L370,330 L233,330"
                />
                <path
                  className={c("um-map__route", "draw")}
                  d="M0,215 L100,215 L100,100 L233,100 L370,100 L370,215 L370,330 L233,330"
                />
                <g fill="rgba(255,255,255,0.18)">
                  <circle cx="100" cy="330" r="5" />
                  <circle cx="165" cy="100" r="4" />
                  <circle cx="300" cy="100" r="4" />
                </g>
                <circle cx="233" cy="100" r="11" fill="#00919F" />
                <text x="233" y="100" fontFamily="'IBM Plex Mono',monospace" fontSize="10" fontWeight="600" fill="#fff" textAnchor="middle" dominantBaseline="central">1</text>
                <circle cx="370" cy="215" r="11" fill="#00919F" />
                <text x="370" y="215" fontFamily="'IBM Plex Mono',monospace" fontSize="10" fontWeight="600" fill="#fff" textAnchor="middle" dominantBaseline="central">2</text>
                <circle cx="370" cy="330" r="11" fill="#00919F" />
                <text x="370" y="330" fontFamily="'IBM Plex Mono',monospace" fontSize="10" fontWeight="600" fill="#fff" textAnchor="middle" dominantBaseline="central">3</text>
                <circle className={c("um-pin__halo")} cx="233" cy="330" r="18" />
                <circle cx="233" cy="330" r="15" fill="#5FBF8A" />
                <circle cx="233" cy="330" r="5.5" fill="#fff" />
              </svg>
              <span className={c("um-map__legend")}>
                <span className={c("dot")} /> Ruta de entrega · 3 paradas
              </span>
              <div className={c("um-panel")}>
                <div className={c("um-panel__row")}>
                  <div className={c("um-panel__k")}>Dirección ingresada</div>
                  <div className={c("um-panel__v", "in")}>Av. Cordoba 1430, CABA</div>
                </div>
                <div className={c("um-panel__row")}>
                  <div className={c("um-panel__k")}>Dirección normalizada</div>
                  <div className={c("um-panel__v")}>
                    Av. Córdoba 1430, Ciudad Autónoma de Buenos Aires
                  </div>
                </div>
                <div className={c("um-panel__row")}>
                  <div className={c("um-panel__k")}>Estado</div>
                  <div className={c("um-panel__diag")}>
                    <CheckCircle className={c("i")} /> Validada · Coincidencia alta · Apta para
                    operación logística
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== NARRATIVE ===================== */}
      <section className={c("sec", "story")}>
        <div className={c("wrap")}>
          <div className={c("sec-head")}>
            <span className={c("eyebrow")}>Problema → Intervención → Resultado</span>
            <h2 className={c("sec-h2")}>Cuando una dirección falla, la entrega ya empezó mal</h2>
            <p className={c("sec-lead")}>
              Una dirección incompleta o mal cargada no es solo un error de formulario. Es un dato que
              viaja por todo el flujo logístico y puede convertirse en reprocesos, entregas fallidas,
              soporte y costos evitables.
            </p>
          </div>

          <div className={c("story__flow")}>
            {/* Block 1 */}
            <div className={c("sblock")}>
              <span className={c("sblock__step")}>
                <span className={c("n")}>1</span> Problema
              </span>
              <h3>Direcciones incompletas entran a la operación</h3>
              <p>
                El cliente carga una dirección con errores, abreviaciones o datos faltantes. El
                sistema la acepta, pero el problema aparece más adelante.
              </p>
              <div className={c("addr-card", "addr-card--raw")}>
                <div className={c("addr-card__txt")}>Cordoba 1430 Cap Fed</div>
                <span className={c("addr-card__state", "bad")}>
                  <span className={c("d")} />
                  Incompleta / Ambigua
                </span>
              </div>
              <ul className={c("smini")}>
                <li className={c("bad")}>
                  <X className={c("i")} /> Calle mal escrita
                </li>
                <li className={c("bad")}>
                  <X className={c("i")} /> Altura faltante
                </li>
                <li className={c("bad")}>
                  <X className={c("i")} /> Localidad ambigua
                </li>
                <li className={c("bad")}>
                  <X className={c("i")} /> Provincia inconsistente
                </li>
                <li className={c("bad")}>
                  <X className={c("i")} /> Dirección no estandarizada
                </li>
              </ul>
            </div>

            <div className={c("story__arr")}>
              <ArrowRight className={c("i")} />
            </div>

            {/* Block 2 */}
            <div className={c("sblock", "sblock--engine")}>
              <span className={c("sblock__step")}>
                <span className={c("n")}>2</span> Intervención Ubidata
              </span>
              <h3>Ubidata valida antes de que el error avance</h3>
              <p>
                El motor de Address Intelligence interpreta la dirección, compara variantes, normaliza
                campos y devuelve un diagnóstico accionable antes de que el dato llegue al flujo
                logístico.
              </p>
              <div className={c("engine-core")}>
                <span className={c("ic")}>
                  <Settings className={c("i")} />
                </span>
                <span className={c("lbl")}>
                  Address Intelligence Engine
                  <span>Captura → interpreta → normaliza → diagnostica</span>
                </span>
              </div>
              <div className={c("etags")}>
                <span className={c("etag")}>Machine learning</span>
                <span className={c("etag")}>Lógica difusa</span>
                <span className={c("etag")}>Datos maestros</span>
                <span className={c("etag")}>Reglas determinísticas</span>
                <span className={c("etag")}>Diagnóstico</span>
              </div>
            </div>

            <div className={c("story__arr")}>
              <ArrowRight className={c("i")} />
            </div>

            {/* Block 3 */}
            <div className={c("sblock")}>
              <span className={c("sblock__step")}>
                <span className={c("n")}>3</span> Resultado
              </span>
              <h3>La operación recibe un dato confiable</h3>
              <p>
                El sistema logístico trabaja con una dirección estructurada, validada y diagnosticada,
                reduciendo errores aguas abajo y mejorando la planificación de entrega.
              </p>
              <div className={c("addr-card", "addr-card--clean")}>
                <div className={c("addr-card__txt")}>
                  Av. Córdoba 1430, Ciudad Autónoma de Buenos Aires
                </div>
                <span className={c("addr-card__state", "good")}>
                  <span className={c("d")} />
                  Validada · Alta confianza · Lista para operar
                </span>
              </div>
              <ul className={c("smini", "smini--good")}>
                <li className={c("good")}>
                  <Check className={c("i")} /> Dirección normalizada
                </li>
                <li className={c("good")}>
                  <Check className={c("i")} /> Estado validado
                </li>
                <li className={c("good")}>
                  <Check className={c("i")} /> Nivel de confianza
                </li>
                <li className={c("good")}>
                  <Check className={c("i")} /> Datos listos para ruteo
                </li>
                <li className={c("good")}>
                  <Check className={c("i")} /> Menor revisión manual
                </li>
              </ul>
            </div>
          </div>

          <div className={c("story__close")}>
            <p>
              Ubidata no corrige el problema al final del proceso.{" "}
              <span className={c("hl")}>Lo previene desde el origen del dato.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ===================== BENEFITS + ROI ===================== */}
      <section className={c("sec", "roi")}>
        <div className={c("wrap")}>
          <div className={c("sec-head")}>
            <span className={c("eyebrow", "eyebrow--on-dark")}>Impacto en el negocio</span>
            <h2 className={c("sec-h2", "sec-h2--on-dark")}>
              Calculá el costo oculto de las direcciones mal cargadas
            </h2>
            <p className={c("sec-lead", "sec-lead--on-dark")}>
              Estimá cuánto puede estar perdiendo tu operación por direcciones incorrectas, incompletas
              o inconsistentes — y cuánto podrías ahorrar al validar direcciones antes del despacho.
            </p>
          </div>

          {/* glass benefit cards */}
          <div className={c("roi__benefits")}>
            <div className={c("gcard")}>
              <div className={c("gcard__ic")}>
                <LinkOff className={c("i")} strokeWidth={1.8} />
              </div>
              <h3>Menos entregas fallidas</h3>
              <p>Detectá direcciones problemáticas antes de que lleguen al despacho.</p>
            </div>
            <div className={c("gcard")}>
              <div className={c("gcard__ic")}>
                <RefreshCw className={c("i")} strokeWidth={1.8} />
              </div>
              <h3>Menos reprocesos</h3>
              <p>Reducí tareas manuales, reprogramaciones y validaciones posteriores.</p>
            </div>
            <div className={c("gcard")}>
              <div className={c("gcard__ic")}>
                <Truck className={c("i")} strokeWidth={1.8} />
              </div>
              <h3>Mejor planificación logística</h3>
              <p>Trabajá con direcciones más consistentes para ruteo y operación.</p>
            </div>
            <div className={c("gcard")}>
              <div className={c("gcard__ic")}>
                <Timer className={c("i")} strokeWidth={1.8} />
              </div>
              <h3>Mejor experiencia del cliente</h3>
              <p>Evitá fricción, demoras y contactos innecesarios por errores de dirección.</p>
            </div>
          </div>

          {/* calculator (static defaults; interactivity comes later) */}
          <div className={c("calc")}>
            <div className={c("calc__inputs")}>
              <h3>Tu operación</h3>
              <p className={c("hint")}>Ajustá los valores según tu volumen y costos reales.</p>
              <div className={c("field")}>
                <label htmlFor="ms">Envíos mensuales</label>
                <div className={c("field__wrap")}>
                  <input id="ms" type="text" inputMode="numeric" defaultValue="10.000" autoComplete="off" />
                </div>
              </div>
              <div className={c("field")}>
                <label htmlFor="ec">Costo promedio por envío fallido o reprocesado</label>
                <div className={c("field__wrap")}>
                  <span className={c("field__pre")}>$</span>
                  <input id="ec" className={c("has-pre")} type="text" inputMode="numeric" defaultValue="3.500" autoComplete="off" />
                </div>
              </div>
              <div className={c("field")}>
                <label htmlFor="br">Porcentaje estimado de direcciones mal cargadas</label>
                <div className={c("field__wrap")}>
                  <input id="br" type="text" inputMode="decimal" defaultValue="4" autoComplete="off" />
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
              <div className={c("calc__big")}>$10.920.000</div>
              <span className={c("calc__sub")}>con validación de direcciones antes del despacho</span>
              <div className={c("calc__grid")}>
                <div className={c("calc__cell")}>
                  <div className={c("ck")}>Envíos afectados / mes</div>
                  <div className={c("cv")}>400</div>
                </div>
                <div className={c("calc__cell")}>
                  <div className={c("ck")}>Costo mensual estimado</div>
                  <div className={c("cv")}>$1.400.000</div>
                </div>
                <div className={c("calc__cell")}>
                  <div className={c("ck")}>Errores prevenibles / mes</div>
                  <div className={c("cv", "accent")}>260</div>
                </div>
                <div className={c("calc__cell")}>
                  <div className={c("ck")}>Ahorro mensual estimado</div>
                  <div className={c("cv", "accent")}>$910.000</div>
                </div>
              </div>
            </div>
          </div>
          <p className={c("calc__note")}>
            Esta calculadora ofrece una estimación orientativa. No representa una garantía de ahorro.
            Los resultados reales dependen de la operación, la calidad de los datos y la implementación.
          </p>
        </div>
      </section>

      {/* ===================== PRODUCTOS ===================== */}
      <section className={c("sec")} id="productos">
        <div className={c("wrap")}>
          <div className={c("sec-head")}>
            <span className={c("eyebrow")}>Productos recomendados</span>
            <h2 className={c("sec-h2")}>Productos para mejorar tu operación de última milla</h2>
            <p className={c("sec-lead")}>
              Aplicá Address Intelligence en el punto exacto donde tu operación lo necesita: en el
              checkout, en tus sistemas logísticos, en bases históricas o en flujos personalizados.
            </p>
          </div>
          <div className={c("prods")}>
            <Link className={c("prod")} href="/#producto-lookup">
              <div className={c("prod__ic")}>
                <Search className={c("i")} strokeWidth={1.8} />
              </div>
              <h3>Buscador de direcciones</h3>
              <p>
                Asistí al usuario mientras carga su dirección en checkout, formularios o procesos de
                alta. Reducí errores desde el primer input y enviá datos más confiables a la operación.
              </p>
              <span className={c("prod__tag")}>
                <MoveLeft className={c("i")} /> Ideal para captura en origen
              </span>
              <span className={c("more")}>
                Ver producto <ArrowRight className={c("i")} />
              </span>
            </Link>
            <Link className={c("prod")} href="/#producto-api">
              <div className={c("prod__ic")}>
                <Braces className={c("i")} strokeWidth={1.8} />
              </div>
              <h3>API REST de validación</h3>
              <p>
                Validá, normalizá y diagnosticá direcciones en tiempo real desde tus sistemas de
                ecommerce, logística, ERP o CRM.
              </p>
              <span className={c("prod__tag")}>
                <Bolt className={c("i")} /> Ideal para integración en tiempo real
              </span>
              <span className={c("more")}>
                Ver producto <ArrowRight className={c("i")} />
              </span>
            </Link>
            <Link className={c("prod")} href="/#producto-batch">
              <div className={c("prod__ic")}>
                <Database className={c("i")} strokeWidth={1.8} />
              </div>
              <h3>Procesamiento batch</h3>
              <p>
                Normalizá bases históricas de clientes, entregas o puntos de destino para mejorar la
                calidad de datos antes de operar grandes volúmenes.
              </p>
              <span className={c("prod__tag")}>
                <Menu className={c("i")} /> Ideal para limpieza masiva
              </span>
              <span className={c("more")}>
                Ver producto <ArrowRight className={c("i")} />
              </span>
            </Link>
            <Link className={c("prod")} href="/#producto-batch">
              <div className={c("prod__ic")}>
                <Wrench className={c("i")} strokeWidth={1.8} />
              </div>
              <h3>Soluciones a medida</h3>
              <p>
                Integramos Address Intelligence dentro de flujos logísticos específicos, reglas
                internas o sistemas propios de operación.
              </p>
              <span className={c("prod__tag")}>
                <LayoutGrid className={c("i")} /> Ideal para operaciones complejas
              </span>
              <span className={c("more")}>
                Ver producto <ArrowRight className={c("i")} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== CTA FINAL ===================== */}
      <section className={c("cta")} id="cta">
        <div className={c("cta__inner")}>
          <div>
            <span className={c("eyebrow", "eyebrow--on-dark")}>Empezá hoy</span>
            <h2 className={c("cta__h2")}>Detectá el error antes de que llegue a la entrega</h2>
            <p className={c("cta__p")}>
              Conocé cómo Ubidata puede integrarse a tus formularios, sistemas y procesos logísticos
              para validar direcciones desde el origen y operar con datos más confiables.
            </p>
            <div className={c("cta__btns")}>
              <a className={c("btn", "btn-grad")} href="/#footer">
                Solicitar demo <ArrowRight className={c("i")} />
              </a>
              <a className={c("btn", "btn-outline-white")} href="/#producto-plataforma">
                Probar plataforma
              </a>
            </div>
          </div>
          <div className={c("cta__chip")}>
            <div className={c("ph")}>
              <span className={c("ic")}>
                <Pin className={c("i")} strokeWidth={1.8} />
              </span>
              <span className={c("t")}>Dirección lista para operar</span>
            </div>
            <p className={c("addr")}>Av. Córdoba 1430, Ciudad Autónoma de Buenos Aires</p>
            <div className={c("states")}>
              <span>
                <span className={c("d")} />
                Validada
              </span>
              <span>
                <span className={c("d")} />
                Normalizada
              </span>
              <span>
                <span className={c("d")} />
                Alta confianza
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
