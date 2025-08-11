import React from "react";
import Hero from "/components/Hero";
import CVBanner from "./components/CVBanner";
import DespreMine from "./components/DespreMine";
import ExperienteAnterioare from "./components/ExperienteAnterioare";
import Educatie from "./components/Educatie";
import LimbiStraine from "./components/LimbiStraine";
import Navbar from "../components/Navbar";
import { bodyW } from "../variables/variables";
import FadeInOnLoad from "../components/FadeInOnLoad";
import Anchor from "../components/Anchor";
import Ending from "../components/Ending";
import NavMobileBtn from "../src/NavMobileBtn";

const CV = () => {
  return (
    <div>
      <NavMobileBtn />
      <Navbar />
      <div className={`sm:my-16`}>
        <FadeInOnLoad>
          <Anchor text="body" />
        </FadeInOnLoad>
      </div>
      <Hero
        htext="lui Sergiu"
        evtext="CV-ul"
        ptext="Acesta este CV-ul meu, pe care l-am construit pe durata anilor de liceu, în încercarea de a demonstra că merit o șansă pentru a mă angaja de foarte tânăr."
        btext="Descarcă CV PDF"
        elementId=""
        link="https://drive.google.com/drive/folders/1yZ92aT7K5o_tqgVz2AMuQsIFQH81zJ5L?usp=drive_link"
      />
      <CVBanner />
      <DespreMine />
      <ExperienteAnterioare />
      <Educatie />
      <LimbiStraine />
      <Ending />
    </div>
  );
};

export default CV;
