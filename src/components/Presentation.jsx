import React, { useEffect } from "react";

import Moon from "../img/main/moon.png";
import ArrowDown from "../img/main/ArrowDown.svg";
import ScrollReveal from "scrollreveal";

const Presentation = () => {
  function scrollTop(condition) {
    if (condition === true) {
      window.scrollTo(0, 1000);
    }
  }
  useEffect(() => {
    ScrollReveal().reveal(".moon", {
      delay: 1000,
      duration: 1700,
    });
    ScrollReveal().reveal(".title-presentation", {
      delay: 250,
      distance: "50px",
      duration: 2500,
    });
  });
  return (
    <div className="container-presentation">
      <div className="row container-cols-presentation">
        <div className="col-lg-12 position-relative">
          <h1 className="title-presentation text-light">
            A designer who loves <br />
            perfect and simple things.
          </h1>
          <div className="position-absolute position-img d-none d-lg-block">
            <img src={Moon} alt="" className="img-fluid moon" />
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <button
          className="py-3 px-4 bg-transparent border-0 rounded-circle"
          onClick={() => scrollTop(true)}
        >
          <img src={ArrowDown} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Presentation;
