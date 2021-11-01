import React, { useEffect } from "react";

import ButtonLink from "./ButtonGoTo";
import Tag from "./Tag";
import ScrollReveal from "scrollreveal";

import ProyectoUno from "../img/main/proyectoUno.png";
import Flecha from "../img/main/Flecha.svg";
/* import FlechaGoTo from "../img/main/goTo.svg"; */

/* <img src={FlechaGoTo} alt="" className="ms-2" />; */

const Proyectos = () => {
  useEffect(() => {
    ScrollReveal().reveal("#proyectoDestacado", {
      delay: 250,
      distance: "50px",
      duration: 650,
    });
  });

  /* <img src={Flecha} alt="" className="ms-2" /> */
  return (
    <div className="row container-proyectos" id="proyectos">
      <div className="col-lg-12 d-flex flex-column align-items-center">
        <img
          src={ProyectoUno}
          alt=""
          className="img-fluid position-relative"
          id="proyectoDestacado"
        />
        <h2>Pampa</h2>
        <p className="text-lg-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p>Massa lectus sit lorem varius orci nulla libero.</p>
        <p>Ultrices eget mattis nunc scelerisque consequat.</p>
        <div className="d-flex align-items-center">
          <Tag content="Design System" />
          <Tag content="Visual Design" />
        </div>
        <ButtonLink
          className="button-view-proyect"
          content="View proyect"
          id="goToUno"
          href="#/"
        >
          <img src={Flecha} alt="" className="ms-2" id="imageChange" />
        </ButtonLink>
      </div>
    </div>
  );
};

export default Proyectos;
