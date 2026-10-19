import { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { workProjects } from "../data/projects.js";
import usePageMeta from "../hooks/usePageMeta.js";

const FILTERS = [
  { value: "all", label: "All" },
  { value: "web", label: "Web design" },
  { value: "development", label: "Development" },
  { value: "branding", label: "Branding" },
];

export default function Work() {
  usePageMeta(
    "Work — Maryam",
    "Selected web design and front-end development projects by Maryam."
  );
  const [filter, setFilter] = useState("all");

  return (
    <>
      <section className="page-hero shell">
        <div className="eyebrow reveal">• Selected work</div>
        <h1 className="page-title reveal">
          A collection of web projects built while learning, experimenting, and
          growing.
        </h1>
        <p className="page-intro reveal">
          Selected educational, personal, collaborative, and WordPress projects
          from my front-end development journey.
        </p>
      </section>

      <section className="section shell">
        <Reveal className="filters">
          {FILTERS.map((item) => (
            <button
              className={`filter${filter === item.value ? " active" : ""}`}
              key={item.value}
              type="button"
              onClick={() => setFilter(item.value)}
            >
              {item.label}
            </button>
          ))}
        </Reveal>
        <div className="project-grid project-grid-wide">
          {workProjects.map((card, index) => (
            <ProjectCard
              card={card}
              hidden={filter !== "all" && card.category !== filter}
              index={index}
              key={`${card.slug}-${card.title}`}
            />
          ))}
        </div>
      </section>

      <section className="cta shell reveal">
        <div>
          <div className="eyebrow">• Next project</div>
          <h2>Could this be yours?</h2>
          <p>I'm currently available for selected freelance projects.</p>
        </div>
        <Link className="button button-white" to="/contact">
          Get in touch <span>→</span>
        </Link>
      </section>
    </>
  );
}
