import Anchor from "/components/Anchor";
import FadeInOnScroll from "/components/FadeInOnScroll";
import H3 from "/components/H3";
import React from "react";
import { bodyW } from "/variables/variables";

const RezultateleObtinute = () => {
  const rezultate = [
    {
      img: "/citiri-rezultate-obtinute-icon.png",
      nume: "15.000+ citiri",
    },
    {
      img: "/articole-publicate-rezultate-obtinute-icon.png",
      nume: "200+ articole publicate",
    },
    {
      img: "/like-rezultate-obtinute-icon.png",
      nume: "1500+ like-uri pe social media",
    },
    {
      img: "/nr-1-rezultate-obtinute-icon.png",
      nume: "#1 în topul revistelor din Dobrogea",
    },
  ];

  return (
    <FadeInOnScroll>
      <section>
        <div className="mt-16">
          <Anchor text="section" />
        </div>
        <H3 text="Rezultatele obținute" />
        <div className={`${bodyW} flex max-sm:flex-col max-sm:items-center max-sm:gap-16 justify-between`}>
          {rezultate.map((rezultat, index) => (
            <div key={index} className="w-[301px] flex flex-col justify-end items-center gap-4">
              <img src={rezultat.img} width={49} height={49} alt={rezultat.img.slice(1, rezultat.img.length - 3)}></img>
              <h5 className="text-center">{rezultat.nume}</h5>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <Anchor text="section" type="end" />
        </div>
        <div className="mt-16">
          <Anchor text="main" type="end" />
        </div>
      </section>
    </FadeInOnScroll>
  );
};

export default RezultateleObtinute;
