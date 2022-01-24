import React from "react";
import { NavLink } from "react-router-dom";

import ContactMeLogo from "../img/navbar/contactMeLogo.svg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-portfolio fixed-top">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-name">
          <p className="text-light">Agustin Ietta</p>
          <p className="text-light">
            <span className="fw-bold">- </span>Product Designer
          </p>
        </NavLink>
        <button
          className="navbar-toggler shadow-none border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon test"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="vh-100-mobile">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 h-100 justify-content-evenly align-items-center">
              <li className="nav-item">
                <NavLink
                  className="nav-link text-light aboutme"
                  aria-current="page"
                  to="/AboutMe">
                  About me
                </NavLink>
              </li>
              <li className="nav-item">
                <a
                  className="d-flex align-items-center nav-link text-light contact-me py-2 px-4"
                  href="#contactMe">
                  Contact me
                  <span className="ms-2">
                    <img src={ContactMeLogo} alt="" />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
