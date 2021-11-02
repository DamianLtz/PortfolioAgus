import React from "react";

const Button = ({ className, content, id, children, onClick }) => {
  return (
    <button
      className={`button d-flex align-items-center ${className}`}
      id={id}
      onClick={onClick}
    >
      {content}
      {children}
    </button>
  );
};

export default Button;
