import React from "react";
import { Link } from "react-router-dom";

import FlechaIzq from "../img/AboutMe/ArrowLeft.svg";
import BgAboutMe from "../img/AboutMe/BlancoyNegro.png";
import Button from "../components/Button";
import Flecha from "../img/main/Flecha.svg";

const AboutMe = () => {
  return (
    <main>
      <div className="position-relative vh-lg-100">
        <img src={BgAboutMe} alt="" className="img-fluid w-100 img-aboutMe" />
        <Link className="background-flecha position-fixed" to="/">
          <img src={FlechaIzq} alt="" />
        </Link>
        <h1 className="position-absolute top-50 start-50 translate-middle aboutMe fw-bold">
          About Me
        </h1>
        <p className="position-absolute">Mendoza Arg.</p>
      </div>
      <div className="container container-aboutMe">
        <div className="row">
          <div className="col-lg-5">
            <h2 className="aboutme-titulo">Hello!</h2>
            <div className="aboutMe-info">
              <p className="fs-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisis nibh consequat nunc, a scelerisque. Congue velit
                adipiscing vitae aliquam at cras condimentum. eni
              </p>
              <p className="fs-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisis nibh consequat nunc, a scelerisque. Congue velit
                adipiscing vitae aliquam at cras condimentum. eni
              </p>
              <p className="fs-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisis nibh consequat nunc, a scelerisque. Congue velit
                adipiscing vitae aliquam at cras condimentum. eni
              </p>
            </div>
            <Button
              className="button-aboutMe"
              content="Full profile on LinkedIn"
            >
              <img src={Flecha} alt="" className="ms-2" />
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutMe;
