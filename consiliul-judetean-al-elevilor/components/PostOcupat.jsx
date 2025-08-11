import Anchor from "/components/Anchor";
import FadeInOnScroll from "/components/FadeInOnScroll";
import H3 from "/components/H3";
import { bodyW } from "/variables/variables";
import React from "react";

const PostOcupat = () => {
  return (
    <FadeInOnScroll>
      <section>
        <div className="mt-16">
          <Anchor text="section" />
        </div>
        <div>
          <H3 text="Post ocupate" />
        </div>
        <div className={`${bodyW} flex justify-center`}>
          <div className="w-[494px] flex flex-col items-center justify-end">
            <img
              src="/director-al-departamentului-de-pr-si-comunicare-icon.png.png"
              height={49}
              width={64}
              alt="director-al-departamentului-de-pr-si-comunicare-icon"
              className="mb-4"
            />
            <div className="flex flex-col items-center">
              <h5 className="text-center">Directorul departamentului PR și comunicare</h5>
              <p className="text-center">11.11.2022 - 04.06.2023</p>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <Anchor text="section" type="end" />
        </div>
      </section>
    </FadeInOnScroll>
  );
};

export default PostOcupat;
