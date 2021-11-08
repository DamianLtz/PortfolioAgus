import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import ButtonLink from "./ButtonLink";
import Tag from "./Tag";
import ScrollReveal from "scrollreveal";

import ProyectoUno from "../img/main/proyectoUno.png";
import Flecha from "../img/main/Flecha.svg";

const Proyectos = () => {
  useEffect(() => {
    ScrollReveal().reveal("#proyectoDestacado", {
      delay: 250,
      distance: "50px",
      duration: 650,
    });
  });
  return (
    <div className="row container-proyectos">
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
        <Link to="/informacionProyecto/1">
          <ButtonLink
            className="button-view-proyect button-animate"
            content="View proyect"
            id="goToUno"
          >
            <img src={Flecha} alt="" className="ms-2" />
          </ButtonLink>
        </Link>
      </div>
    </div>
  );
};

export default Proyectos;
