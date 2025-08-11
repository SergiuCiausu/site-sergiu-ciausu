import FadeInOnLoad from "/components/FadeInOnLoad";
import { bodyW } from "/variables/variables";
import React from "react";
import "./cv.css";
import Anchor from "/components/Anchor";

const CVBanner = () => {
  return (
    <FadeInOnLoad>
      <div className="sm:mb-16">
        <Anchor text="main" />
      </div>
      <div className="max-sm:w-full max-sm:p-8">
        <section
          className={`${bodyW} chenar-cv max-sm:w-full sm:p-[128px] max-sm:p-16 max-sm:gap-16 flex max-sm:flex-col justify-between items-center`}
        >
          <div className="max-sm:w-full">
            <h3 className="chenar-cv-h3 mb-8 text-xl">Sergiu-Andrei Ciaușu</h3>
            <div className="flex flex-col">
              <div className="flex max-sm:flex-col sm:gap-16">
                <p className="chenar-p max-sm:flex-col">
                  <span className="chenar-p-label">Data nașterii</span>: 07.06.2006
                </p>
                <p className="chenar-p max-sm:flex-col">
                  <span className="chenar-p-label">Naționalitate</span>: român
                </p>
                <p className="chenar-p max-sm:flex-col">
                  <span className="chenar-p-label">Gen</span>: masculin
                </p>
              </div>
              <div className="flex max-sm:flex-col sm:gap-16">
                <p className="chenar-p max-sm:flex max-sm:flex-col">
                  <span className="chenar-p-label">Număr de telefon:</span> 0725 399 173
                </p>
                <p className="chenar-p max-sm:flex-col">
                  <span className="chenar-p-label">Email</span>: ciausu.sergiu@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div>
            <img src="/sergiu-ciausu.png" width={512} height={512} alt="sergiu ciausu" className="chenar-cv-poza"></img>
          </div>
        </section>
      </div>
    </FadeInOnLoad>
  );
};

export default CVBanner;
