import Link from "next/link";
import styles from "./Nav.module.css";
import {
  ChevronDown,
  Search,
  Braces,
  Grid,
  Database,
  Wrench,
  Truck,
  UserPlus,
  ShieldCheck,
  Funnel,
  LogIn,
} from "./icons";

type MenuItem = {
  href: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
};

const productos: MenuItem[] = [
  { href: "/#producto-lookup", title: "Buscador de direcciones", desc: "Autocompletado normalizado para onboarding y checkout", icon: <Search className={styles.i} strokeWidth={1.8} /> },
  { href: "/#producto-api", title: "API REST de validación", desc: "Validación, normalización y diagnóstico en tus sistemas", icon: <Braces className={styles.i} strokeWidth={1.8} /> },
  { href: "/#producto-api", title: "API SOAP", desc: "Compatibilidad con entornos e integraciones legacy", icon: <Grid className={styles.i} strokeWidth={1.8} /> },
  { href: "/#producto-batch", title: "Procesamiento batch", desc: "Normalizá grandes volúmenes y bases históricas", icon: <Database className={styles.i} strokeWidth={1.8} /> },
  { href: "/#producto-batch", title: "Soluciones a medida", desc: "Integraciones diseñadas para tu operación específica", icon: <Wrench className={styles.i} strokeWidth={1.8} /> },
  { href: "/#producto-plataforma", title: "Plataforma", desc: "Operá productos y centralizá procesos con visibilidad total", icon: <Grid className={styles.i} strokeWidth={1.8} /> },
];

const casos: MenuItem[] = [
  { href: "/casos/ultima-milla", title: "Última milla", desc: "Reducí entregas fallidas y mejorá la precisión operativa", icon: <Truck className={styles.i} strokeWidth={1.8} /> },
  { href: "/casos/onboarding", title: "Onboarding", desc: "Mejorá la captura de domicilios desde el primer dato", icon: <UserPlus className={styles.i} strokeWidth={1.8} /> },
  { href: "/casos/cumplimiento", title: "Cumplimiento normativo", desc: "Validación de domicilios en procesos sensibles", icon: <ShieldCheck className={styles.i} strokeWidth={1.8} /> },
  { href: "/casos/data-cleaning", title: "Data cleaning", desc: "Transformá bases inconsistentes en datos confiables", icon: <Funnel className={styles.i} strokeWidth={1.8} /> },
];

function Dropdown({ items, wide }: { items: MenuItem[]; wide?: boolean }) {
  return (
    <div className={styles.dropdown} style={wide ? { minWidth: 380 } : undefined}>
      {items.map((it, i) => (
        <Link key={i} href={it.href}>
          <span className={styles.dropdown__ic}>{it.icon}</span>
          <span>
            <span className={styles.dropdown__t}>{it.title}</span>
            <span className={styles.dropdown__d}>{it.desc}</span>
          </span>
        </Link>
      ))}
    </div>
  );
}

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={styles.nav__logo} src="/assets/logo/ubidata-logo-navy.png" alt="Ubidata" />
      </Link>
      <div className={styles.nav__links}>
        <div className={styles.nav__item}>
          <Link className={styles.nav__link} href="/">Inicio</Link>
        </div>
        <div className={styles.nav__item}>
          <button className={styles.nav__link}>
            Productos <ChevronDown className={styles.caret} />
          </button>
          <Dropdown items={productos} wide />
        </div>
        <div className={styles.nav__item}>
          <button className={styles.nav__link}>
            Casos de uso <ChevronDown className={styles.caret} />
          </button>
          <Dropdown items={casos} />
        </div>
        <div className={styles.nav__item}>
          <Link className={styles.nav__link} href="/#novedades">Docs</Link>
        </div>
        <div className={styles.nav__item}>
          <Link className={styles.nav__link} href="/#novedades">Novedades</Link>
        </div>
        <div className={styles.nav__item}>
          <Link className={styles.nav__link} href="/#footer">Empresa</Link>
        </div>
        <div className={styles.nav__item}>
          <Link className={styles.nav__link} href="/#footer">Contacto</Link>
        </div>
      </div>
      <div className={styles.nav__spacer} />
      <div className={styles.nav__right}>
        <button className={styles.nav__login}>
          <LogIn className={styles.i} style={{ width: 15, height: 15 }} />
          Login
        </button>
      </div>
    </nav>
  );
}
