import React from "react";

const Button = ({ className, content, children }) => {
  return (
    <button className={`button d-flex align-items-center ${className}`}>
      {content}
      {children}
    </button>
  );
};

export default Button;
