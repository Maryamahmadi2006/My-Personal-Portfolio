import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import usePageMeta from "../hooks/usePageMeta.js";

export default function NotFound() {
  usePageMeta(
    "Page not found — Maryam",
    "The page you are looking for does not exist."
  );

  return (
    <section className="page-hero shell">
      <Reveal className="eyebrow">• 404</Reveal>
      <Reveal as="h1" className="page-title">
        This page doesn't exist.
      </Reveal>
      <Reveal as="p" className="page-intro">
        The page you're looking for may have moved, or the link is outdated.
      </Reveal>
      <Reveal as="p" className="page-intro">
        <Link className="text-link" to="/">
          Back to the homepage <span>→</span>
        </Link>
      </Reveal>
    </section>
  );
}
