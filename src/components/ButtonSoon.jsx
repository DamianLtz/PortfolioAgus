import React from "react";

const ButtonLink = ({ className, content, id, children }) => {
  return (
    <button className={`button d-flex align-items-center justify-content-center ${className}`} id={id}>
      {content}
      {children}
    </button>
  );
};

export default ButtonLink;
