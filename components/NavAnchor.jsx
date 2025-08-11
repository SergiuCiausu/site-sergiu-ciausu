import React from "react";
import "/src/globals.css";

const NavAnchor = ({ text, type }) => {
  return (
    <p className="anchor">
      <span className="anchor-tag">{`<`}</span>
      {type === "end" ? <span className="anchor-slash">/</span> : ""}
      <span className="anchor-text">{text}</span>
      <span className="anchor-tag">{`>`}</span>
    </p>
  );
};

export default NavAnchor;
