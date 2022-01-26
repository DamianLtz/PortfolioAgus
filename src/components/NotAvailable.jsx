import React from "react";
import Not from "../img/Rights/noDisponible.png";

const NotAvailable = () => {
  return (
    <div className="d-flex align-items-center justify-content-center mt-5">
      <div>
        <h1 className="pt-3">ADONDE VA NEGRI???</h1>
        <img src={Not} alt="¿Que hace?" className="img-fluid" />
      </div>
    </div>
  );
};

export default NotAvailable;
