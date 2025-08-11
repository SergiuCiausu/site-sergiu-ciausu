import React from "react";
import Hero from "../zari-alb-astre/components/Hero";
import FadeInOnLoad from "../components/FadeInOnLoad";
import Anchor from "../components/Anchor";
import DespreCJE from "./components/DespreCJE";
import PostOcupat from "./components/PostOcupat";
import LucrariCreate from "./components/LucrariCreate";
import Navbar from "../components/Navbar";
import { bodyW } from "../variables/variables";
import Ending from "../components/Ending";
import NavMobileBtn from "../src/NavMobileBtn";

const ConsiliulJudeteanAlElevilor = () => {
  return (
    <div>
      <NavMobileBtn />
      <Navbar />
      <div className={`${bodyW} mx-auto flex justify-center sm:my-16`}>
        <FadeInOnLoad>
          <Anchor text="body" />
        </FadeInOnLoad>
      </div>
      <Hero
        h1="Consiliul Județean al Elevilor"
        p="În cadrul CJE Constanța am contribuit la creșterea audienței de pe Instagram și la solidificarea mărcii consiliului."
        img="/consiliul-judetean-al-elevilor.JPG"
        link="https://drive.google.com/file/d/1EaqusQ1jFuX0WVJZahKbPkn76ERR1yCS/view?usp=drive_link"
      />
      <FadeInOnLoad>
        <div className="mb-16">
          <Anchor text="main" />
        </div>
      </FadeInOnLoad>
      <DespreCJE />
      <PostOcupat />
      <LucrariCreate />
      <Ending />
    </div>
  );
};

export default ConsiliulJudeteanAlElevilor;
