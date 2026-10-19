import { useEffect } from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import { asset } from "../asset.js";
import usePageMeta from "../hooks/usePageMeta.js";

const EDUCATION_TIMELINE = [
  {
    number: "01",
    title: "Online High School",
    strong: "Secondary Education · Completed",
    text: "Completed my secondary education through an online school program.",
  },
  {
    number: "02",
    title: "Code to Inspire",
    strong: "Web Basics & CMS Builder · 6–7 Month Program · Grade B",
    text: "Completed technical training focused on web design, website development, and CMS-related skills.",
  },
  {
    number: "03",
    title: "Nobel Learning PBC",
    strong: "Leadership & Global Promotion",
    text: "Completed a long-term learning program focused on leadership, promotion, communication, teamwork, and professional development.",
  },
  {
    number: "04",
    title: "eCornell / Mexoxo",
    strong: "Women Take the Lead",
    text: "Completed self-paced learning focused on leadership, entrepreneurship, career development, time management, and digital marketing.",
  },
  {
    number: "05",
    title: "ADB Institute",
    strong: "Cybersecurity Training",
    text: "Completed additional learning focused on cybersecurity and digital skills.",
  },
  {
    number: "06",
    title: "Netlinks",
    strong: "Front-End Development Program · 2026 – Present",
    text: "Currently developing practical skills in HTML, CSS, JavaScript, Bootstrap, responsive web design, WordPress, Git, GitHub, and real-world web projects.",
  },
];

const ADDITIONAL_LEARNING = [
  {
    number: "01",
    title: "Digital Marketing",
    text: "Participated in learning sessions covering digital marketing, online communication, digital presence, and promotion.",
  },
  {
    number: "02",
    title: "Entrepreneurship & Professional Development",
    text: "Participated in additional learning activities focused on entrepreneurship, career development, communication, and professional skills.",
  },
  {
    number: "03",
    title: "Continuous Self-Learning",
    text: "Continuously developing technical and creative skills through independent study, practice, and hands-on projects.",
  },
  {
    number: "04",
    title: "Practical Web Projects",
    text: "Turning training and self-learning into practical projects to strengthen real-world development skills.",
  },
];

const CERTIFICATES = [
  {
    image: "assets/images/certificates/cti.png",
    alt: "Code to Inspire certificate",
    title: "Code to Inspire",
    text: "Web Basics & CMS Builder · Grade B",
  },
  {
    image: "assets/images/certificates/nobel.jpg",
    alt: "Nobel Learning PBC certificate",
    title: "Nobel Learning PBC",
    text: "Leadership & Global Promotion",
  },
  {
    image: "assets/images/certificates/eCornell.jpg",
    alt: "eCornell / Mexoxo certificate",
    title: "eCornell / Mexoxo",
    text: "Women Take the Lead",
  },
  {
    image: "assets/images/certificates/abd.jpg",
    alt: "ADB Institute certificate",
    title: "ADB Institute",
    text: "Cybersecurity Training",
  },
  {
    image: "assets/images/certificates/netlinks.jpg",
    alt: "Netlinks certificate",
    title: "Netlinks",
    text: "Front-End Development Program · 2026 – Present and continuing",
  },
  {
    image: "assets/images/certificates/women.jpg",
    alt: "Women Ascension certificate",
    title: "Women Ascension",
    text: "Entrepreneurship & Professional Development · Completed",
  },
];

export default function Education() {
  usePageMeta("Education — Maryam", "Maryam — Education & Learning");

  // The Education page gets extra breathing room from page-level CSS rules.
  useEffect(() => {
    document.body.classList.add("page-education");
    return () => document.body.classList.remove("page-education");
  }, []);

  return (
    <>
      <section className="page-hero shell">
        <div className="eyebrow reveal">• Education & Learning</div>
        <h1 className="page-title reveal">
          My education has been a journey of learning, experimenting, and
          building.
        </h1>
        <p className="page-intro reveal">
          My learning journey combines formal education, technical training,
          leadership programs, and continuous self-learning.
        </p>
      </section>

      <section className="section shell">
        <div className="section-heading reveal">
          <div className="eyebrow">• Education timeline</div>
        </div>
        <div className="timeline">
          {EDUCATION_TIMELINE.map((item) => (
            <Reveal as="article" className="timeline-row" key={item.title}>
              <span>{item.number}</span>
              <div>
                <h3>{item.title}</h3>
                <p>
                  <strong>{item.strong}</strong>
                </p>
                <p>{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading reveal">
          <div className="eyebrow">• Additional learning</div>
        </div>
        <div className="capability-grid">
          {ADDITIONAL_LEARNING.map((item) => (
            <Reveal as="article" className="capability" key={item.title}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading reveal">
          <div className="eyebrow">• Certificates & programs</div>
        </div>
        <div className="cert-grid">
          {CERTIFICATES.map((certificate) => (
            <Reveal
              as="a"
              className="cert-card"
              href={asset(certificate.image)}
              key={certificate.title}
              rel="noopener"
              target="_blank"
            >
              <div className="cert-image">
                <img alt={certificate.alt} loading="lazy" src={asset(certificate.image)} />
                <span className="cert-overlay">View certificate ↗</span>
              </div>
              <div className="cert-info">
                <h3>{certificate.title}</h3>
                <p>{certificate.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="cta shell reveal">
        <div>
          <div className="eyebrow">• Keep learning</div>
          <h2>Learning never really stops.</h2>
          <p>
            I'm continuing to grow through technology, practical projects, and
            new opportunities.
          </p>
        </div>
        <Link className="button button-white" to="/contact">
          Let's Talk <span>→</span>
        </Link>
      </section>
    </>
  );
}
