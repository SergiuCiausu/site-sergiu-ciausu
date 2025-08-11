import Anchor from "/components/Anchor";
import FadeInOnScroll from "/components/FadeInOnScroll";
import H3 from "/components/H3";
import Heading from "/cv/components/Heading";
import { bodyW } from "/variables/variables";
import React from "react";
import HeadingRight from "/cv/components/HeadingRight";

const ContributiileMele = () => {
  return (
    <section>
      <FadeInOnScroll>
        <div className="mt-16">
          <Anchor text="section" />
        </div>
        <div>
          <H3 text="Contribuțiile mele în cadrul proiectului" />
        </div>
        <div className={`${bodyW} flex max-sm:flex-col sm:gap-16 mb-16 justify-between`}>
          <div className="sm:w-3/5">
            <div>
              <Heading text="Crearea unui sistem simplu de conceput postări " />
            </div>
            <p className="mb-16 max-sm:mb-8 max-sm:px-4">
              Am aplicat principii de design grafic într-o manieră simplă, ușor de replicat pentru echipa de marketing ZIUA de Constanța. Contrast
              mare, atât al culorilor, cât și al dimensiunilor de font și texturilor folosite, design ușor de parcurs, cu o cale vizuală clară,
              instinctuală și apsect compact, dar curat, pentru comunicarea eficientă a informațiilor.
            </p>
          </div>
          <div className="max-sm:px-4">
            <img
              src="/crearea-unui-sistem-simplu-de-conceput-postari.jpg"
              width={360}
              height={450}
              alt="crearea unui sistem simplu de conceput postari"
            ></img>
          </div>
        </div>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <div className={`${bodyW} flex flex-row-reverse max-sm:flex-col items-center sm:gap-16 mb-16`}>
          <div className="sm:w-3/5">
            <HeadingRight text="Atragerea a mii de like-uri prin reclame" />
            <p className="mb-8 text-right max-sm:px-4">
              Am creat design-ul unor reclame care s-au dovedit a fi de impact, care au atras mii de cititori pe site-ul ZIUA de Constanța și am
              contribuit la creșterea veniturilor publicației.
            </p>
            <p className="mb-8 text-right">Temele reclamelor se învârteau în jurul unor idealuri, evocate frecvent în marketing.</p>
          </div>
          <div className="max-sm:px-4">
            <img src="/reclama facebook trafic site 5.2.jpg" width={493} height={493} alt="atragerea a mii de like-uri prin reclame"></img>
          </div>
        </div>
        <div>
          <Anchor text="section" type="end" />
        </div>
        <div className="mt-16">
          <Anchor text="main" type="end" />
        </div>
      </FadeInOnScroll>
    </section>
  );
};

export default ContributiileMele;
