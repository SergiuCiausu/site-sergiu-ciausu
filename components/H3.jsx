import React from "react";
import Anchor from "./Anchor";
import { bodyW } from "../variables/variables";

const H3 = ({ text }) => {
  return (
    <div className={`${bodyW} text-center my-16 max-sm:my-4`}>
      <Anchor text="header" />
      <h3>{text}</h3>
      <div className="mt-1">
        <Anchor text="header" type="end" />
      </div>
    </div>
  );
};

export default H3;
