import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

/**
 * Safety net: reveals any element that carries a reveal class in the markup
 * but is not driven by the Reveal component (same observer settings as the
 * original assets/js/main.js, so nothing can ever stay invisible).
 */
function RevealSweep() {
  const { pathname } = useLocation();

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".reveal:not([data-reveal-managed]), .reveal-left:not([data-reveal-managed]), .reveal-right:not([data-reveal-managed]), .reveal-scale:not([data-reveal-managed])"
    );
    if (!elements.length) return undefined;

    // Respect the user's reduced-motion preference by showing content immediately.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const delay = Number(entry.target.dataset.revealDelay || 0);
          entry.target.style.setProperty("--reveal-delay", `${delay}ms`);
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <RevealSweep />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
