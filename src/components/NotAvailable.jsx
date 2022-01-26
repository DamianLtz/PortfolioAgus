import React from "react";
import Not from "../img/Rights/noDisponible.png";

const NotAvailable = () => {
  return (
    <div className="d-flex align-items-center justify-content-center mt-5">
      <div>
        <img src={Not} alt="¿Que hace?" className="img-fluid" />
        <h1 className="pt-3">QUE DECIS??????!!!!</h1>
      </div>
    </div>
  );
};

export default NotAvailable;
