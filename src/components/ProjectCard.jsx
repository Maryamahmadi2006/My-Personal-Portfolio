import { Link } from "react-router-dom";
import Reveal from "./Reveal.jsx";
import { asset } from "../asset.js";

/**
 * Project card used on the Home and Work pages. The card text, image and link
 * all come from src/data/projects.js — nothing is generated.
 */
export default function ProjectCard({ card, index = 0, hidden = false }) {
  return (
    <Reveal
      as="article"
      className="project-card"
      delay={index * 70}
      data-category={card.category}
      hidden={hidden}
    >
      <div className="project-info">
        <span>
          {card.title} <em>·</em> {card.label}
        </span>
        <span>
          {card.year} <em>→</em>
        </span>
      </div>
      <Link className="project-image" to={`/projects/${card.slug}`}>
        <img alt={card.alt} loading="lazy" src={asset(card.image)} />
        <span className="project-overlay">View project</span>
      </Link>
    </Reveal>
  );
}
