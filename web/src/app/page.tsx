import Link from "next/link";
import styles from "./home.module.css";
import { makeCx } from "@/lib/cx";
import AddressLookupDemo from "./AddressLookupDemo";
import ApiCodeCard from "./ApiCodeCard";
import {
  ArrowRight,
  ArrowUp,
  Shield,
  Zap,
  Server,
  MapPin,
  Check,
  CheckCircle,
  AlertTriangle,
  FileText,
  AlertCircle,
  Truck,
  ShieldX,
  ShieldCheck,
  UserPlus,
  Funnel,
  Database,
  Wrench,
  Settings,
  Search,
  Braces,
  Grid,
  LayoutDashboard,
  BarChart,
} from "@/components/icons";

const c = makeCx(styles);

export default function Home() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className={c("spotlight", "hero")} id="inicio">
        <div className={c("wrap", "hero__grid")}>
          <div>
            <span className={c("hero__pill")}>
              <span className={c("dot")} /> Address Intelligence Platform
            </span>
            <h1 className={c("hero__h1")}>
              Convertí direcciones inciertas en <span className={c("grad")}>datos confiables</span>
            </h1>
            <p className={c("hero__sub")}>
              Capturá, validá, normalizá y diagnosticá direcciones en tiempo real o por lotes con la
              infraestructura de Address Intelligence de Ubidata.
            </p>
            <div className={c("hero__ctas")}>
              <a className={c("btn", "btn-grad")} href="#demo-cta">
                Probar demo <ArrowRight className={c("i")} />
              </a>
              <a className={c("btn", "btn-glass")} href="#ecosistema">
                Ver productos
              </a>
            </div>
            <div className={c("hero__trust")}>
              <span>
                <Shield className={c("i")} /> Real-time y batch
              </span>
              <span>
                <Zap className={c("i")} /> Integración plug &amp; play
              </span>
              <span>
                <Server className={c("i")} /> Datos maestros propios
              </span>
            </div>
          </div>

          {/* Live Address Lookup demo */}
          <div>
            <AddressLookupDemo />
          </div>
        </div>
      </section>

      {/* ===================== PROBLEM ===================== */}
      <section className={c("sec", "problem")}>
        <div className={c("wrap")}>
          <div className={c("sec-head")} data-reveal>
            <span className={c("eyebrow")}>El problema</span>
            <h2 className={c("sec-h2")}>Una mala dirección impacta mucho más que un formulario</h2>
            <p className={c("sec-lead")}>
              Un error en el dato de origen no se queda quieto: se propaga aguas abajo y se convierte
              en costos, riesgos y reprocesos en toda la operación.
            </p>
          </div>
          <div className={c("problem__root")}>
            <span className={c("seed")}>
              <AlertTriangle className={c("i")} /> Dirección mal cargada
            </span>
            <span className={c("arr")}>
              <ArrowRight style={{ width: 18, height: 18 }} />
            </span>
            <span>desencadena cinco problemas en cascada</span>
          </div>
          <div className={c("chain")} style={{ margin: "30px 0px 0px" }}>
            <div className={c("chain__card")} style={{ margin: "0px" }} data-reveal>
              <span className={c("chain__num")}>01</span>
              <div className={c("chain__ic")}>
                <FileText className={c("i")} strokeWidth={1.8} />
              </div>
              <h3>Fricción en onboarding</h3>
              <p>Formularios difíciles, registros incompletos y mayor abandono.</p>
              <span className={c("chain__arrow")}>
                <ArrowRight className={c("i")} />
              </span>
            </div>
            <div className={c("chain__card")} data-reveal>
              <span className={c("chain__num")}>02</span>
              <div className={c("chain__ic")}>
                <AlertCircle className={c("i")} strokeWidth={1.8} />
              </div>
              <h3>Errores operativos</h3>
              <p>Direcciones ambiguas o inconsistentes que requieren revisión manual.</p>
              <span className={c("chain__arrow")}>
                <ArrowRight className={c("i")} />
              </span>
            </div>
            <div className={c("chain__card")} data-reveal>
              <span className={c("chain__num")}>03</span>
              <div className={c("chain__ic")}>
                <Truck className={c("i")} strokeWidth={1.8} />
              </div>
              <h3>Costos logísticos</h3>
              <p>Entregas fallidas, rutas menos precisas y reprocesos evitables.</p>
              <span className={c("chain__arrow")}>
                <ArrowRight className={c("i")} />
              </span>
            </div>
            <div className={c("chain__card")} data-reveal>
              <span className={c("chain__num")}>04</span>
              <div className={c("chain__ic")}>
                <ShieldX className={c("i")} strokeWidth={1.8} />
              </div>
              <h3>Riesgo regulatorio y de fraude</h3>
              <p>Domicilios mal validados en procesos sensibles.</p>
              <span className={c("chain__arrow")}>
                <ArrowRight className={c("i")} />
              </span>
            </div>
            <div className={c("chain__card")} data-reveal>
              <span className={c("chain__num")}>05</span>
              <div className={c("chain__ic")}>
                <Database className={c("i")} strokeWidth={1.8} />
              </div>
              <h3>Bases de datos degradadas</h3>
              <p>Información inconsistente que afecta reporting, CRM y automatizaciones.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== QUÉ HACE — pipeline ===================== */}
      <section className={c("sec", "eco")}>
        <div className={c("wrap")}>
          <div className={c("sec-head")} style={{ width: 704 }} data-reveal>
            <span className={c("eyebrow", "eyebrow--green")}>Qué hace Ubidata</span>
            <h2 className={c("sec-h2")}>Una capa de Address Intelligence para todo el ciclo del dato</h2>
            <p className={c("sec-lead")}>
              Ubidata ayuda a capturar mejor las direcciones, validarlas con inteligencia,
              normalizarlas para su uso operativo y devolver resultados accionables a tus sistemas.
            </p>
          </div>
          <div className={c("pipe")}>
            <div className={c("pipe__step")} data-reveal>
              <span className={c("pipe__n")}>1</span>
              <div className={c("pipe__bar")}>
                <span style={{ height: "40%" }} />
                <span style={{ height: "65%" }} />
                <span style={{ height: "90%" }} />
              </div>
              <h3>Captura</h3>
              <p>Mejora la carga de direcciones desde el primer input.</p>
              <ArrowRight className={c("pipe__connect")} style={{ display: "none" }} />
            </div>
            <div className={c("pipe__step")} data-reveal>
              <span className={c("pipe__n")}>2</span>
              <div className={c("pipe__bar")}>
                <span style={{ height: "60%" }} />
                <span style={{ height: "95%" }} />
                <span style={{ height: "50%" }} />
              </div>
              <h3>Validación</h3>
              <p>Verifica e interpreta direcciones en tiempo real.</p>
              <ArrowRight className={c("pipe__connect")} style={{ display: "none" }} />
            </div>
            <div className={c("pipe__step")} data-reveal>
              <span className={c("pipe__n")}>3</span>
              <div className={c("pipe__bar")}>
                <span style={{ height: "85%" }} />
                <span style={{ height: "55%" }} />
                <span style={{ height: "75%" }} />
              </div>
              <h3>Normalización</h3>
              <p>Devuelve datos estructurados y consistentes.</p>
              <ArrowRight className={c("pipe__connect")} style={{ display: "none" }} />
            </div>
            <div className={c("pipe__step")} data-reveal>
              <span className={c("pipe__n")}>4</span>
              <div className={c("pipe__bar")}>
                <span style={{ height: "50%" }} />
                <span style={{ height: "80%" }} />
                <span style={{ height: "95%" }} />
              </div>
              <h3>Diagnóstico</h3>
              <p>Informa qué se resolvió, qué fue corregido y qué requiere revisión.</p>
              <ArrowRight className={c("pipe__connect")} style={{ display: "none" }} />
            </div>
            <div className={c("pipe__step")} data-reveal>
              <span className={c("pipe__n")}>5</span>
              <div className={c("pipe__bar")}>
                <span style={{ height: "90%" }} />
                <span style={{ height: "70%" }} />
                <span style={{ height: "95%" }} />
              </div>
              <h3>Integración</h3>
              <p>Lleva esa inteligencia a APIs, batch, plataforma o desarrollos a medida.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== ECOSYSTEM INTRO ===================== */}
      <section className={c("sec", "eco", "spotlight")} id="ecosistema" style={{ padding: "96px 0px 10px" }}>
        <div className={c("wrap")} style={{ padding: "0px 48px", textAlign: "left" }}>
          <div className={c("sec-head")} data-reveal>
            <span className={c("eyebrow", "eyebrow--on-dark")}>Ecosistema de producto</span>
            <h2 className={c("sec-h2")} style={{ color: "rgb(28, 37, 48)" }}>
              Un solo motor. Múltiples formas de integrarlo a tu operación.
            </h2>
            <p className={c("sec-lead")}>
              Desde la captura en un formulario hasta la limpieza de millones de registros, Ubidata
              ofrece distintas formas de aplicar Address Intelligence según el punto del proceso que
              quieras resolver.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== 4.1 Address Lookup ===================== */}
      <section className={c("sec", "eco")} id="producto-lookup" style={{ padding: "80px 0px 84px" }}>
        <div className={c("wrap", "eco__split")}>
          <div>
            <span className={c("prod-tag")}>
              <Search className={c("i")} /> Address Lookup
            </span>
            <h3 className={c("prod-h")}>Buscador de direcciones</h3>
            <p className={c("prod-p")}>
              Mejora la experiencia de carga desde el primer contacto. El buscador interpreta la
              dirección ingresada por el usuario y devuelve una opción estructurada y normalizada,
              ideal para onboarding, checkout y formularios.
            </p>
            <a className={c("eco__more")} href="#demo">
              Ver el buscador en acción <ArrowRight className={c("i")} />
            </a>
          </div>
          <div>
            <div className={c("lookup-vis")} id="lookupVis">
              <div className={c("lookup-vis__bar")}>
                <MapPin className={c("pin")} strokeWidth={1.8} />
                <span className={c("typed")}>Av. Corrientes 1234, Buenos…</span>
                <span className={c("cursor")} />
              </div>
              <div className={c("lookup-vis__list")}>
                <div className={c("lookup-vis__opt", "is-sel")}>
                  <Check className={c("i")} /> Av. Corrientes 1234, San Nicolás, CABA{" "}
                  <span className={c("conf")}>0.98</span>
                </div>
                <div className={c("lookup-vis__opt")}>
                  <Search className={c("i")} /> Av. Corrientes 1234, Almagro, CABA{" "}
                  <span className={c("conf")} style={{ color: "var(--gray-500)" }}>
                    0.71
                  </span>
                </div>
              </div>
              <div className={c("lookup-vis__chips")}>
                <span className={c("lookup-vis__chip")}>
                  <b>calle</b> Av. Corrientes
                </span>
                <span className={c("lookup-vis__chip")}>
                  <b>altura</b> 1234
                </span>
                <span className={c("lookup-vis__chip")}>
                  <b>CP</b> C1043
                </span>
                <span className={c("lookup-vis__chip")}>
                  <b>localidad</b> CABA
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== 4.2 APIs ===================== */}
      <section
        className={c("sec", "eco")}
        id="producto-api"
        style={{
          background: "var(--surface-subtle)",
          borderTop: "1px solid var(--border-subtle)",
          borderBottom: "1px solid var(--border-subtle)",
          paddingTop: 84,
          paddingBottom: 84,
        }}
      >
        <div className={c("wrap", "eco__split")}>
          <div>
            <span className={c("prod-tag")}>
              <Braces className={c("i")} /> APIs
            </span>
            <h3 className={c("prod-h")}>APIs de validación de direcciones</h3>
            <p className={c("prod-p")}>
              Integrá validación, normalización y diagnóstico directamente en tus sistemas. La API
              REST permite implementaciones modernas, mientras que SOAP asegura compatibilidad con
              entornos legacy.
            </p>
            <div style={{ display: "flex", gap: 24, flexWrap: "wrap", marginTop: 24 }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8, font: "500 0.875rem/1 var(--font-sans)", color: "var(--text-body)" }}>
                <CheckCircle style={{ width: 17, height: 17, color: "var(--success)" }} /> Latencia
                &lt;80&nbsp;ms
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8, font: "500 0.875rem/1 var(--font-sans)", color: "var(--text-body)" }}>
                <CheckCircle style={{ width: 17, height: 17, color: "var(--success)" }} /> REST &amp;
                SOAP
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8, font: "500 0.875rem/1 var(--font-sans)", color: "var(--text-body)" }}>
                <CheckCircle style={{ width: 17, height: 17, color: "var(--success)" }} /> SDKs y
                webhooks
              </span>
            </div>
            <a className={c("eco__more")} href="#novedades">
              Ver documentación <ArrowRight className={c("i")} />
            </a>
          </div>
          <div>
            <ApiCodeCard />
          </div>
        </div>
      </section>

      {/* ===================== 4.3 Batch + Custom ===================== */}
      <section className={c("sec", "eco")} id="producto-batch" style={{ paddingTop: 84, paddingBottom: 48 }}>
        <div className={c("wrap")}>
          <div className={c("eco-row")}>
            <div className={c("eco-card")} data-reveal>
              <div className={c("eco-card__ic")}>
                <Database className={c("i")} strokeWidth={1.8} />
              </div>
              <h3>Procesamiento batch</h3>
              <p>
                Normalizá bases históricas o grandes flujos de datos con la misma lógica del motor de
                validación. Procesá registros en lote y obtené direcciones estandarizadas junto con
                diagnósticos para los casos no resueltos.
              </p>
              <div className={c("mini-batch")}>
                <div className={c("file")} />
                <ArrowRight className={c("arr")} />
                <div className={c("engine")}>
                  <Settings className={c("i")} />
                </div>
                <ArrowRight className={c("arr")} />
                <div className={c("out")}>
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
            <div className={c("eco-card")} data-reveal>
              <div className={c("eco-card__ic")}>
                <Wrench className={c("i")} strokeWidth={1.8} />
              </div>
              <h3>Soluciones a medida</h3>
              <p>
                Llevamos la lógica de Address Intelligence a flujos, sistemas y contextos específicos
                de tu operación. Diseñamos integraciones personalizadas para resolver casos que
                requieren una implementación adaptada.
              </p>
              <div className={c("mini-custom")}>
                <span className={c("node", "brand")}>Ubidata</span>
                <span className={c("dash")} />
                <span className={c("node")}>CRM</span>
                <span className={c("dash")} />
                <span className={c("node")}>ERP</span>
                <span className={c("dash")} />
                <span className={c("node")}>Core</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== 4.4 Platform ===================== */}
      <section className={c("sec", "eco")} id="producto-plataforma" style={{ paddingTop: 48, paddingBottom: 96 }}>
        <div className={c("wrap")}>
          <div className={c("platform")}>
            <div className={c("platform__head")} data-reveal>
              <span className={c("prod-tag")} style={{ marginBottom: 0 }}>
                <Grid className={c("i")} /> Plataforma
              </span>
              <h3 className={c("prod-h")} style={{ marginTop: 16 }}>
                Plataforma Ubidata
              </h3>
              <p className={c("prod-p")} style={{ marginLeft: "auto", marginRight: "auto", width: 450 }}>
                Operá productos, consultá resultados y centralizá procesos desde una interfaz diseñada
                para equipos que necesitan visibilidad y control sobre su operación de direcciones.
              </p>
            </div>
            <div className={c("platform__stage")} data-reveal>
              <div className={c("platform__frame")}>
                <div className={c("dash")}>
                  <div className={c("dash__chrome")}>
                    <div className={c("dots")}>
                      <span />
                      <span />
                      <span />
                    </div>
                    <span className={c("url")}>app.ubidata.com/resumen</span>
                    <span className={c("badge")}>batch completado · 02:14</span>
                  </div>
                  <div className={c("dash__shell")}>
                    <aside className={c("dash__side")}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        className={c("logo")}
                        src="/assets/logo/ubidata-logo-white.png"
                        alt="Ubidata"
                        style={{ height: 20, width: "auto", objectFit: "contain", objectPosition: "left" }}
                      />
                      <div className={c("dash__nav", "active")}>
                        <LayoutDashboard className={c("i")} /> Resumen
                      </div>
                      <div className={c("dash__nav")}>
                        <MapPin className={c("i")} /> Validar dirección
                      </div>
                      <div className={c("dash__nav")}>
                        <Database className={c("i")} /> Lotes
                      </div>
                      <div className={c("dash__nav")}>
                        <Braces className={c("i")} /> API keys
                      </div>
                      <div className={c("dash__nav")}>
                        <BarChart className={c("i")} /> Reportes
                      </div>
                    </aside>
                    <div className={c("dash__main")}>
                      <div className={c("dash__title")}>
                        <h4>Resumen de calidad</h4>
                        <span className={c("when")}>Octubre 2025</span>
                      </div>
                      <div className={c("kpis")}>
                        <div className={c("kpi")}>
                          <div className={c("lbl")}>Procesadas</div>
                          <div className={c("val")}>2.41M</div>
                          <div className={c("delta")}>
                            <ArrowUp className={c("i")} /> +4.2%
                          </div>
                        </div>
                        <div className={c("kpi")}>
                          <div className={c("lbl")}>Validadas</div>
                          <div className={c("val")} style={{ color: "var(--success)" }}>
                            96.2%
                          </div>
                          <div className={c("delta")}>
                            <ArrowUp className={c("i")} /> +1.8 pts
                          </div>
                        </div>
                        <div className={c("kpi")}>
                          <div className={c("lbl")}>Corregidas</div>
                          <div className={c("val")} style={{ color: "var(--cyan-700)" }}>
                            412K
                          </div>
                          <div className={c("delta")} style={{ color: "var(--gray-500)" }}>
                            fuzzy match
                          </div>
                        </div>
                      </div>
                      <div className={c("dash__bottom")}>
                        <div className={c("dash__panel")}>
                          <div className={c("ph")}>
                            <h5>Validaciones recientes</h5>
                            <span style={{ font: "var(--text-caption)", color: "var(--cyan-700)" }}>Ver todo →</span>
                          </div>
                          <table className={c("dvtable")}>
                            <colgroup>
                              <col className={c("c-id")} />
                              <col className={c("c-dir")} />
                              <col className={c("c-cf")} />
                              <col className={c("c-st")} />
                            </colgroup>
                            <thead>
                              <tr>
                                <th>ID</th>
                                <th>Dirección</th>
                                <th className={c("r")} style={{ textAlign: "right" }}>
                                  Confianza
                                </th>
                                <th style={{ textAlign: "left" }}>Estatus</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className={c("id")}>VL_0041</td>
                                <td className={c("dir")}>Av. Insurgentes Sur 1602, Crédito Constructor</td>
                                <td className={c("cf")}>98.7%</td>
                                <td className={c("st-cell")}>
                                  <span className={c("dpill", "ok")}>
                                    <span className={c("d")} />
                                    Verificada
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td className={c("id")}>VL_0040</td>
                                <td className={c("dir")}>Reforma 222, Piso 14, Juárez</td>
                                <td className={c("cf")}>97.2%</td>
                                <td className={c("st-cell")}>
                                  <span className={c("dpill", "ok")}>
                                    <span className={c("d")} />
                                    Verificada
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td className={c("id")}>VL_0039</td>
                                <td className={c("dir")}>Calz. Vallejo 1200</td>
                                <td className={c("cf")}>72.4%</td>
                                <td className={c("st-cell")}>
                                  <span className={c("dpill", "partial")}>
                                    <span className={c("d")} />
                                    Parcial
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td className={c("id")}>VL_0038</td>
                                <td className={c("dir")}>Av. Corrientes 1234, San Nicolás</td>
                                <td className={c("cf")}>96.5%</td>
                                <td className={c("st-cell")}>
                                  <span className={c("dpill", "ok")}>
                                    <span className={c("d")} />
                                    Verificada
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td className={c("id")}>VL_0037</td>
                                <td className={c("dir")}>Sin número, Col. Tepito</td>
                                <td className={c("cf")}>—</td>
                                <td className={c("st-cell")}>
                                  <span className={c("dpill", "none")}>
                                    <span className={c("d")} />
                                    No encontrada
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className={c("dash__panel", "dash__panel--sm")}>
                          <div className={c("ph")}>
                            <h5>Resolución del lote</h5>
                          </div>
                          <div className={c("brow")}>
                            <div className={c("bl")}>
                              <span>Exactas</span>
                              <span>78%</span>
                            </div>
                            <div className={c("track")}>
                              <div className={c("fill")} style={{ width: "78%", background: "var(--brand-gradient-cta)" }} />
                            </div>
                          </div>
                          <div className={c("brow")}>
                            <div className={c("bl")}>
                              <span>Corregidas</span>
                              <span>18%</span>
                            </div>
                            <div className={c("track")}>
                              <div className={c("fill")} style={{ width: "18%", background: "linear-gradient(90deg,var(--brand-teal),var(--green-400))" }} />
                            </div>
                          </div>
                          <div className={c("brow")}>
                            <div className={c("bl")}>
                              <span>Revisión</span>
                              <span>4%</span>
                            </div>
                            <div className={c("track")}>
                              <div className={c("fill")} style={{ width: "4%", background: "var(--warning)" }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CASOS DE USO ===================== */}
      <section className={c("sec", "problem")} id="casos">
        <div className={c("wrap")}>
          <div className={c("sec-head")} data-reveal>
            <span className={c("eyebrow")}>Casos de uso</span>
            <h2 className={c("sec-h2")}>Address Intelligence aplicado a procesos reales</h2>
            <p className={c("sec-lead")}>
              Ubidata se integra donde la calidad de las direcciones impacta directamente en la
              operación.
            </p>
          </div>
          <div className={c("cases")}>
            <Link className={c("case")} href="/casos/ultima-milla" data-reveal>
              <span className={c("case__blob")} />
              <div className={c("case__ic")}>
                <Truck className={c("i")} strokeWidth={1.8} />
              </div>
              <span className={c("case__overline")}>Última milla</span>
              <h3>Reducí entregas fallidas y mejorá la precisión operativa</h3>
              <p>
                Capturá mejor las direcciones desde el origen y validalas antes de que impacten en
                ruteo, despacho y entrega.
              </p>
              <span className={c("more")}>
                Ver caso <ArrowRight className={c("i")} />
              </span>
            </Link>
            <Link className={c("case")} href="/casos/onboarding" data-reveal>
              <span className={c("case__blob")} />
              <div className={c("case__ic")}>
                <UserPlus className={c("i")} strokeWidth={1.8} />
              </div>
              <span className={c("case__overline")}>Onboarding</span>
              <h3>Mejorá la captura de domicilios desde el primer dato</h3>
              <p>
                Reducí fricción en formularios, evitá errores de carga y validá información clave en
                procesos de alta digital.
              </p>
              <span className={c("more")}>
                Ver caso <ArrowRight className={c("i")} />
              </span>
            </Link>
            <Link className={c("case")} href="/casos/cumplimiento" data-reveal>
              <span className={c("case__blob")} />
              <div className={c("case__ic")}>
                <ShieldCheck className={c("i")} strokeWidth={1.8} />
              </div>
              <span className={c("case__overline")}>Cumplimiento normativo</span>
              <h3>Incorporá validación de domicilios en procesos sensibles</h3>
              <p>
                Fortalecé controles en flujos donde la calidad del dato es relevante para compliance,
                verificación y trazabilidad.
              </p>
              <span className={c("more")}>
                Ver caso <ArrowRight className={c("i")} />
              </span>
            </Link>
            <Link className={c("case")} href="/casos/data-cleaning" data-reveal>
              <span className={c("case__blob")} />
              <div className={c("case__ic")}>
                <Funnel className={c("i")} strokeWidth={1.8} />
              </div>
              <span className={c("case__overline")}>Data cleaning</span>
              <h3>Transformá bases inconsistentes en datos confiables</h3>
              <p>
                Normalizá registros históricos, detectá inconsistencias y recuperá calidad de datos
                para operar mejor.
              </p>
              <span className={c("more")}>
                Ver caso <ArrowRight className={c("i")} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== CTA FINAL ===================== */}
      <section className={c("cta")} id="demo-cta">
        <div className={c("cta__inner")}>
          <div>
            <span className={c("eyebrow", "eyebrow--on-dark")}>Probalo ahora</span>
            <h2 className={c("cta__h2")} style={{ width: 369 }}>
              Probá cómo responde Ubidata con una dirección real
            </h2>
            <p className={c("cta__p")}>
              Explorá la plataforma y descubrí cómo funciona la captura, validación y normalización de
              direcciones en un entorno real.
            </p>
            <div className={c("cta__btns")}>
              <a className={c("btn", "btn-grad")} href="#demo">
                Probar la demo <ArrowRight className={c("i")} />
              </a>
              <a className={c("btn", "btn-outline-white")} href="#footer">
                Solicitar demo
              </a>
            </div>
          </div>
          <div>
            <div className={c("cta__tile")}>
              <div className={c("row")}>
                <MapPin className={c("i")} strokeWidth={1.8} />
                <span className={c("t")}>
                  Mitre 455, rosario <b>|</b>
                </span>
              </div>
              <div className={c("res")}>
                <CheckCircle className={c("i")} />
                <span className={c("t")}>
                  Verificada · <b>Bartolomé Mitre 455, Rosario, Santa Fe (S2000)</b>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== NOVEDADES ===================== */}
      <section className={c("sec", "blog")} id="novedades">
        <div className={c("wrap")}>
          <div className={c("blog__head")}>
            <div className={c("sec-head")} data-reveal>
              <span className={c("eyebrow")}>Novedades</span>
              <h2 className={c("sec-h2")}>Novedades e insights sobre Address Intelligence</h2>
            </div>
            <a className={c("eco__more")} href="#" style={{ marginTop: 0, flex: "none" }}>
              Ver todas <ArrowRight className={c("i")} />
            </a>
          </div>
          <div className={c("blog__grid")}>
            <a className={c("post")} href="#" data-reveal>
              <div className={c("post__cover", "c1")}>
                <div className={c("grid-tex")} />
                <div className={c("bars")}>
                  <span style={{ height: "60%" }} />
                  <span style={{ height: "90%" }} />
                  <span style={{ height: "40%" }} />
                  <span style={{ height: "75%" }} />
                </div>
              </div>
              <div className={c("post__body")}>
                <div className={c("post__meta")}>
                  <span className={c("tag")}>Onboarding</span>
                  <span className={c("dot")}>·</span>
                  <span className={c("date")}>6 min de lectura</span>
                </div>
                <h3>Cómo reducir el abandono en formularios con captura asistida de direcciones</h3>
                <p>Buenas prácticas para validar domicilios sin agregar fricción en el alta digital.</p>
                <span className={c("read")}>
                  Leer artículo <ArrowRight className={c("i")} />
                </span>
              </div>
            </a>
            <a className={c("post")} href="#" data-reveal>
              <div className={c("post__cover", "c2")}>
                <div className={c("grid-tex")} />
                <div className={c("bars")}>
                  <span style={{ height: "80%", background: "var(--cyan-400)" }} />
                  <span style={{ height: "45%", background: "var(--green-400)" }} />
                  <span style={{ height: "95%", background: "var(--cyan-300)" }} />
                  <span style={{ height: "65%", background: "var(--green-400)" }} />
                </div>
              </div>
              <div className={c("post__body")}>
                <div className={c("post__meta")}>
                  <span className={c("tag")}>Última milla</span>
                  <span className={c("dot")}>·</span>
                  <span className={c("date")}>8 min de lectura</span>
                </div>
                <h3>Entregas fallidas: cuánto cuesta una dirección mal cargada en logística</h3>
                <p>El impacto real de la calidad de direcciones en ruteo, despacho y costos operativos.</p>
                <span className={c("read")}>
                  Leer artículo <ArrowRight className={c("i")} />
                </span>
              </div>
            </a>
            <a className={c("post")} href="#" data-reveal>
              <div className={c("post__cover", "c3")}>
                <div className={c("grid-tex")} />
                <div className={c("bars")}>
                  <span style={{ height: "55%" }} />
                  <span style={{ height: "85%" }} />
                  <span style={{ height: "70%" }} />
                  <span style={{ height: "95%" }} />
                </div>
              </div>
              <div className={c("post__body")}>
                <div className={c("post__meta")}>
                  <span className={c("tag")}>Calidad de datos</span>
                  <span className={c("dot")}>·</span>
                  <span className={c("date")}>5 min de lectura</span>
                </div>
                <h3>Normalización y deduplicación: cómo recuperar una base de direcciones degradada</h3>
                <p>Un enfoque de data cleaning con diagnóstico para casos resueltos, corregidos y a revisar.</p>
                <span className={c("read")}>
                  Leer artículo <ArrowRight className={c("i")} />
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
