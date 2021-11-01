import React, { useEffect } from "react";

import ScrollReveal from "scrollreveal";
import ButtonLink from "./ButtonGoTo";
import Tag from "./Tag";

import Flecha from "../img/main/Flecha.svg";
import img from "../img/main/proyectoDos.png";

const SegundoProyecto = () => {
  useEffect(() => {
    ScrollReveal().reveal("#segundoProyecto", {
      delay: 250,
      distance: "50px",
      duration: 850,
    });
  });
  return (
    <div className="row container-proyectos">
      <div className="col-lg-6">
        <h3>Pampa</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
        <p>elit. Massa lectus sit lorem varius orci nulla libero.</p>
        <p>Ultrices eget mattis nunc scelerisque consequat</p>
        <div className="d-flex align-items-center">
          <Tag content="Design System" />
          <Tag content="Visual Design" />
        </div>
        <div className="d-flex">
          <ButtonLink
            className="button-view-proyect"
            content="View proyect"
            href="#/"
          >
            <img src={Flecha} alt="" className="ms-2" />
          </ButtonLink>
        </div>
      </div>
      <div className="col-lg-6 d-flex justify-content-end align-items-center">
        <img src={img} alt="" className="img-fluid mt-5" id="segundoProyecto" />
      </div>
    </div>
  );
};

export default SegundoProyecto;
