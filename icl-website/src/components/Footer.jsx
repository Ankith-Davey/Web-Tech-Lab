// Footer.jsx
// Simple site-wide footer shown on every page.

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Imperial College London</h3>
          <p>
            27 Queensgate Terrace, London, United Kingdom – SW7 5PL
            <br />
            Phone: +44 20 7946 0958
            <br />
            Email: info@icl.ac.uk
          </p>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/academics/undergraduate">Academics</Link>
            </li>
            <li>
              <Link to="/admissions/eligibility">Admissions</Link>
            </li>
            <li>
              <Link to="/placements">Placements</Link>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>More</h4>
          <ul>
            <li>
              <Link to="/research">Research</Link>
            </li>
            <li>
              <Link to="/campus-life">Campus Life</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Imperial College London (mock
          site). Built for Web Technology Lab — an independent student
          project, not affiliated with or endorsed by the real institution.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
