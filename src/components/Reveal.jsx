import { forwardRef, useEffect, useRef } from "react";

const VARIANTS = {
  reveal: "reveal",
  left: "reveal reveal-left",
  right: "reveal reveal-right",
  scale: "reveal reveal-scale",
  scaleOnly: "reveal-scale",
};

/**
 * Scroll-reveal wrapper — the React version of the IntersectionObserver logic
 * from the original assets/js/main.js. Elements fade/slide in the first time
 * they enter the viewport, with an optional stagger delay, and everything is
 * shown immediately for users who prefer reduced motion.
 */
const Reveal = forwardRef(function Reveal(
  {
    as: Tag = "div",
    variant = "reveal",
    delay = 0,
    className = "",
    children,
    ...rest
  },
  forwardedRef
) {
  const localRef = useRef(null);

  useEffect(() => {
    const element = localRef.current;
    if (!element) return undefined;

    const show = () => {
      element.style.setProperty("--reveal-delay", `${delay}ms`);
      element.classList.add("visible");
    };

    // Respect the user's reduced-motion preference by showing content immediately.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      show();
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          show();
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [delay]);

  const setRefs = (node) => {
    localRef.current = node;
    if (typeof forwardedRef === "function") forwardedRef(node);
    else if (forwardedRef) forwardedRef.current = node;
  };

  const classes = [VARIANTS[variant] || variant, className]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag ref={setRefs} className={classes} {...rest}>
      {children}
    </Tag>
  );
});

export default Reveal;
