"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Entrance animation for elements marked with `data-reveal`.
 *
 * Mounted once from the root layout, which persists across client-side
 * navigations — only the page content underneath it swaps. The effect is
 * keyed on `pathname` so it re-scans and re-observes every time the route
 * changes; without that, `data-reveal` elements on any page reached via
 * `<Link>` (as opposed to a full reload) would never be wired up and would
 * stay invisible, since the one-time scan only ever saw the first page's DOM.
 *
 * It also flags the document so the reveal CSS becomes active only when JS
 * is running — without it every element stays visible, which is the no-JS
 * fallback the prototypes relied on.
 *
 * Elements already in view when this runs are revealed in the same frame,
 * so there is no flash of hidden content above the fold.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!els.length) return;

    root.setAttribute("data-reveal-ready", "");

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      els.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    // Stagger siblings slightly, as the prototypes did.
    els.forEach((el) => {
      const sibs = Array.from(el.parentElement?.children ?? []).filter((s) =>
        s.hasAttribute("data-reveal")
      );
      el.style.animationDelay = `${Math.min(sibs.indexOf(el), 4) * 0.07}s`;
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));

    // Safety net: never leave content hidden. Sets styles directly rather than
    // relying on the animation, which stays frozen while the tab is backgrounded.
    const failsafe = window.setTimeout(() => {
      els.forEach((el) => {
        el.classList.add("is-revealed");
        el.style.opacity = "1";
        el.style.transform = "none";
      });
    }, 4000);

    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
      root.removeAttribute("data-reveal-ready");
    };
  }, [pathname]);

  return null;
}
