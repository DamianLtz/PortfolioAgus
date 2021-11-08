import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import ProyectoUno from "../img/main/proyectoUno.png";
import ButtonBack from "../components/ButtonBack";

const InformacionProyecto = () => {
  const { id } = useParams();
  return (
    <main>
      <div className="position-relative vh-lg-100">
        <Link to="/">
          <ButtonBack />
        </Link>
        <div className="container-presentation justify-items-center">
          <div className="row m-0">
            <div className="col-lg-6 d-flex align-items-center justify-content-center">
              <h1 className="text-light text-center fs-1">{`El número de proyecto es: ${id}`}</h1>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <img src={ProyectoUno} alt="" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default InformacionProyecto;
