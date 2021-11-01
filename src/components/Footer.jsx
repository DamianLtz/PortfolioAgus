import React from "react";

import Button from "./Button";

const Footer = () => {
  return (
    <footer id="contactMe">
      <div className="container">
        <div className="row footer">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h2 className="title-footer text-light">Let’s work together</h2>
            <Button className="button-footer" content="agustinfrancoietta@gmail.com"/>
          </div>
        </div>
        <div className="row py-5">
          <div className="col-lg-5 col-md-5 col-sm-12 order-md-1 g-0">
            <ul className="d-flex align-items-center justify-content-center redes">
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
          <div className="col-lg-3 col-md-3 col-sm-12 me-auto pt-4 pt-md-0 d-flex align-items-center justify-content-md-start justify-content-center">
            <h6 className="text-primary">Developed by Zeta</h6>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
