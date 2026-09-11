import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import { makeCx } from "@/lib/cx";
import {
  ArrowRight,
  File,
  FileText,
  Copy,
  Clock,
  Blocks,
  BarChart,
  Settings,
  Database,
  CheckCircle,
  Table,
  Grid,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Data Cleaning — Ubidata",
  description:
    "Ubidata procesa grandes volúmenes de direcciones para normalizar registros, diagnosticar inconsistencias y devolver bases más limpias, estructuradas y operables.",
};

const c = makeCx(styles);

export default function DataCleaning() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className={c("spotlight", "hero")}>
        <div className={c("wrap", "hero__grid")}>
          <div>
            <span className={c("hero__crumb")}>
              <Link href="/#casos">Casos de uso</Link> <span className={c("sep")}>/</span> Data cleaning
            </span>
            <h1 className={c("hero__h1")}>
              Transformá bases inconsistentes en <span className={c("grad")}>datos confiables</span>
            </h1>
            <p className={c("hero__sub")}>
              Ubidata procesa grandes volúmenes de direcciones para normalizar registros,
              diagnosticar inconsistencias y devolver bases más limpias, estructuradas y operables.
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

          {/* Before / after visual */}
          <div>
            <div className={c("clean-vis")}>
              <div className={c("clean-vis__top")}>
                <span className={c("clean-vis__file")}>
                  <File className={c("i")} /> base_clientes.csv
                </span>
                <span className={c("clean-vis__count")}>48.230 registros</span>
              </div>
              <p className={c("clean-vis__label")}>Base original</p>
              <div className={c("clean-vis__rows")}>
                <div className={c("crow", "crow--raw")}>
                  <span className={c("txt")}>AV INSURGENTES SUR1602 BJ cdmx</span>
                  <span className={c("flag", "dup")}>duplicado</span>
                </div>
                <div className={c("crow", "crow--raw")}>
                  <span className={c("txt")}>av. insurgentes 1602, benito juarez</span>
                  <span className={c("flag", "dup")}>duplicado</span>
                </div>
                <div className={c("crow", "crow--raw")}>
                  <span className={c("txt")}>Corrientes 1234 caba s/cp</span>
                  <span className={c("flag")}>incompleto</span>
                </div>
              </div>
              <div className={c("clean-vis__engine")}>
                <span className={c("line")} />
                <span className={c("chip")}>
                  <Settings className={c("i")} /> Procesamiento Ubidata
                </span>
                <span className={c("line")} />
              </div>
              <p className={c("clean-vis__label")}>Base procesada</p>
              <div className={c("clean-vis__rows")}>
                <div className={c("crow", "crow--clean")}>
                  <span className={c("txt")}>Av. Insurgentes Sur 1602, Crédito Constructor, 03940</span>
                  <span className={c("dpill", "ok")}>
                    <span className={c("d")} />
                    Exacta
                  </span>
                </div>
                <div className={c("crow", "crow--clean")}>
                  <span className={c("txt")}>Av. Corrientes 1234, San Nicolás, C1043</span>
                  <span className={c("dpill", "partial")}>
                    <span className={c("d")} />
                    Corregida
                  </span>
                </div>
              </div>
              <div className={c("clean-vis__foot")}>
                <span className={c("ok")}>
                  Normalizadas <b>96.2%</b>
                </span>
                <span>
                  Duplicados unificados <b>412</b>
                </span>
                <span>
                  A revisión <b>1.8%</b>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PROBLEM ===================== */}
      <section className={c("sec", "problem")}>
        <div className={c("wrap")}>
          <div className={c("sec-head")} data-reveal>
            <span className={c("eyebrow")}>El problema</span>
            <h2 className={c("sec-h2")}>
              Las bases históricas pierden valor cuando las direcciones no son consistentes
            </h2>
            <p className={c("sec-lead")}>
              Años de carga manual, sistemas distintos y criterios cambiantes degradan la calidad del
              dato — y con ella, todo lo que depende de él.
            </p>
          </div>
          <div className={c("pcards")}>
            <div className={c("pcard")} data-reveal>
              <div className={c("pcard__ic")}>
                <Copy className={c("i")} strokeWidth={1.8} />
              </div>
              <h3>Registros duplicados o inconsistentes</h3>
              <p>La misma dirección puede aparecer escrita de muchas formas distintas.</p>
            </div>
            <div className={c("pcard")} data-reveal>
              <div className={c("pcard__ic")}>
                <FileText className={c("i")} strokeWidth={1.8} />
              </div>
              <h3>Campos incompletos</h3>
              <p>Faltan datos clave para operar o analizar correctamente.</p>
            </div>
            <div className={c("pcard")} data-reveal>
              <div className={c("pcard__ic")}>
                <BarChart className={c("i")} strokeWidth={1.8} />
              </div>
              <h3>Reportes poco confiables</h3>
              <p>La mala calidad del dato impacta en análisis y decisiones.</p>
            </div>
            <div className={c("pcard")} data-reveal>
              <div className={c("pcard__ic")}>
                <Clock className={c("i")} strokeWidth={1.8} />
              </div>
              <h3>Procesos manuales de limpieza</h3>
              <p>Equipos que pierden tiempo corrigiendo registros caso por caso.</p>
            </div>
            <div className={c("pcard")} data-reveal>
              <div className={c("pcard__ic")}>
                <Blocks className={c("i")} strokeWidth={1.8} />
              </div>
              <h3>Dificultad para integrar sistemas</h3>
              <p>Bases desordenadas complican migraciones, CRMs, ERPs y automatizaciones.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CÓMO AYUDA — pipeline ===================== */}
      <section className={c("sec")}>
        <div className={c("wrap")}>
          <div className={c("sec-head")} data-reveal>
            <span className={c("eyebrow", "eyebrow--green")}>Cómo ayuda Ubidata</span>
            <h2 className={c("sec-h2")}>Normalización masiva con diagnóstico registro por registro</h2>
            <p className={c("sec-lead")}>
              El motor de Address Intelligence procesa tu base completa y devuelve cada registro
              clasificado: resuelto, corregido o marcado para revisión.
            </p>
          </div>
          <div className={c("pipe")}>
            <div className={c("pipe__step")} data-reveal>
              <span className={c("pipe__n")}>1</span>
              <div className={c("pipe__bar")}>
                <span style={{ height: "45%" }} />
                <span style={{ height: "70%" }} />
                <span style={{ height: "95%" }} />
              </div>
              <h3>Procesamiento batch</h3>
              <p>Grandes volúmenes procesados con la misma lógica del motor de validación.</p>
            </div>
            <div className={c("pipe__step")} data-reveal>
              <span className={c("pipe__n")}>2</span>
              <div className={c("pipe__bar")}>
                <span style={{ height: "60%" }} />
                <span style={{ height: "90%" }} />
                <span style={{ height: "55%" }} />
              </div>
              <h3>Normalización</h3>
              <p>Cada dirección se interpreta y se lleva a una forma única y consistente.</p>
            </div>
            <div className={c("pipe__step")} data-reveal>
              <span className={c("pipe__n")}>3</span>
              <div className={c("pipe__bar")}>
                <span style={{ height: "80%" }} />
                <span style={{ height: "50%" }} />
                <span style={{ height: "75%" }} />
              </div>
              <h3>Diagnóstico</h3>
              <p>Registros clasificados como resolubles y no resolubles, con su nivel de confianza.</p>
            </div>
            <div className={c("pipe__step")} data-reveal>
              <span className={c("pipe__n")}>4</span>
              <div className={c("pipe__bar")}>
                <span style={{ height: "55%" }} />
                <span style={{ height: "85%" }} />
                <span style={{ height: "95%" }} />
              </div>
              <h3>Estandarización</h3>
              <p>Campos estructurados y homogéneos, listos para sistemas y análisis.</p>
            </div>
            <div className={c("pipe__step")} data-reveal>
              <span className={c("pipe__n")}>5</span>
              <div className={c("pipe__bar")}>
                <span style={{ height: "90%" }} />
                <span style={{ height: "70%" }} />
                <span style={{ height: "95%" }} />
              </div>
              <h3>Entrega</h3>
              <p>Base procesada lista para operar, con el detalle de lo que se resolvió.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FLUJO APLICADO ===================== */}
      <section className={c("sec", "flow")}>
        <div className={c("wrap")}>
          <div className={c("sec-head")} data-reveal>
            <span className={c("eyebrow")}>Flujo aplicado</span>
            <h2 className={c("sec-h2")}>De base histórica a datos operables</h2>
          </div>
          <div className={c("flow__track")} data-reveal>
            <div className={c("flow__node")}>
              <span className={c("flow__ic")}>
                <Database className={c("i")} strokeWidth={1.8} />
              </span>
              <span className={c("flow__t")}>Base histórica</span>
              <span className={c("flow__d")}>Registros acumulados con criterios dispares</span>
            </div>
            <span className={c("flow__arr")}>
              <ArrowRight className={c("i")} />
            </span>
            <div className={c("flow__node", "brand")}>
              <span className={c("flow__ic")}>
                <Settings className={c("i")} strokeWidth={1.8} />
              </span>
              <span className={c("flow__t")}>Procesamiento batch Ubidata</span>
              <span className={c("flow__d")}>El motor analiza cada registro</span>
            </div>
            <span className={c("flow__arr")}>
              <ArrowRight className={c("i")} />
            </span>
            <div className={c("flow__node")}>
              <span className={c("flow__ic")}>
                <CheckCircle className={c("i")} strokeWidth={1.8} />
              </span>
              <span className={c("flow__t")}>Normalización y diagnóstico</span>
              <span className={c("flow__d")}>Resueltas, corregidas o a revisión</span>
            </div>
            <span className={c("flow__arr")}>
              <ArrowRight className={c("i")} />
            </span>
            <div className={c("flow__node")}>
              <span className={c("flow__ic")}>
                <Table className={c("i")} strokeWidth={1.8} />
              </span>
              <span className={c("flow__t")}>Base estructurada</span>
              <span className={c("flow__d")}>Campos consistentes y completos</span>
            </div>
            <span className={c("flow__arr")}>
              <ArrowRight className={c("i")} />
            </span>
            <div className={c("flow__node")}>
              <span className={c("flow__ic")}>
                <Grid className={c("i")} strokeWidth={1.8} />
              </span>
              <span className={c("flow__t")}>Sistemas y procesos</span>
              <span className={c("flow__d")}>CRM, ERP, reportes y operación</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PRODUCTOS RECOMENDADOS ===================== */}
      <section className={c("sec")} id="productos">
        <div className={c("wrap")}>
          <div className={c("sec-head")} data-reveal>
            <span className={c("eyebrow")}>Productos recomendados</span>
            <h2 className={c("sec-h2")}>Las piezas de Ubidata para este caso</h2>
            <p className={c("sec-lead")}>
              Empezá por el procesamiento batch y sumá las demás piezas según cómo opere tu equipo.
            </p>
          </div>
          <div className={c("prods")}>
            <Link className={c("prod")} href="/#producto-batch" data-reveal>
              <span className={c("prod__tag", "main")}>Producto principal</span>
              <h3>Procesamiento batch</h3>
              <p>
                Limpiá grandes volúmenes de datos en lote: normalización, deduplicación y diagnóstico
                para cada registro de la base.
              </p>
              <span className={c("more")}>
                Ver producto <ArrowRight className={c("i")} />
              </span>
            </Link>
            <Link className={c("prod")} href="/#producto-plataforma" data-reveal>
              <span className={c("prod__tag")}>Plataforma</span>
              <h3>Plataforma Ubidata</h3>
              <p>
                Gestioná procesos, consultá resultados y visualizá el estado de cada lote desde una
                interfaz centralizada.
              </p>
              <span className={c("more")}>
                Ver producto <ArrowRight className={c("i")} />
              </span>
            </Link>
            <Link className={c("prod")} href="/#producto-api" data-reveal>
              <span className={c("prod__tag")}>API</span>
              <h3>API REST</h3>
              <p>
                Mantené la calidad del dato en los nuevos registros: validá cada dirección al momento
                de la carga para que la base no se vuelva a degradar.
              </p>
              <span className={c("more")}>
                Ver producto <ArrowRight className={c("i")} />
              </span>
            </Link>
            <Link className={c("prod")} href="/#producto-batch" data-reveal>
              <span className={c("prod__tag")}>A medida</span>
              <h3>Soluciones a medida</h3>
              <p>
                Para procesos de migración, integración o reglas de negocio específicas que requieren
                una implementación adaptada.
              </p>
              <span className={c("more")}>
                Ver producto <ArrowRight className={c("i")} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== BENEFICIOS ===================== */}
      <section className={c("sec", "problem")} style={{ borderTop: "1px solid var(--border-subtle)" }}>
        <div className={c("wrap")}>
          <div className={c("sec-head")} data-reveal>
            <span className={c("eyebrow", "eyebrow--green")}>Beneficios esperados</span>
            <h2 className={c("sec-h2")}>Qué recuperás cuando la base vuelve a ser confiable</h2>
          </div>
          <div className={c("benefits")} data-reveal>
            <div className={c("benefit")}>
              <CheckCircle className={c("i")} />
              <span>Bases más limpias y consistentes</span>
            </div>
            <div className={c("benefit")}>
              <CheckCircle className={c("i")} />
              <span>Menos trabajo manual de corrección</span>
            </div>
            <div className={c("benefit")}>
              <CheckCircle className={c("i")} />
              <span>Mejor calidad para CRM, reporting y operaciones</span>
            </div>
            <div className={c("benefit")}>
              <CheckCircle className={c("i")} />
              <span>Diagnóstico claro de registros problemáticos</span>
            </div>
            <div className={c("benefit")}>
              <CheckCircle className={c("i")} />
              <span>Datos preparados para integraciones o migraciones</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CTA FINAL ===================== */}
      <section className={c("cta")} id="cta">
        <div className={c("cta__inner")}>
          <span className={c("eyebrow", "eyebrow--on-dark")}>Empezá hoy</span>
          <h2 className={c("cta__h2")}>Recuperá el valor de tu base de datos</h2>
          <p className={c("cta__p")}>
            Contanos cómo es tu base y te mostramos qué porcentaje puede resolverse automáticamente con
            un procesamiento de prueba.
          </p>
          <div className={c("cta__btns")}>
            <a className={c("btn", "btn-grad")} href="/#footer">
              Solicitar demo <ArrowRight className={c("i")} />
            </a>
            <a className={c("btn", "btn-outline-white")} href="#productos">
              Ver productos relacionados
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
