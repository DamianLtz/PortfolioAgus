import React from "react";
import { Link } from "react-router-dom";

const ButtonLink = ({ className, content, id, to, children }) => {
  return (
    <Link
      to={`${to}`}
      className={`button d-flex align-items-center ${className}`}
      id={id}>
      {content}
      {children}
    </Link>
  );
};

export default ButtonLink;
