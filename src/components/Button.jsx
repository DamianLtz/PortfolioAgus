import React from "react";

const Button = ({ className, content, id, children }) => {
  return (
    <button className={`button d-flex align-items-center ${className}`} id={id}>
      {content}
      {children}
    </button>
  );
};

export default Button;
