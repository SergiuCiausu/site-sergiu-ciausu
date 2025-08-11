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
        <H3 text="Lucrări create" />
        <div className={`${bodyW} flex flex-col gap-8`}>
          <div className="flex gap-8 max-sm:px-4 max-sm:overflow-x-auto">
            <img src="/alegeri-cse-2023-2024_01.jpg" width={365} height={457} alt="postare 1 cse cnmb" style={{ objectFit: "contain" }}></img>
            <img src="/alegeri-cse-2023-2024_03.jpg" width={365} height={457} alt="postare 2 cse cnmb" style={{ objectFit: "contain" }}></img>
            <img src="/Carusel-meet-the-team_07.jpg" width={365} height={457} alt="postare 3 cse cnmb" style={{ objectFit: "contain" }}></img>
            <img src="/Poster recrutate bdp A4.jpg" width={365} height={457} alt="postare 4 cse cnmb" style={{ objectFit: "contain" }}></img>
          </div>
          <div className="flex gap-8 max-sm:px-4 max-sm:overflow-x-auto">
            <img
              src="/Postare combinand pasiunea si carierea editia VI 6.jpg"
              width={365}
              height={457}
              alt="postare 5 cse cnmb"
              style={{ objectFit: "contain" }}
            ></img>
            <img
              src="/Postare cpc editia vi grafica de coperta-100.jpg"
              width={365}
              height={457}
              alt="postare 6 cse cnmb"
              style={{ objectFit: "contain" }}
            ></img>
            <img src="/Postare anunt cpc editia vii 4.jpg" width={365} height={457} alt="postare 7 cse cnmb" style={{ objectFit: "contain" }}></img>
            <img src="/Poster 30x40 cm lucios.jpg" width={365} height={457} alt="postare 8 cse cnmb" style={{ objectFit: "contain" }}></img>
          </div>
        </div>
      </section>
      <div className="mt-16">
        <Anchor text="section" type="end" />
      </div>
    </FadeInOnScroll>
  );
};

export default LucrariCreate;
