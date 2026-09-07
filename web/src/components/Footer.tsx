import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.footer__inner}>
        <div className={styles.footer__top}>
          <div className={styles.footer__brand}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/logo/ubidata-logo-white.png" alt="Ubidata" />
            <p>
              Address Intelligence para empresas que necesitan operar con
              direcciones confiables, en tiempo real o a gran escala.
            </p>
            <div className={styles.badges}>
              <span>Real-time</span>
              <span>Batch</span>
              <span>REST · SOAP</span>
            </div>
          </div>
          <div className={styles.footer__col}>
            <h4>Productos</h4>
            <ul>
              <li><Link href="/#producto-lookup">Buscador de direcciones</Link></li>
              <li><Link href="/#producto-api">API REST</Link></li>
              <li><Link href="/#producto-api">API SOAP</Link></li>
              <li><Link href="/#producto-batch">Procesamiento batch</Link></li>
              <li><Link href="/#producto-batch">Soluciones a medida</Link></li>
              <li><Link href="/#producto-plataforma">Plataforma</Link></li>
            </ul>
          </div>
          <div className={styles.footer__col}>
            <h4>Casos de uso</h4>
            <ul>
              <li><Link href="/casos/ultima-milla">Última milla</Link></li>
              <li><Link href="/casos/onboarding">Onboarding</Link></li>
              <li><Link href="/casos/cumplimiento">Cumplimiento normativo</Link></li>
              <li><Link href="/casos/data-cleaning">Data cleaning</Link></li>
            </ul>
          </div>
          <div className={styles.footer__col}>
            <h4>Recursos</h4>
            <ul>
              <li><Link href="/#novedades">Docs</Link></li>
              <li><Link href="/#novedades">Novedades</Link></li>
              <li><a href="#">API reference</a></li>
              <li><a href="#">Estado del servicio</a></li>
            </ul>
          </div>
          <div className={styles.footer__col}>
            <h4>Empresa</h4>
            <ul>
              <li><a href="#">Nosotros</a></li>
              <li><a href="#">Contacto</a></li>
              <li><a href="#">Login</a></li>
              <li><a href="#">Solicitar demo</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.footer__bottom}>
          <p>© 2026 Ubidata · Inteligencia en datos</p>
          <div className={styles.links}>
            <a href="#">Privacidad</a>
            <a href="#">Términos</a>
            <a href="#">Seguridad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
