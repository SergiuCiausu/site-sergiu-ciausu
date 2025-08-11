import React from "react";
import Hero from "../components/Hero";
import Anchor from "../components/Anchor";
import Proiecte from "/proiecte/components/Proiecte";
import Navbar from "../components/Navbar";
import FadeInOnLoad from "../components/FadeInOnLoad";
import Ending from "../components/Ending";
import "/src/globals.css";
import FadeInOnScroll from "../components/FadeInOnScroll";
import NavMobileBtn from "../src/NavMobileBtn";

const ProiecteComponent = () => {
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
        evtext="Proiectele"
        ptext="Mai jos puteți să aruncați o privire prin fiecare proiect pe care l-am pregătit pentru portofoliul meu."
        btext="Vezi proiecte"
        elementId="proiect"
      />
      <FadeInOnScroll>
        <Anchor text="main" />
      </FadeInOnScroll>
      <Proiecte />
      <Ending />
    </div>
  );
};

export default ProiecteComponent;
