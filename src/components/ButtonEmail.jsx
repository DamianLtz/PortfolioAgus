import React from "react";

/* content = texto || children = elemento que viene dentro del componente */

const Button = ({ className, content, id, children, onClick, onMouseOver, onMouseOut }) => {
  return (
    <div onClick={onClick} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
      {children}
    </div>
  );
};

export default Button;
