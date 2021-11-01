import React from "react";

import Button from "./Button";

import ProyectoUno from "../img/main/proyectoUno.png";
import Flecha from "../img/main/Flecha.svg";

const Proyectos = () => {
  return (
    <div className="row container-proyectos" id="proyectos">
      <div className="col-lg-12 d-flex flex-column align-items-center">
        <img src={ProyectoUno} alt="" className="img-fluid" />
        <h2>Pampa</h2>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p>Massa lectus sit lorem varius orci nulla libero.</p>
        <p>Ultrices eget mattis nunc scelerisque consequat.</p>
        <div className="d-flex align-items-center">
          <Button
            className="button-secondary-proyecto"
            content="Design System"
          />
          <Button
            className="button-secondary-proyecto"
            content="Visual Design"
          />
        </div>
        <div>
          <Button className="button-view-proyect" content="View proyect">
            <img src={Flecha} alt="" className="ms-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
