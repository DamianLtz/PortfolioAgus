import React from "react";

import Moon from "../img/main/moon.png";
import ArrowDown from "../img/main/ArrowDown.svg";

const Presentation = () => {
  return (
    <div className="container-presentation">
      <div className="row">
        <div className="col-lg-12 position-relative">
          <h1 className="title-presentation text-light">
            A designer who loves <br />
            perfect and simple things.
          </h1>
          <div className="position-absolute position-img d-none d-lg-block">
            <img src={Moon} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
      <a
        href="#proyectos"
        className="d-flex align-items-center justify-content-center p-4"
      >
        <img src={ArrowDown} alt="" />
      </a>
    </div>
  );
};

export default Presentation;