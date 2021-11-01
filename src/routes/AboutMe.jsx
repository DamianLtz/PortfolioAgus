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
        <Link
          className="button-flecha position-fixed"
          to="/"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.125 8C2.125 7.79289 2.29289 7.625 2.5 7.625H13.5C13.7071 7.625 13.875 7.79289 13.875 8C13.875 8.20711 13.7071 8.375 13.5 8.375H2.5C2.29289 8.375 2.125 8.20711 2.125 8Z"
              fill="CurrentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.26516 3.23483C7.41161 3.38128 7.41161 3.61872 7.26516 3.76517L3.03033 8L7.26516 12.2348C7.41161 12.3813 7.41161 12.6187 7.26516 12.7652C7.11872 12.9116 6.88128 12.9116 6.73484 12.7652L2.23483 8.26516C2.08839 8.11872 2.08839 7.88128 2.23483 7.73484L6.73484 3.23483C6.88128 3.08839 7.11872 3.08839 7.26516 3.23483Z"
              fill="CurrentColor"
            />
          </svg>
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
              href="#/"
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
