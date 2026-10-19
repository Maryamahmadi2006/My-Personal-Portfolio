import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta.js";

export default function NotFound() {
  usePageMeta(
    "Page not found — Maryam",
    "The page you are looking for does not exist."
  );

  return (
    <section className="page-hero shell">
      <div className="eyebrow reveal">• 404</div>
      <h1 className="page-title reveal">This page doesn't exist.</h1>
      <p className="page-intro reveal">
        The page you're looking for may have moved, or the link is outdated.
      </p>
      <p className="page-intro reveal">
        <Link className="text-link" to="/">
          Back to the homepage <span>→</span>
        </Link>
      </p>
    </section>
  );
}
