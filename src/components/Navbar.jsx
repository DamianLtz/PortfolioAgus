import React from "react";
import { NavLink } from "react-router-dom";

import ContactMeLogo from "../img/navbar/contactMeLogo.svg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-portfolio fixed-top">
      <div className="container-fluid">
        <div className="navbar-name">
          <p className="text-light">Agustin Ietta</p>
          <p className="text-light">
            <span className="fw-bold">- </span>Product Designer
          </p>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link text-light"
                aria-current="page"
                to="/AboutMe"
              >
                About me
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#contactMe">
                Contact me
                <span className="ms-2">
                  <img src={ContactMeLogo} alt="" />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
