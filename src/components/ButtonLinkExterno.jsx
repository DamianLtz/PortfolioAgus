import React from "react";

const ButtonLink = ({ className, content, id, href, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`button d-flex align-items-center ${className}`}
      id={id}>
      {content}
      {children}
    </a>
  );
};

export default ButtonLink;
