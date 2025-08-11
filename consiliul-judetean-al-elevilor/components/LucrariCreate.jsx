import Anchor from "/components/Anchor";
import FadeInOnScroll from "/components/FadeInOnScroll";
import H3 from "/components/H3";
import { bodyW } from "/variables/variables";
import React from "react";

const LucrariCreate = () => {
  return (
    <FadeInOnScroll>
      <section>
        <div className="mt-16">
          <Anchor text="section" />
        </div>
        <H3 text="Exemple de lucrări create" />
        <div className="max-sm:px-4">
          <div className={`${bodyW} flex sm:justify-center gap-8 max-sm:overflow-x-auto`}>
            <img src="/Voting card vocational.jpg" width={365} height={259} alt="postare 1 cje constanta" style={{ objectFit: "contain" }}></img>
            <img src="/Voting card tehnologic.jpg" width={365} height={259} alt="postare 2 cje constanta" style={{ objectFit: "contain" }}></img>
            <img src="/Voting card teoretic.jpg" width={365} height={259} alt="postare 3 cje constanta" style={{ objectFit: "contain" }}></img>
            <img
              src="/impartire-carusel-sesiune-extraordinara-patrata_01.jpg"
              width={259}
              height={259}
              alt="postare 4 cje constanta"
              style={{ objectFit: "contain" }}
            ></img>
          </div>
        </div>
      </section>
      <div className="mt-16">
        <Anchor text="section" type="end" />
      </div>
      <div className="mt-16">
        <Anchor text="main" type="end" />
      </div>
    </FadeInOnScroll>
  );
};

export default LucrariCreate;
