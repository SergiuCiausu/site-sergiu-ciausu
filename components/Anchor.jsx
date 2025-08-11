import React from "react";
import "/src/globals.css";
import { bodyW } from "../variables/variables";

const Anchor = ({ text, type }) => {
  return (
    <div className={`${bodyW} flex justify-center`}>
      <p className="anchor">
        <span className="anchor-tag">{`<`}</span>
        {type === "end" ? <span className="anchor-slash">/</span> : ""}
        <span className="anchor-text">{text}</span>
        <span className="anchor-tag">{`>`}</span>
      </p>
    </div>
  );
};

export default Anchor;
