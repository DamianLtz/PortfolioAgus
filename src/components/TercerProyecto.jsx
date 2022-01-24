import React, { useEffect } from "react";

import Button from "./ButtonSoon";
import Tag from "./Tag";
import ScrollReveal from "scrollreveal";

import Flecha from "../img/main/Flecha.svg";
import img from "../img/main/proyectoTres.png";

const TercerProyecto = () => {
  const listTags = ["Design Thinking", "User research"];

  useEffect(() => {
    ScrollReveal().reveal("#tercerProyecto", {
      delay: 250,
      distance: "50px",
      duration: 850,
    });
  });
  return (
    <div className="row container-proyectos">
      <div className="col-lg-6 order-2">
        <h3 className="text-lg-end">Emoción Escrita</h3>
        <p className="text-lg-end description-proyect">
          A 8 professionals team investigate and empathice
        </p>
        <p className="text-lg-end description-proyect">
          with the sanitary workers to resolve a significant
        </p>
        <p className="text-lg-end description-proyect">
          problem: how can i express all my emotions?
        </p>
        <div className="d-flex align-items-center justify-content-lg-end">
          {listTags.map((tag) => {
            return <Tag key={tag} content={tag} />;
          })}
        </div>
        <div className="d-flex justify-content-lg-end">
          <Button
            to="/informacionProyecto/3"
            className="button-view-proyect button-animate"
            content="View proyect"
            id="goToUno">
            <img src={Flecha} alt="" className="ms-2" />
          </Button>
        </div>
      </div>
      <div className="col-lg-6 d-flex justify-content-start align-items-center">
        <img src={img} alt="" className="img-fluid mb-3" id="tercerProyecto" />
      </div>
    </div>
  );
};

export default TercerProyecto;
