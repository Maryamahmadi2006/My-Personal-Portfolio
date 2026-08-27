/**
 * Maryam Portfolio — site interactions
 * ------------------------------------
 * This file handles BEHAVIOR only:
 * - mobile navigation
 * - Work page filtering
 * - scroll-reveal animations
 * - About-page pointer motion
 * - FAQ accordion behavior
 *
 * Project content is intentionally kept in the HTML files.
 * Edit index.html or work.html when you want to change a project's
 * title, description, image, category, year, or link.
 */

/* ----------------------------------------------------------
   Navigation
   The same navigation works across every page.
---------------------------------------------------------- */
const navRight = document.querySelector(".navbar-right");
const menuToggle = document.querySelector(".menu-toggle");

if (menuToggle && navRight) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navRight.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navRight.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    });
  });
}

/* ----------------------------------------------------------
   Work filters
   Project cards already exist in work.html. JavaScript only
   shows/hides them; it does not create or edit their content.
---------------------------------------------------------- */
document.querySelectorAll("[data-filters] .filter").forEach((button) => {
  button.addEventListener("click", () => {
    document
      .querySelectorAll("[data-filters] .filter")
      .forEach((item) => item.classList.remove("active"));

    button.classList.add("active");

    const filter = button.dataset.filter;

    document
      .querySelectorAll("[data-all-projects] .project-card")
      .forEach((card) => {
        card.hidden =
          filter !== "all" && card.dataset.category !== filter;
      });
  });
});

/* ----------------------------------------------------------
   Scroll reveal + stagger
   IntersectionObserver reveals elements only when they enter
   the viewport, keeping the animations lightweight.
---------------------------------------------------------- */
const revealElements = document.querySelectorAll(
  ".reveal, .reveal-left, .reveal-right, .reveal-scale"
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const delay = Number(entry.target.dataset.revealDelay || 0);
      entry.target.style.setProperty("--reveal-delay", `${delay}ms`);
      entry.target.classList.add("visible");

      revealObserver.unobserve(entry.target);
    });
  },
  {
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px",
  }
);

revealElements.forEach((element) => revealObserver.observe(element));

// Respect the user's reduced-motion preference by showing content immediately.
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  revealElements.forEach((element) => element.classList.add("visible"));
}

/* ----------------------------------------------------------
   About-page visual motion
   A subtle pointer response gives the portrait a little depth
   without changing the page layout.
---------------------------------------------------------- */
const aboutVisual = document.querySelector(".about-visual");

if (
  aboutVisual &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  const resetVisual = () => {
    aboutVisual.style.setProperty("--pointer-x", "0px");
    aboutVisual.style.setProperty("--pointer-y", "0px");
  };

  window.addEventListener("pointermove", (event) => {
    const rect = aboutVisual.getBoundingClientRect();

    if (rect.bottom < 0 || rect.top > window.innerHeight) return;

    const x = (event.clientX - (rect.left + rect.width / 2)) / 22;
    const y = (event.clientY - (rect.top + rect.height / 2)) / 28;

    aboutVisual.style.setProperty(
      "--pointer-x",
      `${Math.max(-8, Math.min(8, x))}px`
    );
    aboutVisual.style.setProperty(
      "--pointer-y",
      `${Math.max(-8, Math.min(8, y))}px`
    );
  });

  aboutVisual.addEventListener("mouseleave", resetVisual);
}

/* ----------------------------------------------------------
   FAQ accessibility
   <details>/<summary> provides keyboard support. This helper
   simply keeps one answer open at a time.
---------------------------------------------------------- */
document.querySelectorAll("[data-faq] details").forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) return;

    document.querySelectorAll("[data-faq] details").forEach((other) => {
      if (other !== item) other.removeAttribute("open");
    });
  });
});
