import FadeInOnLoad from "/components/FadeInOnLoad";
import Anchor from "/cv/components/Anchor";
import { bodyW } from "/variables/variables";
import React from "react";
import "./hero.css";
import { Link } from "react-router-dom";

const Hero = ({ h1, p, img, link }) => {
  return (
    <FadeInOnLoad>
      <section className={`${bodyW} flex max-sm:flex-col gap-8 max-sm:p-8`}>
        <div className="sm:w-3/5 max-sm:flex max-sm:flex-col max-sm:gap-4 max-sm:items-center">
          <div className="mb-2">
            <Anchor text="header" />
          </div>
          <h1 className="proiect-h1 sm:text-7xl max-sm:text-5xl max-sm:leading-[70px] max-sm:text-center">{h1}</h1>
          <p className="proiect-p sm:text-xl max-sm:text-sm max-sm:pb-2">{p}</p>
          <Link to={link}>
            <button className="sm:mt-10 proiect-btn">Descarcă studiu de caz</button>
          </Link>
          <p className="mt-2 proiect-btn-sidenote">sau vezi prezentarea de mai jos</p>
          <div className="sm:my-16">
            <Anchor text="header" type="end" />
          </div>
        </div>
        <div className="flex-50">
          <img src={img} width={752} height={501} alt={img.slice(1, img.length - 3)}></img>
        </div>
      </section>
      <div className="ascii-name sm:my-16 sm:mx-8 flex max-sm:flex-col max-sm:gap-2 max-sm:items-center justify-between max-sm:py-4 max-sm:w-screen text-xs">
        <span className="max-sm:text-center">01000011 01101001 01100001 01110101 01110011 01110101</span>
        <span className="max-sm:text-center">01010011 01100101 01110010 01100111 01101001 01110101</span>
        <span className="max-sm:text-center">01000001 01101110 01100100 01110010 01100101 01101001</span>
      </div>
    </FadeInOnLoad>
  );
};

export default Hero;
