// Navbar.jsx
// Main site navigation. Demonstrates useState (mobile menu toggle),
// event handling (onClick), React Router NavLink, and reuse of the
// DropdownMenu component with different props for each menu.

import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";

const aboutLinks = [
  { name: "Vision & Mission", path: "/about/vision" },
  { name: "Leadership", path: "/about/leadership" },
];

const academicsLinks = [
  { name: "Undergraduate", path: "/academics/undergraduate" },
  { name: "Postgraduate & PhD", path: "/academics/postgraduate" },
];

const admissionsLinks = [
  { name: "Eligibility & Dates", path: "/admissions/eligibility" },
  { name: "Application Process", path: "/admissions/application" },
];

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand" onClick={() => setIsMobileMenuOpen(false)}>
          <span className="navbar-logo">ICL</span>
          <span className="navbar-brand-text">
            Imperial College London
          </span>
        </Link>

        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>

        <ul className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
          <li>
            <NavLink to="/" end onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </NavLink>
          </li>
          <DropdownMenu label="About Us" links={aboutLinks} />
          <DropdownMenu label="Academics" links={academicsLinks} />
          <DropdownMenu label="Admissions" links={admissionsLinks} />
          <li>
            <NavLink to="/research" onClick={() => setIsMobileMenuOpen(false)}>
              Research
            </NavLink>
          </li>
          <li>
            <NavLink to="/campus-life" onClick={() => setIsMobileMenuOpen(false)}>
              Campus Life
            </NavLink>
          </li>
          <li>
            <NavLink to="/placements" onClick={() => setIsMobileMenuOpen(false)}>
              Placements
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
