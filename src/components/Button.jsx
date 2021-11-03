import React from "react";

const Button = ({ className, content, id, Flecha }) => {
  return (
    <button className={`button d-flex align-items-center ${className}`} id={id}>
      {content}
      <img src={Flecha} alt="" className="ms-2 flechita" />
    </button>
  );
};

export default Button;
