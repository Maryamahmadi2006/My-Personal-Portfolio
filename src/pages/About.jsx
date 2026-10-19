import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import { asset } from "../asset.js";
import usePageMeta from "../hooks/usePageMeta.js";

const EXPERIENCE = [
  {
    period: "2026 — Present",
    title: "Front-End Development Program",
    text: "Hands-on training focused on front-end development, web design, JavaScript, responsive interfaces, collaborative projects, freelancing, and professional skills.",
  },
  {
    period: "6–7 Month Program",
    title: "Web Basics & CMS Builder",
    text: "Completed technical training focused on web design, website development, and CMS-related skills.",
  },
  {
    period: "Long-term Program",
    title: "Leadership & Global Promotion",
    text: "Completed a long-term learning program focused on leadership, promotion, communication, teamwork, and professional development.",
  },
];

const CAPABILITIES = [
  {
    number: "01",
    title: "Strategy",
    text: "Goals, audience, structure and content direction.",
  },
  {
    number: "02",
    title: "Visual Design",
    text: "Typography, layout, color and visual systems.",
  },
  {
    number: "03",
    title: "Development",
    text: "Responsive, accessible and performant front-end builds.",
  },
  {
    number: "04",
    title: "Launch",
    text: "QA, polish, SEO foundations and handoff.",
  },
];

export default function About() {
  usePageMeta(
    "About — Maryam",
    "About Maryam — Front-End Developer and Web Designer."
  );
  const visualRef = useRef(null);

  // A subtle pointer response gives the portrait a little depth, exactly like
  // the original site (disabled for reduced-motion users).
  useEffect(() => {
    const visual = visualRef.current;
    if (!visual) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const onPointerMove = (event) => {
      const rect = visual.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;

      const x = (event.clientX - (rect.left + rect.width / 2)) / 22;
      const y = (event.clientY - (rect.top + rect.height / 2)) / 28;

      visual.style.setProperty(
        "--pointer-x",
        `${Math.max(-8, Math.min(8, x))}px`
      );
      visual.style.setProperty(
        "--pointer-y",
        `${Math.max(-8, Math.min(8, y))}px`
      );
    };

    const onPointerLeave = () => {
      visual.style.setProperty("--pointer-x", "0px");
      visual.style.setProperty("--pointer-y", "0px");
    };

    window.addEventListener("pointermove", onPointerMove);
    visual.addEventListener("mouseleave", onPointerLeave);
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      visual.removeEventListener("mouseleave", onPointerLeave);
    };
  }, []);

  return (
    <>
      <section className="page-hero shell">
        <Reveal className="eyebrow">• About me</Reveal>
        <Reveal as="h1" className="page-title" variant="scale">
          I'm a Front-End Developer & Web Designer building my path through
          technology, design, and continuous learning.
        </Reveal>
      </section>

      <section className="section shell">
        <div className="about-page-grid">
          <Reveal
            className="portrait portrait-large about-visual"
            variant="left"
            ref={visualRef}
          >
            <img alt="Portrait of Maryam Ahmadi" src={asset("assets/images/my pic.jpg")} />
          </Reveal>
          <Reveal className="about-copy" variant="right">
            <h2 className="display-small">Hello! I'm Maryam,</h2>
            <p className="body-large">
              I'm Maryam Ahmadi, a Front-End Developer and Web Designer from
              Afghanistan. My journey in technology began with web design and
              gradually developed into a deeper interest in front-end
              development.
            </p>
            <p className="muted">
              I enjoy learning by building, experimenting with new ideas, and
              turning what I learn into practical projects. I'm currently
              continuing my Front-End Development journey while developing my
              technical and creative skills.
            </p>
            <a className="button button-dark" href={asset("Maryam_Ahmadi_CV.pdf")}>
              Download CV <span>↓</span>
            </a>
          </Reveal>
        </div>
      </section>

      <section className="section shell">
        <Reveal className="section-heading">
          <div className="eyebrow">• Experience</div>
        </Reveal>
        <div className="timeline">
          {EXPERIENCE.map((item, index) => (
            <Reveal as="article" className="timeline-row" delay={index * 90} key={item.title}>
              <span>{item.period}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section shell">
        <Reveal className="section-heading">
          <div className="eyebrow">• Capabilities</div>
        </Reveal>
        <div className="capability-grid">
          {CAPABILITIES.map((item, index) => (
            <Reveal as="div" className="capability" delay={index * 90} key={item.title}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal as="section" className="cta shell">
        <div>
          <div className="eyebrow">• Let's work together</div>
          <h2>Good work starts with a good conversation.</h2>
        </div>
        <Link className="button button-white" to="/contact">
          Contact me <span>→</span>
        </Link>
      </Reveal>
    </>
  );
}
