import Faq from "../components/Faq.jsx";
import Reveal from "../components/Reveal.jsx";
import usePageMeta from "../hooks/usePageMeta.js";

const CONTACT_FAQ = [
  {
    q: "What happens after I send an inquiry?",
    a: "I'll review the project details and reply with next steps, availability and any questions.",
  },
  {
    q: "Do you work internationally?",
    a: "Yes. Projects are handled remotely and I work with clients across time zones.",
  },
  {
    q: "Can we start with a call?",
    a: "Absolutely. We can use a short discovery call to understand the project before discussing scope.",
  },
];

const PROJECT_TYPES = ["Website", "Landing page", "Redesign", "Development", "Other"];

export default function Contact() {
  usePageMeta(
    "Contact — Maryam",
    "Contact Maryam about a project — front-end development, web design, or WordPress."
  );

  // The form opens the visitor's mail app with a prefilled message, so no
  // backend or third-party service is needed.
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name");
    const email = data.get("email");
    const project = data.get("project");
    const message = data.get("message");

    const subject = `Project inquiry — ${project} from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nProject type: ${project}\n\nMessage:\n${message}`;

    window.location.href = `mailto:maryamahmadi22311@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <section className="page-hero shell">
        <Reveal className="eyebrow">• Contact</Reveal>
        <Reveal as="h1" className="page-title">
          Let's talk about what you're building.
        </Reveal>
        <Reveal as="p" className="page-intro">
          Have a project, question or collaboration in mind? Send a message and
          I'll get back to you.
        </Reveal>
      </section>

      <section className="section shell">
        <div className="contact-grid">
          <Reveal as="form" className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input name="name" placeholder="Your name" required type="text" />
            </label>
            <label>
              Email
              <input name="email" placeholder="you@example.com" required type="email" />
            </label>
            <label>
              Project type
              <select defaultValue="Website" name="project">
                {PROJECT_TYPES.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
            </label>
            <label>
              Message
              <textarea
                name="message"
                placeholder="Tell me a little about your project..."
                required
                rows="6"
              />
            </label>
            <button className="button button-dark" type="submit">
              Send inquiry
            </button>
          </Reveal>
          <Reveal as="aside" className="contact-aside">
            <div>
              <span className="eyebrow">Email</span>
              <a href="mailto:maryamahmadi22311@gmail.com">
                maryamahmadi22311@gmail.com
              </a>
            </div>
            <div>
              <span className="eyebrow">Location</span>
              <p>Available worldwide · Remote</p>
            </div>
            <div>
              <span className="eyebrow">Social</span>
              <div className="socials">
                <a
                  aria-label="Instagram"
                  href="https://www.instagram.com/maryamie.07?igsi=Zms4Mmp5bm42Z2Jo&utm_source=qr"
                >
                  Instagram
                </a>
                <a
                  aria-label="LinkedIn"
                  href="https://www.linkedin.com/in/maryam-ahmadi-787841336?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                >
                  LinkedIn
                </a>
                <a aria-label="X" href="https://x.com/maryamahmadi_07?s=11">
                  X
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section shell">
        <Reveal className="section-heading">
          <div className="eyebrow">• FAQ</div>
        </Reveal>
        <Faq items={CONTACT_FAQ} />
      </section>
    </>
  );
}
