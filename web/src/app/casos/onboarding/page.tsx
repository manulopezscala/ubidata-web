import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import { makeCx } from "@/lib/cx";
import OnboardingDemo from "./OnboardingDemo";
import {
  ArrowRight,
  ArrowDown,
  Pin,
  CheckCircle,
  CheckSquare,
  Braces,
  Search,
  X,
  Star,
  Grid,
  Wrench,
  Bookmark,
  ShieldCheck,
  Timer,
  RefreshCw,
  BarChartBig,
  Database,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Onboarding — Ubidata",
  description:
    "Ubidata ayuda a reducir errores de carga y fricción en formularios de onboarding, validando y normalizando direcciones en tiempo real.",
};

const c = makeCx(styles);

export default function Onboarding() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className={c("spotlight", "hero")}>
        <div className={c("wrap", "hero__grid")}>
          <div>
            <span className={c("hero__crumb")}>
              <Link href="/#casos">Casos de uso</Link> <span className={c("sep")}>/</span> Onboarding
            </span>
            <h1 className={c("hero__h1")}>
              Mejorá la captura de domicilios desde el <span className={c("grad")}>primer dato</span>
            </h1>
            <p className={c("hero__sub")}>
              Ubidata ayuda a reducir errores de carga y fricción en formularios de onboarding,
              validando y normalizando direcciones en tiempo real — antes de que un dato mal cargado
              avance por todo el proceso.
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

          {/* Onboarding form mock */}
          <div>
            <div className={c("formcard")}>
              <div className={c("formcard__head")}>
                <span className={c("formcard__title")}>Crear cuenta</span>
                <span className={c("formcard__step")}>Paso 2 de 3 · Datos</span>
              </div>
              <div className={c("fmrow")}>
                <div className={c("fmf")}>
                  <label>Nombre</label>
                  <div className={c("ph")}>María González</div>
                </div>
                <div className={c("fmf")}>
                  <label>Email</label>
                  <div className={c("ph")}>maria@empresa.com</div>
                </div>
              </div>
              <div className={c("fmrow")}>
                <div className={c("fmf")}>
                  <label>Documento / CUIT</label>
                  <div className={c("ph", "mono")}>20-31……-4</div>
                </div>
                <div className={c("fmf")}>
                  <label>Teléfono</label>
                  <div className={c("ph", "mono")}>+54 11 5……</div>
                </div>
              </div>
              <div className={c("fmf", "fmf--full")}>
                <label>Dirección</label>
                <div className={c("fmaddr")}>
                  <div className={c("fmaddr__input")}>
                    <Pin className={c("pin")} strokeWidth={1.8} />
                    <span className={c("txt")}>Av. Cordoba 1430</span>
                    <span className={c("caret")} />
                  </div>
                  <div className={c("fmsug")}>
                    <div className={c("fmsug__item", "is-active")}>
                      <Pin className={c("mp")} strokeWidth={1.8} />
                      <span>
                        <b>Av. Córdoba 1430</b>, Ciudad Autónoma de Buenos Aires
                      </span>
                      <span className={c("conf")}>98.7%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={c("fmvalid")}>
                <CheckCircle className={c("i")} />
                <div className={c("vt")}>
                  Dirección validada<span>Normalizada · Alta confianza · Lista para guardar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== ROADMAP ===================== */}
      <section className={c("sec", "road")}>
        <div className={c("wrap")}>
          <div className={c("sec-head")} data-reveal>
            <span className={c("eyebrow")}>El camino de una dirección mal cargada</span>
            <h2 className={c("sec-h2")}>
              El problema no aparece al final del onboarding. Entra con el primer dato mal cargado.
            </h2>
            <p className={c("sec-lead")}>
              Cuando el domicilio se carga de forma incompleta, ambigua o inconsistente, el proceso
              puede continuar — pero el dato empieza a degradar todo lo que viene después:
              validaciones, sistemas internos, CRM, reportes y experiencia del usuario.
            </p>
          </div>

          <div className={c("road__track")}>
            <div className={c("road__rail")} />

            <div className={c("rstep", "rstep--warn")} data-reveal>
              <div className={c("rstep__node")}>1</div>
              <div className={c("rcard")}>
                <span className={c("rcard__phase")}>Carga inicial</span>
                <h3>Carga inicial ambigua</h3>
                <p>El usuario ingresa una dirección con abreviaciones, errores o datos incompletos.</p>
                <div className={c("rchip", "rchip--warn")}>
                  <span className={c("d")} />
                  Cordoba 1430 Cap Fed
                </div>
                <div className={c("rimpact")}>
                  <span className={c("rimpact__label")} style={{ color: "var(--warning)" }}>
                    Estado
                  </span>
                  <p style={{ color: "var(--warning)" }}>Ambigua</p>
                </div>
              </div>
            </div>

            <div className={c("rstep", "rstep--bad")} data-reveal>
              <div className={c("rstep__node")}>2</div>
              <div className={c("rcard")}>
                <span className={c("rcard__phase")}>Sin validación en origen</span>
                <h3>El error entra al sistema</h3>
                <p>
                  Sin validación en origen, el formulario permite guardar una dirección que no está
                  normalizada ni estructurada.
                </p>
                <ul className={c("rlist")}>
                  <li>
                    <X className={c("i")} strokeWidth={2.2} /> Calle sin acento o mal escrita
                  </li>
                  <li>
                    <X className={c("i")} strokeWidth={2.2} /> Ciudad abreviada
                  </li>
                  <li>
                    <X className={c("i")} strokeWidth={2.2} /> Provincia no estandarizada
                  </li>
                  <li>
                    <X className={c("i")} strokeWidth={2.2} /> Campos faltantes · formato inconsistente
                  </li>
                </ul>
              </div>
            </div>

            <div className={c("rstep", "rstep--bad")} data-reveal>
              <div className={c("rstep__node")}>3</div>
              <div className={c("rcard")}>
                <span className={c("rcard__phase")}>Después del alta</span>
                <h3>Aparece la revisión manual</h3>
                <p>
                  El dato requiere interpretación, corrección o validación posterior por parte de
                  equipos internos.
                </p>
                <div className={c("rchip", "rchip--bad")}>
                  <span className={c("d")} />
                  ¿Córdoba? ¿CABA? Revisar
                </div>
                <div className={c("rimpact")}>
                  <span className={c("rimpact__label")}>Impacto</span>
                  <p>Más tareas manuales, más demoras y criterios poco consistentes.</p>
                </div>
              </div>
            </div>

            <div className={c("rstep", "rstep--bad")} data-reveal>
              <div className={c("rstep__node")}>4</div>
              <div className={c("rcard")}>
                <span className={c("rcard__phase")}>Calidad del registro</span>
                <h3>El onboarding pierde calidad</h3>
                <p>
                  El usuario puede completar el proceso, pero la empresa recibe un domicilio poco
                  confiable para operar.
                </p>
                <div className={c("rimpact")}>
                  <span className={c("rimpact__label")}>Impacto</span>
                  <p>Datos incompletos, validaciones débiles y menor confiabilidad del registro.</p>
                </div>
              </div>
            </div>

            <div className={c("rstep", "rstep--bad")} data-reveal>
              <div className={c("rstep__node")}>5</div>
              <div className={c("rcard")}>
                <span className={c("rcard__phase")}>Aguas abajo</span>
                <h3>El dato contamina otros sistemas</h3>
                <p>
                  La dirección mal cargada pasa al CRM, sistemas internos, reportes, comunicaciones o
                  validaciones futuras.
                </p>
                <div className={c("rimpact")}>
                  <span className={c("rimpact__label")}>Impacto</span>
                  <p>Bases inconsistentes desde el inicio.</p>
                </div>
              </div>
            </div>
          </div>

          <div className={c("road__close")} data-reveal>
            <div className={c("road__close-inner")}>
              <span className={c("ic")}>
                <ShieldCheck className={c("i")} />
              </span>
              <p>
                Ubidata evita que el error entre al proceso. No lo corrige tarde:{" "}
                <span className={c("hl")}>lo previene en el momento de la carga.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== DEMO (interactive) ===================== */}
      <section className={c("sec")} id="demo">
        <div className={c("wrap")}>
          <div className={c("sec-head")} data-reveal>
            <span className={c("eyebrow")}>Demo aplicada</span>
            <h2 className={c("sec-h2")}>Cómo se integra Ubidata en tu onboarding</h2>
            <p className={c("sec-lead")}>
              Incorporá Address Lookup y validación en tiempo real dentro de tus formularios para que
              cada domicilio llegue normalizado, estructurado y listo para operar. Escribí en el campo
              de dirección para verlo en acción.
            </p>
          </div>

          <OnboardingDemo />
        </div>
      </section>

      {/* ===================== BENEFITS (glass) ===================== */}
      <section className={c("sec", "benf")}>
        <div className={c("wrap")}>
          <div className={c("sec-head")} data-reveal>
            <span className={c("eyebrow", "eyebrow--on-dark")}>Beneficios</span>
            <h2 className={c("sec-h2", "sec-h2--on-dark")}>
              Menos fricción para el usuario. Más calidad para tu operación.
            </h2>
            <p className={c("sec-lead", "sec-lead--on-dark")}>
              Validar el domicilio en el momento de la carga mejora la experiencia de onboarding y
              evita que datos inconsistentes lleguen a tus sistemas.
            </p>
          </div>
          <div className={c("benf__grid")} data-reveal>
            <div className={c("gcard")} data-reveal>
              <div className={c("gcard__ic")}>
                <CheckSquare className={c("i")} strokeWidth={1.8} />
              </div>
              <h3>Menos errores de carga</h3>
              <p>
                Asistí al usuario mientras escribe y reducí domicilios incompletos, ambiguos o mal
                estructurados.
              </p>
            </div>
            <div className={c("gcard")} data-reveal>
              <div className={c("gcard__ic")}>
                <Timer className={c("i")} strokeWidth={1.8} />
              </div>
              <h3>Mejor experiencia de onboarding</h3>
              <p>El usuario encuentra su dirección más rápido y completa el formulario con menos fricción.</p>
            </div>
            <div className={c("gcard")} data-reveal>
              <div className={c("gcard__ic")}>
                <Database className={c("i")} strokeWidth={1.8} />
              </div>
              <h3>Datos confiables desde el origen</h3>
              <p>
                El domicilio llega validado, normalizado y estructurado antes de entrar al CRM o
                sistema interno.
              </p>
            </div>
            <div className={c("gcard")} data-reveal>
              <div className={c("gcard__ic")}>
                <RefreshCw className={c("i")} strokeWidth={1.8} />
              </div>
              <h3>Menos revisión manual</h3>
              <p>Reducí correcciones posteriores, validaciones internas y criterios manuales dispersos.</p>
            </div>
            <div className={c("gcard")} data-reveal>
              <div className={c("gcard__ic")}>
                <BarChartBig className={c("i")} strokeWidth={1.8} />
              </div>
              <h3>Mayor consistencia operativa</h3>
              <p>
                Unificá formatos y campos para que el dato pueda usarse en validaciones, reportes y
                procesos posteriores.
              </p>
            </div>
            <div className={c("gcard")} data-reveal>
              <div className={c("gcard__ic")}>
                <Braces className={c("i")} strokeWidth={1.8} />
              </div>
              <h3>Integración sin fricción</h3>
              <p>Incorporá Address Lookup y validación sin romper el flujo de onboarding existente.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PRODUCTOS ===================== */}
      <section className={c("sec")} id="productos">
        <div className={c("wrap")}>
          <div className={c("sec-head")} data-reveal>
            <span className={c("eyebrow")}>Productos recomendados</span>
            <h2 className={c("sec-h2")}>Productos para mejorar tu onboarding</h2>
            <p className={c("sec-lead")}>
              Aplicá Address Intelligence en el punto exacto donde capturás el domicilio: desde el
              formulario hasta la validación interna y la operación posterior.
            </p>
          </div>
          <div className={c("prodlead")}>
            {/* featured */}
            <Link className={c("pfeat")} href="/#producto-lookup" data-reveal>
              <span className={c("pfeat__tag")}>
                <Star className={c("i")} strokeWidth={2.2} /> Producto recomendado para onboarding
              </span>
              <div className={c("pfeat__ic")}>
                <Search className={c("i")} strokeWidth={1.8} />
              </div>
              <h3>Buscador de direcciones</h3>
              <p>
                Asistí al usuario mientras escribe su domicilio y devolvé sugerencias normalizadas en
                tiempo real. Ideal para formularios de onboarding, registros digitales, apertura de
                cuentas y procesos de alta.
              </p>
              <div className={c("pmock")}>
                <div className={c("pmock__in")}>
                  <Pin className={c("mp")} strokeWidth={1.8} />
                  <span className={c("txt")}>Av. Cordoba 1430</span>
                </div>
                <div className={c("pmock__arrow")}>
                  <ArrowDown className={c("i")} />
                </div>
                <div className={c("pmock__out")}>
                  <Pin className={c("mp")} strokeWidth={1.8} />
                  <span className={c("txt")}>Av. Córdoba 1430, Ciudad Autónoma de Buenos Aires</span>
                </div>
                <div className={c("pmock__states")}>
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
              <span className={c("more")}>
                Ver producto <ArrowRight className={c("i")} />
              </span>
            </Link>

            {/* secondary */}
            <div className={c("psecs")}>
              <Link className={c("psec")} href="/#producto-api" data-reveal>
                <span className={c("psec__ic")}>
                  <Braces className={c("i")} strokeWidth={1.8} />
                </span>
                <div className={c("psec__b")}>
                  <h4>API REST de validación</h4>
                  <p>
                    Validá, normalizá y diagnosticá direcciones en tiempo real dentro de tus sistemas
                    de alta, CRM, app o plataforma propia.
                  </p>
                  <span className={c("psec__tag")}>Ideal para validación en tiempo real</span>
                </div>
              </Link>
              <Link className={c("psec")} href="/#producto-plataforma" data-reveal>
                <span className={c("psec__ic")}>
                  <Grid className={c("i")} strokeWidth={1.8} />
                </span>
                <div className={c("psec__b")}>
                  <h4>Plataforma Ubidata</h4>
                  <p>
                    Consultá resultados, visualizá diagnósticos y centralizá procesos de validación
                    desde una interfaz de operación.
                  </p>
                  <span className={c("psec__tag")}>Ideal para visibilidad y control</span>
                </div>
              </Link>
              <Link className={c("psec")} href="/#producto-batch" data-reveal>
                <span className={c("psec__ic")}>
                  <Wrench className={c("i")} strokeWidth={1.8} />
                </span>
                <div className={c("psec__b")}>
                  <h4>Soluciones a medida</h4>
                  <p>
                    Adaptamos Address Intelligence a flujos de onboarding con reglas específicas,
                    integraciones internas o validaciones particulares.
                  </p>
                  <span className={c("psec__tag")}>Ideal para procesos complejos</span>
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
            <h2 className={c("cta__h2")}>Capturá domicilios confiables desde el primer input</h2>
            <p className={c("cta__p")}>
              Conocé cómo Ubidata puede integrarse a tus formularios, sistemas de alta y procesos de
              onboarding para validar direcciones en tiempo real y operar con datos más consistentes.
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
          <div className={c("cta__chip")} data-reveal>
            <div className={c("ph")}>
              <span className={c("ic")}>
                <Bookmark className={c("i")} strokeWidth={1.8} />
              </span>
              <span className={c("t")}>Domicilio listo para operar</span>
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
                Alta confianza
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
