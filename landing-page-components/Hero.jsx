import React from "react";
import { bodyW } from "../variables/variables";
import Anchor from "../components/Anchor";
import { Typewriter } from "react-simple-typewriter";
import FadeInOnLoad from "/components/FadeInOnLoad";

const Hero = ({ elementId }) => {
  const cuvinteEvidentiator = ["programator", "designer web", "designer grafic", "editor video", "iubitor de fitness", "fotograf"];

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
        <div className={`${bodyW} flex flex-col gap-8 max-sm:gap-2`}>
          <Anchor text="header" />
          <h1 className="titlu text-7xl text-center max-sm:text-4xl max-sm:leading-[50px]">
            <div className="flex flex-col">
              <span className="max-sm:mb-4">
                Eu sunt <strong>Sergiu</strong> și sunt
              </span>
              <span className="evidentiator-titlu text-8xl font-bold leading-[120px] sm:ml-16 max-sm:text-5xl max-sm:leading-[60px]">
                <Typewriter words={cuvinteEvidentiator} loop={true} cursor cursorStyle="_" typeSpeed={70} deleteSpeed={50} delaySpeed={2000} />
              </span>
            </div>
          </h1>
          <p className="p-subtitlu sm:w-[835px] text-sm text-center sm:text-xl max-sm:p-4 max-sm:text-left">
            Am 19 ani, am absolvit Colegiul Național „Mircea cel Bătrân” din Constanța și acesta este portofoliul meu de web design & development!
            Păstrez cât mai scurtă descrierea, prefer să-mi las faptele să vorbească :{`>`}
          </p>
          <button className="hero-cta-btn" onClick={ctaBtnClick}>
            Vezi portofoliu
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
