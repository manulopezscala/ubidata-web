"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/** True when the current route is `prefix` or nested under it. */
function useIsCurrent(prefix: string) {
  const pathname = usePathname();
  return pathname === prefix || pathname.startsWith(prefix + "/");
}

type Base = {
  /** Route section that makes this item current, e.g. "/casos". */
  section: string;
  className: string;
  currentClassName: string;
  children: ReactNode;
};

/** Dropdown trigger that highlights while browsing its section. */
export function CurrentButton({ section, className, currentClassName, children }: Base) {
  const current = useIsCurrent(section);
  return <button className={current ? `${className} ${currentClassName}` : className}>{children}</button>;
}

/** Top-level nav link that highlights while browsing its section. */
export function CurrentLink({ section, className, currentClassName, children, href }: Base & { href: string }) {
  const current = useIsCurrent(section);
  return (
    <Link
      href={href}
      className={current ? `${className} ${currentClassName}` : className}
      aria-current={current ? "page" : undefined}
    >
      {children}
    </Link>
  );
}
