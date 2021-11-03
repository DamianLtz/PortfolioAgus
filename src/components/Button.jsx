import React from "react";

const Button = ({ className, content, id, Flecha, onMouseOver }) => {
  return (
    <button
      className={`button d-flex align-items-center ${className}`}
      id={id}
      onMouseOver={onMouseOver}
    >
      {content}
      <img src={Flecha} alt="" className="ms-2 flechita" />
    </button>
  );
};

export default Button;
