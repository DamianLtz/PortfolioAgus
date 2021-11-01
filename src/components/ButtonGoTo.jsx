import React from "react";

const Button = ({ className, content, id, children, href }) => {
  return (
    <a
      href={href}
      className={`button d-flex align-items-center ${className}`}
      id={id}
    >
      {content}
      {children}
    </a>
  );
};

export default Button;
