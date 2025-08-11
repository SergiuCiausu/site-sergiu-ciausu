import React, { useState } from "react";
import { navLinks } from "../variables/variables";
import { Link } from "react-router-dom";

const NavMobileBtn = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <>
      <button
        className={`fixed p-4 rounded-full ${isMobileNavOpen ? "" : "hamburger-closed-bg"} cursor-pointer z-50 bottom-8 right-4 sm:hidden`}
        onClick={() => setIsMobileNavOpen((prev) => !prev)}
      >
        <img src={`${isMobileNavOpen ? "/close-icon.png" : "/hamburger-icon.png"}`} alt="hamburger icon" className="block sm:hidden w-5" />
      </button>
      {isMobileNavOpen ? (
        <section className="w-screen h-screen z-10 fixed top-0 left-0 pt-21 bg-black/75 flex flex-col items-center justify-between">
          <Link to="/" className="nav-logo">
            SERGIU CIAUSU
          </Link>
          <div className="flex flex-col flex-1 mb-32 items-center justify-center gap-4">
            {navLinks.map((link, index) => (
              <Link key={index} to={`/${link.toLowerCase()}`} className="nav-links-mobile">
                {link}
              </Link>
            ))}
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default NavMobileBtn;
