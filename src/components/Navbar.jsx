import { useState } from "react";
import { Link } from "react-router-dom";
import { asset } from "../asset.js";

const NAV_LINKS = [
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/education", label: "Education" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="navbar">
      <Link className="logo" to="/">
        Maryam
      </Link>
      <div className={`navbar-right${open ? " open" : ""}`}>
        <nav aria-label="Main navigation" className="nav-links">
          {NAV_LINKS.map((link) => (
            <Link key={link.to} to={link.to} onClick={close}>
              {link.label}
            </Link>
          ))}
        </nav>
        <a className="cv-button" href={asset("Maryam_Ahmadi_CV.pdf")}>
          Get CV <span>→</span>
        </a>
        <button
          aria-expanded={open}
          aria-label={open ? "Close navigation" : "Open navigation"}
          className="menu-toggle"
          type="button"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
