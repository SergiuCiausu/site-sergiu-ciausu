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
        <div className={`${bodyW} flex flex-col gap-8 items-center`}>
          <div className="flex max-sm:max-sm:overflow-x-auto gap-8 max-sm:px-4 justify-between items-center">
            <img
              src="/9 ani puscarie radu mazare slide instagram.jpg"
              width={440}
              height={550}
              alt="postare 1 ziua de constanta"
              style={{ objectFit: "contain" }}
            ></img>
            <img
              src="/reclama facebook trafic site 2.3.jpg"
              width={550}
              height={550}
              alt="postare 2 ziua de constanta"
              style={{ objectFit: "contain" }}
            ></img>
            <img
              src="/grafica deschidere editie instagram.jpg"
              width={440}
              height={550}
              alt="postare 3 cse cnmb"
              style={{ objectFit: "contain" }}
            ></img>
          </div>
          <div className="flex gap-8 max-sm:px-4 max-sm:max-sm:overflow-x-auto">
            <img
              src="/reclama facebook trafic site 4.1.jpg"
              width={365}
              height={365}
              alt="postare 4 ziua de constanta"
              style={{ objectFit: "contain" }}
            ></img>
            <img
              src="/reclama facebook trafic facebook 1.jpg"
              width={365}
              height={365}
              alt="postare 5 ziua de constanta"
              style={{ objectFit: "contain" }}
            ></img>
            <img
              src="/reclama facebook trafic site 2.1.jpg"
              width={365}
              height={365}
              alt="postare 6 ziua de constanta"
              style={{ objectFit: "contain" }}
            ></img>
            <img
              src="/reclama facebook trafic whatsapp.jpg"
              width={365}
              height={457}
              alt="postare 7 ziua de constanta"
              style={{ objectFit: "contain" }}
            ></img>
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
