import React from "react";
import Anchor from "./Anchor";
import { bodyW } from "/variables/variables";

const Heading = ({ text }) => {
  return (
    <div className={`${bodyW} ${text === "Despre mine" ? "sm:mt-24 mb-4" : "sm:mt-16 sm:mb-8 mb-4"}`}>
      <Anchor text="header" />
      <h3 className="sm:w-[860px]">{text}</h3>
      <div className="mt-1">
        <Anchor text="header" type="end" />
      </div>
    </div>
  );
};

export default Heading;
