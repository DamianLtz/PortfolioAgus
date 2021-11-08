import React from "react";

import emailCopyIcon from "../img/footer/HandWaving.svg";
import emailCopiedIcon from "../img/footer/HandsClapping.svg";

const PseudoButtons = () => {
  return (
    <>
      {/* Button Email: Inicial */}
      <button className="button d-flex align-items-center justify-content-center button-footer">
        agustinfrancoietta@gmail.com
      </button>
      {/* Button Email: Hover */}
      <button
        className={`button d-flex align-items-center button-footer-pressed`}
      >
        <span className="me-2">
          <img src={emailCopyIcon} alt="" />
        </span>
        Email Copied!
      </button>
      {/* Button Email: Pressed */}
      <button
        className={`button d-flex align-items-center button-footer-pressed`}
      >
        <span className="me-2">
          <img src={emailCopiedIcon} alt="" />
        </span>
        Email Copied!
      </button>
    </>
  );
};

export default PseudoButtons;
