import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import Faq from "../components/Faq.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { homeProjects } from "../data/projects.js";
import { asset } from "../asset.js";
import usePageMeta from "../hooks/usePageMeta.js";

const SERVICES = [
  {
    title: "Web Design",
    text: "Creating clean, responsive, and meaningful website interfaces.",
  },
  {
    title: "Front-End Development",
    text: "Building responsive websites using HTML, CSS, JavaScript, React, and Bootstrap.",
  },
  {
    title: "UI Design",
    text: "Designing simple and practical interfaces using tools such as Figma and Framer.",
  },
];

const HOME_FAQ = [
  {
    q: "What technologies do I work with?",
    a: "HTML, CSS, JavaScript, React, Bootstrap, WordPress, Git, GitHub, Figma, and Framer.",
  },
  {
    q: "What am I currently learning?",
    a: "I'm currently continuing my Front-End Development journey through the Netlinks training program and practical web projects.",
  },
  {
    q: "What kind of projects do I work on?",
    a: "I work on web design, front-end development, WordPress websites, educational projects, and personal projects.",
  },
  {
    q: "Are all my projects live?",
    a: "Not all of them. Some of my WordPress projects are local or private, so I present them through screenshots and project case studies.",
  },
];

export default function Home() {
  usePageMeta(
    "Maryam — Front-End Developer & Web Designer",
    "Maryam — Front-End Developer & Web Designer creating meaningful digital experiences."
  );

  return (
    <>
      <section className="hero shell">
        <Reveal className="eyebrow">
          <span className="status-dot"> </span>
          Available for work
        </Reveal>
        <Reveal as="h1" className="hero-title">
          I'm Maryam, a Front-End Developer & Web Designer.
        </Reveal>
        <Reveal as="p" className="hero-copy">
          I'm passionate about technology, web design, and creating meaningful
          digital experiences. I'm continuously developing my skills through
          hands-on training, real projects, and independent learning.
        </Reveal>
        <Reveal className="hero-actions">
          <Link className="button button-dark" to="/work">
            View selected work <span>→</span>
          </Link>
          <Link className="button button-light" to="/contact">
            Let's talk <span>→</span>
          </Link>
        </Reveal>
      </section>

      <section className="section shell" id="work">
        <Reveal className="section-heading">
          <div className="eyebrow">• Selected work</div>
          <Link className="text-link" to="/work">
            View all work <span>→</span>
          </Link>
        </Reveal>
        <div className="project-grid">
          {homeProjects.map((card, index) => (
            <ProjectCard card={card} index={index} key={card.slug} />
          ))}
        </div>
      </section>

      <section className="section shell">
        <div className="about-preview">
          <Reveal className="section-heading">
            <div className="eyebrow">• About me</div>
          </Reveal>
          <div className="about-preview-grid">
            <Reveal className="about-copy" variant="left">
              <h2 className="display-small">Hello! I'm Maryam,</h2>
              <p className="muted">
                I'm a Front-End Developer and Web Designer from Afghanistan. My
                journey in technology started with web design and gradually grew
                into a deeper interest in front-end development. I enjoy
                learning through practice and building real projects.
              </p>
              <Link className="text-link" to="/about">
                More about me <span>→</span>
              </Link>
            </Reveal>
            <Reveal className="portrait about-visual" variant="right">
              <img alt="Portrait of Maryam Ahmadi" src={asset("assets/images/my pic.jpg")} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section shell">
        <Reveal className="section-heading">
          <div className="eyebrow">• Services</div>
        </Reveal>
        <div className="service-list stagger">
          {SERVICES.map((service, index) => (
            <Reveal as="article" className="service" key={service.title}>
              <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
              <span className="service-number">{"0" + (index + 1)}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section shell">
        <Reveal className="section-heading">
          <div className="eyebrow">• Testimonials</div>
        </Reveal>
        <Reveal className="testimonial-feature" delay={120} variant="scaleOnly">
          <div className="testimonial-mark">“</div>
          <div className="testimonial-body">
            <div className="eyebrow">• A note from my journey</div>
            <p>
              I believe the best way to learn technology is by building,
              experimenting, making mistakes, and continuously improving.
            </p>
          </div>
          <div className="testimonial-meta">
            <strong>Maryam Ahmadi</strong>
            <span>Front-End Developer & Web Designer</span>
          </div>
        </Reveal>
      </section>

      <section className="section shell">
        <Reveal className="section-heading">
          <div className="eyebrow">• FAQ</div>
        </Reveal>
        <Faq items={HOME_FAQ} />
      </section>

      <Reveal as="section" className="cta shell">
        <div>
          <div className="eyebrow">• Have a project in mind?</div>
          <h2>Let's bring your vision to life.</h2>
          <p>
            Tell me what you're building, where you're stuck and what a
            successful outcome looks like.
          </p>
        </div>
        <Link className="button button-white" to="/contact">
          Start a conversation <span>→</span>
        </Link>
      </Reveal>
    </>
  );
}
