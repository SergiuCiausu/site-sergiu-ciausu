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
        <div className={`${bodyW} flex flex-col sm:gap-16 mb-16`}>
          <div className="sm:w-3/5">
            <div>
              <Heading text="Crearea unui sistem simplu de conceput postări " />
            </div>
            <p className="mb-16 max-sm:px-4">
              Am aplicat principii de design grafic într-o manieră simplă, ușor de replicat pentru viitoarele echipe de elevi ce vor alcătuit CȘE
              CNMB. Contrast mare, atât al culorilor, cât și al dimensiunilor de font și texturilor folosite, design ușor de parcurs, cu o cale
              vizuală clară, instinctuală și apsect compact, dar curat, pentru comunicarea eficientă a informațiilor.
            </p>
          </div>
          <div className="w-full flex justify-between max-sm:px-4">
            <div>
              <p className="before-text mb-2">Before</p>
              <img src="/crearea-unui-sistem-simplu-de-conceput-postari-before.png" width={622} height={826} alt="profil cse cnmb before"></img>
            </div>
            <div>
              <p className="after-text mb-2">After</p>
              <img src="/despre-cse-cnmb.jpg" width={622} height={826} alt="profil cse cnmb after"></img>
            </div>
          </div>
        </div>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <div className={`${bodyW} flex flex-row-reverse max-sm:flex-col max-sm:items-center items-end sm:gap-16 mb-16`}>
          <div className="sm:w-3/5 max-sm:px-4">
            <HeadingRight text="Organizarea de evenimente pe baza intereselor elevilor" />
            <p className="mb-8 text-right">
              Am desfășurat o activitate simbolică, cu ocazia Valetine’s day, în care{" "}
              <strong>elevii din Mircea puteau să trimită scrisori prietenilor din liceele Ovidius și Mihai Eminescu</strong>, și viceversa.
            </p>
            <p className="mb-8 text-right">
              De asemenea, <strong>am organizat trei ediții ale seriei de ateliere „Combinând pasiunea și cariera”</strong>, unde am invitat
              specialiști din domeniile: medicină, drept, respectiv psihoterapie, pentru a le prezenta elevilor mirciști bazele domeniului, viața la
              facultate, oportunități de carieră pe viitor, etc.
            </p>
          </div>
          <div className="max-sm:px-4">
            <img
              src="/organizarea-de-evenimente-pe-baza-intereselor-elevilor.JPG"
              width={622}
              height={415}
              alt="secret feelings de valentine's day"
            ></img>
          </div>
        </div>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <div className={`${bodyW} flex max-sm:flex-col max-sm:items-center items-end sm:gap-16 mb-16`}>
          <div className="sm:w-3/5">
            <div>
              <Heading text="Imortalizarea evenimentelor desfășurate" />
            </div>
            <p className="mb-8 max-sm:px-4">
              <strong>Pe lângă cele două posturi pe care le-am ocupat, m-am oferit să fiu și fotograf</strong> în cadrul activităților pe care le
              organizam și să surprind momentele cheie ce rezumau cele întâmplate, cu scopul de a ne promova activitatea pe Instagram și de a atrage
              mai mulți elevi să participe la evenimentele noastre..
            </p>
          </div>
          <div className="max-sm:px-4">
            <img src="/imortalizarea-evenimentelor-desfasurate.JPG" width={620} height={413} alt="imortalizarea evenimentelor desfasurate"></img>
          </div>
        </div>
        <div className="mt-16">
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
