import FadeInOnScroll from "/components/FadeInOnScroll";
import Heading from "/cv/components/Heading";
import HeadingRight from "/cv/components/HeadingRight";
import { bodyW } from "/variables/variables";
import React from "react";
import Anchor from "/components/Anchor";

const Hobby = () => {
  const hobby = [
    {
      denumire: "Fitness-ul",
      p: [
        "Hobby-ul meu preferat, care mă ajută să... nu o iau razna :). Sala este activitatea care m-a învățat să am răbdare și să deprind abilitatea de a munci fără a vedea rezultate imediate. Este hobby-ul care-mi resetează mintea și o umple de o claritate extremă.",
        "Fără sală, nu aș fi același om și sper că nu va fi nevoie niciodată să mă opresc din a ridica greutăți și din a-mi îmbunătăți sănătatea, aspectul fizic și aspectul mental.",
      ],
      img: "/spate.png",
    },
    {
      denumire: "Fotografia",
      p: [
        "Îmi place să petrec timp în vacanțe surprinzând natura în ipostazele ei cele mai fermecătoare. De asemenea, de fiecare dată când vreun prieten are nevoie de niște poze pentru rețelele sociale -- mă ocup! Prin fotografie am interacționat pentru prima dată cu lumea conținutului digital.",
      ],
      img: "/fotografia.png",
    },
    {
      denumire: "Scrisul",
      p: [
        "Scrisul este hobby-ul care m-a ajutat să mă vindec de anxietate. Când eram mic, am fost batjocorit continuu pentru faptul că eram mai gras decât colegii mei de la școală și de la clubul de fotbal la care mergeam.",
        "Prin scris îmi creez o ordine cognitivă, prin care reușesc să-mi găsesc răspunsuri la anumite gânduri care-mi stârnesc disconfort.",
      ],
      img: "/scrisul.png",
    },
  ];

  return (
    <section>
      {hobby.map((hobby, index) =>
        index % 2 ? (
          <FadeInOnScroll key={index}>
            <div className={`${bodyW} flex flex-row-reverse max-sm:flex-col justify-between gap-16 mb-16`}>
              <div>
                <div className="max-sm:hidden">
                  <HeadingRight text={hobby.denumire} />
                </div>
                <div className="sm:hidden">
                  <Heading text={hobby.denumire} />
                </div>
                {hobby.p.map((text, indexP) => (
                  <p key={indexP} className="mb-8 sm:text-right max-sm:ml-4">
                    {text}
                  </p>
                ))}
              </div>
              <div className="max-sm:flex max-sm:justify-center max-sm:p-4">
                <img src={hobby.img} width={420} height={420} alt={hobby.img.slice(1, hobby.img.length - 3)}></img>
              </div>
            </div>
          </FadeInOnScroll>
        ) : (
          <FadeInOnScroll key={index}>
            <div key={index} className={`${bodyW} flex gap-16 items-center max-sm:flex-col justify-between mb-16`}>
              <div>
                <div id={index === 0 ? "hobby" : ""}>
                  <Heading text={hobby.denumire} />
                </div>
                {hobby.p.map((text, indexP) => (
                  <p key={indexP} className="sm:mb-8 max-sm:ml-4">
                    {text}
                  </p>
                ))}
              </div>
              <div className="max-sm:flex max-sm:justify-center max-sm:p-4">
                <img src={hobby.img} width={420} height={420} alt={hobby.img.slice(1, hobby.img.length - 3)}></img>
              </div>
            </div>
          </FadeInOnScroll>
        )
      )}
      <FadeInOnScroll>
        <div>
          <Anchor text="main" type="end" />
        </div>
      </FadeInOnScroll>
    </section>
  );
};

export default Hobby;
