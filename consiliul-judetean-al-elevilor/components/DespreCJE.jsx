import Anchor from "/components/Anchor";
import FadeInOnScroll from "/components/FadeInOnScroll";
import Heading from "/cv/components/Heading";
import React from "react";
import { bodyW } from "/variables/variables";

const DespreCJE = () => {
  return (
    <FadeInOnScroll>
      <section>
        <div className="mb-16">
          <Anchor text="section" />
        </div>
        <div className={`${bodyW} flex max-sm:flex-col sm:gap-16 items-center`}>
          <div className="sm:w-3/5">
            <div>
              <Heading text="Despre CJE Constanța" />
            </div>
            <p className="mb-8 max-sm:px-4">
              <strong>
                Consiliul Elevilor, ca concept, este o structură legală de reprezentare a elevilor, recunoscută prin lege, menită să apere drepturile
                și libertățile elevilor
              </strong>
              . Se angajează în a-i proteja de abuzuri și de a face școala un loc mai frumos.
            </p>
            <p className="mb-8 max-sm:px-4">
              Pentru ca toți elevii să beneficieze de implementările solicitate la nivel național de Consiliul Național al Elevilor, există
              „sucursale” ale acestuia la nivel județean, respectiv la nivel școlar.{" "}
              <strong>
                Astfel, CJE Constanța se ocupă cu protejarea libertăților și reprezentarea elevilor din Constanța și cu monitorizarea gradului de
                aplicare al ordinelor de la Consiliul Național al Elevilor în Consiliile Școlare din Constanța
              </strong>
              .
            </p>
            <p className="mb-8 max-sm:px-4">
              CJE-urile desfășoară ședinte cu reprezentanții CȘE-urilor din județul în care se află, de unde extrag problemele cu care se confruntă
              elevii fiecărui liceu, activități de socializare și ateliere de formare a membrilor CȘE-urilor.
            </p>
          </div>
          <div className="max-sm:px-4">
            <img src="/Mockup voting card exemplu1.jpg" width={621} height={414} alt="despre cje constanta" />
          </div>
        </div>
        <div className="mt-16">
          <Anchor text="section" type="end" />
        </div>
      </section>
    </FadeInOnScroll>
  );
};

export default DespreCJE;
