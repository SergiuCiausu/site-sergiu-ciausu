import React from "react";
import { bodyW } from "/variables/variables";
import Anchor from "/components/Anchor";
import FadeInOnLoad from "/components/FadeInOnLoad";
import { Link } from "react-router-dom";

const Hero = ({ htext, evtext, ptext, btext, elementId, link }) => {
  const ctaBtnClick = () => {
    const target = document.getElementById(elementId);

    const rect = target.getBoundingClientRect();

    window.scrollTo({
      top: rect.top + window.pageYOffset - 150,
      behavior: "smooth",
    });
  };

  return (
    <FadeInOnLoad>
      <section>
        <div className={`${bodyW} flex flex-col sm:items-center gap-8 max-sm:gap-4`}>
          <Anchor text="header" />
          <h1 className="titlu text-7xl text-center max-sm:text-5xl sm:leading-[90px]">
            <div className="flex max-sm:flex-col sm:gap-4">
              <span className="evidentiator-titlu max-sm:mb-4">{evtext}</span>
              <span>
                <strong>{htext}</strong>
              </span>
            </div>
          </h1>
          <p className="p-subtitlu sm:w-[835px] text-sm text-center sm:text-xl max-sm:p-4 max-sm:text-left">{ptext}</p>
          <button className="hero-cta-btn" onClick={ctaBtnClick}>
            {link ? (
              <Link to={link} target="_blank">
                {btext}
              </Link>
            ) : (
              btext
            )}
          </button>
          <Anchor text="header" type="end" />
        </div>
        <div className="ascii-name sm:my-16 sm:mx-8 flex max-sm:flex-col max-sm:gap-2 max-sm:items-center justify-between max-sm:py-4 max-sm:w-screen text-xs">
          <span className="max-sm:text-center">01000011 01101001 01100001 01110101 01110011 01110101</span>
          <span className="max-sm:text-center">01010011 01100101 01110010 01100111 01101001 01110101</span>
          <span className="max-sm:text-center">01000001 01101110 01100100 01110010 01100101 01101001</span>
        </div>
      </section>
    </FadeInOnLoad>
  );
};

export default Hero;
