import React from "react";
import FadeInOnScroll from "../components/FadeInOnScroll";
import Anchor from "../components/Anchor";
import H3 from "../components/H3";
import { bodyW } from "../variables/variables";
import "/landing-page-components/proiecte.css";
import { Link } from "react-router-dom";

const ExperienteAnterioare = () => {
  const experiente = [
    {
      titlu: "Zări Alb Astre",
      descriere:
        "Zări Alb Astre este revista Colegiului Național „Mircea cel Bătrân”, unde am ocupat mai multe funcții de conducere. Este singura revistă de liceu din Dobrogea cu propriul site!",
      imagine: "/zari-alb-astre-banner.png",
      link: "/zari-alb-astre",
    },
    {
      titlu: "Consiliul Școlar al Elevilor",
      descriere:
        "Consiliul Școlar al Elevilor CNMB este o structură de reprezentare a elevilor care are grijă ca drepturile acestora să fie respectate și dirijează diverse activități pentru extinderea orizonturilor elevilor.",
      imagine: "/consiliul-scolar-al-elevilor-banner.png",
      link: "/consiliul-scolar-al-elevilor",
    },
    {
      titlu: "Consiliul Județean al Elevilor",
      descriere: "Consiliul Județean al Elevilor Constanța este structura ce se îngrijește de buna funcționare a Consiliilor Școlare ale Elevilor.",
      imagine: "/consiliul-judetean-al-elevilor-banner.png",
      link: "/consiliul-judetean-al-elevilor",
    },
    {
      titlu: "ZIUA de Constanța",
      descriere:
        "ZIUA de Constanța publică știri predominant de pe teritoriul Dobrogei.Am lucrat ca redactor, am creat zeci de reclame pe Facebook și Instagram și am făcut și un pachet de branding.",
      imagine: "/ziua-de-constanta-banner.png",
      link: "/ziua-de-constanta",
    },
  ];

  return (
    <FadeInOnScroll>
      <section className="my-24 max-sm:my-4">
        <div className="sm:my-16">
          <Anchor text="section" />
        </div>
        <H3 text="Experiențe anterioare" />
        <div className={`${bodyW} flex max-sm:flex-col gap-5 p-8 max-sm:p-8 max-sm:gap-12`}>
          {experiente.map((experienta, index) => (
            <Link key={index} to={experienta.link} className="flex p-8 sm:flex-25 flex-col justify-between max-sm:gap-2 max-sm:items-center">
              <img
                src={experienta.imagine}
                width={301}
                height={210}
                alt={experienta.imagine.slice(1, experienta.imagine.length - 3)}
                className="mb-6"
              ></img>
              <h5 className="max-sm:text-center">{experienta.titlu}</h5>
              <p className="descriere max-sm:text-center max-sm:max-w-[301px]">{experienta.descriere}</p>
              <button className="proiect-btn mt-4 max-sm:mt-2">Vezi experiență</button>
            </Link>
          ))}
        </div>
      </section>
      <Anchor text="section" type="end" />
    </FadeInOnScroll>
  );
};

export default ExperienteAnterioare;
