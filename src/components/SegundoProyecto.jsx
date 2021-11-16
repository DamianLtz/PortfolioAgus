import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import ScrollReveal from "scrollreveal";
import ButtonLink from "./ButtonLink";
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
          <Link to="/informacionProyecto/2">
            <ButtonLink
              className="button-view-proyect button-animate"
              content="View proyect"
              href="#/"
            >
              <img src={Flecha} alt="" className="ms-2" />
            </ButtonLink>
          </Link>
        </div>
      </div>
      <div className="col-lg-6 d-flex justify-content-end align-items-center">
        <img src={img} alt="" className="img-fluid mt-5 mt-lg-0" id="segundoProyecto" />
      </div>
    </div>
  );
};

export default SegundoProyecto;
