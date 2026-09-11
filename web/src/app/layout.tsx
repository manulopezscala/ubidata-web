import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Ubidata — Address Intelligence",
  description:
    "Capturá, validá, normalizá y diagnosticá direcciones en tiempo real o por lotes con la infraestructura de Address Intelligence de Ubidata.",
  icons: {
    icon: "/assets/logo/ubidata-mark.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Nav />
        {children}
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
