import React from "react";

import Button from "./Button";
import Flecha from "../img/main/Flecha.svg";
import img from "../img/main/proyectoDos.png";

const SegundoProyecto = () => {
  return (
    <div className="row container-proyectos">
      <div className="col-lg-6">
        <h3>Pampa</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
        <p>elit. Massa lectus sit lorem varius orci nulla libero.</p>
        <p>Ultrices eget mattis nunc scelerisque consequat</p>
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
        <div className="d-flex">
          <Button className="button-view-proyect" content="View proyect">
            <img src={Flecha} alt="" className="ms-2" />
          </Button>
        </div>
      </div>
      <div className="col-lg-6 d-flex justify-content-end align-items-center">
        <img src={img} alt="" className="img-fluid" />
      </div>
    </div>
  );
};

export default SegundoProyecto;
