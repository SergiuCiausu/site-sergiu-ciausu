import Anchor from "/components/Anchor";
import FadeInOnScroll from "/components/FadeInOnScroll";
import H3 from "/components/H3";
import React from "react";
import { bodyW } from "/variables/variables";

const Sarcini = () => {
  const sarcini = [
    {
      img: "/crearea-unei-marci-proprii-usor-de-folosit-icon.png",
      denumire: "Crearea unei mărci proprii ușor de folosit",
    },
    {
      img: "/lansarea-unui-site-al-revistei-icon.png",
      denumire: "Lansarea unui site al revistei",
    },
    {
      img: "/imbunatatirea-aspectului-revistei-icon.png",
      denumire: "Îmbunătățirea aspectului revistei",
    },
    {
      img: "/postatul-pe-retelele-sociale.png",
      denumire: "Postatul pe rețelele sociale",
    },
  ];

  return (
    <FadeInOnScroll>
      <section>
        <div className="mt-16">
          <Anchor text="section" />
        </div>
        <H3 text="Sarcini de lucru" />
        <div className={`${bodyW} flex max-sm:flex-col max-sm:items-center max-sm:gap-16 justify-between`}>
          {sarcini.map((sarcina, index) => (
            <div key={index} className="w-[301px] flex flex-col items-center justify-between gap-4">
              <img src={sarcina.img} width={49} height={49} alt={sarcina.img.slice(1, sarcina.img.length - 3)}></img>
              <h5 className="text-center">{sarcina.denumire}</h5>
            </div>
          ))}
        </div>
        <div className="sm:mt-16">
          <Anchor text="section" type="end" />
        </div>
      </section>
    </FadeInOnScroll>
  );
};

export default Sarcini;
