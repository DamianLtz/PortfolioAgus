import React from "react";

import Button from "./Button";
import Flecha from "../img/main/Flecha.svg";

import img from "../img/main/proyectoTres.png";

const TercerProyecto = () => {
  return (
    <div className="row container-proyectos">
      <div className="col-lg-6 order-2">
        <h3 className="text-end">Pampa</h3>
        <p className="text-end">
          Lorem ipsum dolor sit amet, consectetur adipiscing
        </p>
        <p className="text-end">
          elit. Massa lectus sit lorem varius orci nulla libero.
        </p>
        <p className="text-end">
          Ultrices eget mattis nunc scelerisque consequat
        </p>
        <div className="d-flex align-items-center justify-content-end">
          <Button
            className="button-secondary-proyecto"
            content="Design System"
          />
          <Button
            className="button-secondary-proyecto"
            content="Visual Design"
          />
        </div>
        <div className="d-flex justify-content-end">
          <Button className="button-view-proyect" content="View proyect">
            <img src={Flecha} alt="" className="ms-2" />
          </Button>
        </div>
      </div>
      <div className="col-lg-6 d-flex justify-content-start align-items-center">
        <img src={img} alt="" className="img-fluid" />
      </div>
    </div>
  );
};

export default TercerProyecto;
