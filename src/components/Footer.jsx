// eslint-disable-next-line
import React, { useState, useEffect } from "react";

import Button from "./ButtonEmail";
// eslint-disable-next-line
import emailCopyIcon from "../img/footer/HandWaving.svg";
// eslint-disable-next-line
import emailCopiedIcon from "../img/footer/HandsClapping.svg";
/* agustinfrancoietta@gmail.com */
const Footer = () => {
  return (
    <footer id="contactMe">
      <div className="container">
        <div className="row footer">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h2 className="title-footer text-light">Let’s work together</h2>
            <Button>
              <button className="button d-flex align-items-center justify-content-center button-footer">
                correo@correo.com
              </button>
            </Button>
          </div>
        </div>
        <div className="row py-5">
          <div className="col-lg-12 col-md-12 col-sm-12 order-md-1 g-0">
            <ul className="d-flex align-items-center justify-content-center justify-content-md-end redes">
              <li>
                <a href="/" alt="">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="/" alt="">
                  Medium
                </a>
              </li>
              <li>
                <a href="/" alt="">
                  Dribble
                </a>
              </li>
            </ul>
          </div>
          {/*           <div className="col-lg-3 col-md-3 col-sm-12 me-auto pt-4 pt-md-0 d-flex align-items-center justify-content-md-start justify-content-center">
            <h6 className="text-primary">Developed by Zeta</h6>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;