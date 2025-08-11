import Anchor from "/components/Anchor";
import FadeInOnScroll from "/components/FadeInOnScroll";
import H3 from "/components/H3";
import { bodyW } from "/variables/variables";
import React from "react";
import "./posturi-ocupate.css";

const PosturiOcupate = () => {
  const posturi = [
    {
      img: "/redactor-ziua-de-constanta-icon.png",
      post: "Redactor",
      perioada: "19.06.2023 - 01.09.2023",
    },
    {
      img: "/grafician-icon.png",
      post: "Grafician",
      perioada: "01.04.2023 - 31.12.2023",
    },
  ];

  return (
    <FadeInOnScroll>
      <section>
        <div className="mt-16">
          <Anchor text="section" />
        </div>
        <div>
          <H3 text="Posturile ocupate" />
        </div>
        <div className={`${bodyW} flex max-sm:flex-col max-sm:gap-16 justify-between`}>
          {posturi.map((post, index) => (
            <div key={index} className="sm:w-[301px] sm:mx-72 flex flex-col items-center justify-between">
              <img src={post.img} height={49} width={64} alt={post.img.slice(1, post.img.length - 3)} className="mb-4"></img>
              <div className="flex flex-col items-center">
                <h5 className="posturi-ocupate-h5">{post.post}</h5>
                <p className="posturi-ocupate-p">{post.perioada}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <Anchor text="section" type="end" />
        </div>
      </section>
    </FadeInOnScroll>
  );
};

export default PosturiOcupate;
