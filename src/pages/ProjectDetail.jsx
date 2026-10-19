import { Link, useParams } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import NotFound from "./NotFound.jsx";
import { projectDetails } from "../data/projects.js";
import { asset } from "../asset.js";
import usePageMeta from "../hooks/usePageMeta.js";

/**
 * Case-study page for one project. The slug comes from the URL
 * (/#/projects/dreamhome) and the content from src/data/projects.js.
 */
export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projectDetails[slug];

  usePageMeta(
    project ? `${project.title} — Maryam` : "Project not found — Maryam",
    project ? project.intro : undefined
  );

  if (!project) return <NotFound />;

  return (
    <>
      <section className="page-hero shell project-hero">
        <Reveal className="eyebrow">• {project.categoryLabel}</Reveal>
        <Reveal as="h1" className="page-title">
          {project.title}
        </Reveal>
        <Reveal as="p" className="page-intro">
          {project.intro}
        </Reveal>
        <Reveal className="project-meta">
          <div>
            <span>Project</span>
            <strong>{project.meta.project}</strong>
          </div>
          <div>
            <span>Year</span>
            <strong>{project.meta.year}</strong>
          </div>
          <div>
            <span>Role</span>
            <strong>{project.meta.role}</strong>
          </div>
          <div>
            <span>Website</span>
            <strong>
              <a
                href={project.meta.website.href}
                rel="noreferrer"
                target="_blank"
              >
                {project.meta.website.label}
              </a>
            </strong>
          </div>
        </Reveal>
      </section>

      <Reveal as="section" className="case-image shell">
        <img alt={project.coverAlt} src={asset(project.cover)} />
      </Reveal>

      <section className="section shell">
        <div className="case-grid">
          <Reveal>
            <div className="eyebrow">• Overview</div>
          </Reveal>
          <Reveal>
            <h2 className="display-small">{project.overviewTitle}</h2>
            <p className="body-large">{project.overviewBody}</p>
            <p className="muted">{project.overviewText}</p>
          </Reveal>
        </div>
      </section>

      <section className="section shell case-gallery">
        {project.gallery.map((image) => (
          <Reveal as="img" alt={image.alt} key={image.src} src={asset(image.src)} />
        ))}
      </section>

      <Reveal as="section" className="cta shell">
        <div>
          <div className="eyebrow">• Next project</div>
          <h2>Want to build something like this?</h2>
        </div>
        <Link className="button button-white" to="/contact">
          Start a project <span>→</span>
        </Link>
      </Reveal>
    </>
  );
}
