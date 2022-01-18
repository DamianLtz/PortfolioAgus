import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import ScrollReveal from "scrollreveal";
import Button from "./ButtonSoon";
import Tag from "./Tag";

import Flecha from "../img/main/Flecha.svg";
import img from "../img/main/proyectoDos.png";

const SegundoProyecto = () => {
  const listTags = ["Research", "Lean UX", "Usability Test"];

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
        <h3>Quiero!</h3>
        <p>A case study where me and my team improved the</p>
        <p>expiration of points in the benefits product, Quiero!</p>
        <div className="d-flex align-items-center">
          {listTags.map((tag) => {
            return <Tag key={tag} content={tag} />;
          })}
        </div>
        <div className="d-flex">
          <Link to="/informacionProyecto/2">
            <Button
              className="button-soon button-animate"
              content="Soon"
              href="#/">
              <img src={Flecha} alt="" className="ms-2" />
            </Button>
          </Link>
        </div>
      </div>
      <div className="col-lg-6 d-flex justify-content-end align-items-center">
        <img
          src={img}
          alt=""
          className="img-fluid mt-5 mt-lg-0"
          id="segundoProyecto"
        />
      </div>
    </div>
  );
};

export default SegundoProyecto;
