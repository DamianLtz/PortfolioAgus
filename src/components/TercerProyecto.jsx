import React, { useEffect } from "react";

import ButtonLink from "./ButtonGoTo";
import Tag from "./Tag";
import ScrollReveal from "scrollreveal";

import Flecha from "../img/main/Flecha.svg";
import img from "../img/main/proyectoTres.png";

const TercerProyecto = () => {
  useEffect(() => {
    ScrollReveal().reveal("#tercerProyecto", {
      reset: true,
      delay: 250,
      distance: "50px",
      duration: 850,
    });
  });
  return (
    <div className="row container-proyectos">
      <div className="col-lg-6 order-2">
        <h3 className="text-lg-end">Pampa</h3>
        <p className="text-lg-end">
          Lorem ipsum dolor sit amet, consectetur adipiscing
        </p>
        <p className="text-lg-end">
          elit. Massa lectus sit lorem varius orci nulla libero.
        </p>
        <p className="text-lg-end">
          Ultrices eget mattis nunc scelerisque consequat
        </p>
        <div className="d-flex align-items-center justify-content-lg-end">
          <Tag content="Design System" />
          <Tag content="Visual Design" />
        </div>
        <div className="d-flex justify-content-lg-end">
          <ButtonLink
            className="button-view-proyect"
            content="View proyect"
            href="#/"
          >
            <img src={Flecha} alt="" className="ms-2" />
          </ButtonLink>
        </div>
      </div>
      <div className="col-lg-6 d-flex justify-content-start align-items-center">
        <img src={img} alt="" className="img-fluid mb-3" id="tercerProyecto" />
      </div>
    </div>
  );
};

export default TercerProyecto;
