import React from "react";
import "/src/globals.css";
import NavAnchor from "./NavAnchor";
import { Link } from "react-router-dom";
import { bodyW } from "/variables/variables";
import FadeInOnLoad from "./FadeInOnLoad";

const Navbar = () => {
  const navLinks = ["Proiecte", "Studii", "CV", "Hobby-uri"];

  return (
    <FadeInOnLoad>
      <header>
        <nav className={`${bodyW} mx-auto mt-8 flex items-center max-sm:flex-col max-sm:items-center max-sm:gap-2 justify-between`}>
          <div className="flex gap-8 items-center max-sm:gap-3 max-sm:flex-col max-sm:items-center">
            <NavAnchor text="nav" />
            <p className="nav-logo">
              <Link to="/">SERGIU CIAUSU</Link>
            </p>
          </div>
          <ul className="flex gap-8 max-sm:hidden">
            {navLinks.map((link, index) => (
              <div key={index} className="nav-link-spacing">
                <Link to={`/${link.toLowerCase()}`}>
                  <li key={index} className="nav-link">
                    {link}
                  </li>
                </Link>
              </div>
            ))}
          </ul>
          <NavAnchor text="nav" type="end" />
        </nav>
      </header>
    </FadeInOnLoad>
  );
};

export default Navbar;
