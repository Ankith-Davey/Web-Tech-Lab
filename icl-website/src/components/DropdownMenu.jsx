// DropdownMenu.jsx
// Reusable dropdown used inside the Navbar for About Us, Academics,
// Admissions and Research. Uses useState to track whether the menu
// is open, and closes itself again once a link is clicked.

import { useState } from "react";
import { NavLink } from "react-router-dom";

function DropdownMenu({ label, links }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <li
      className="dropdown"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        {label} <span className="dropdown-arrow">{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <ul className="dropdown-menu">
          {links.map((link) => (
            <li key={link.path}>
              <NavLink to={link.path} onClick={closeDropdown}>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default DropdownMenu;
