import React from "react";

const tag = ({ content, className }) => {
  return (
    <p className={`tag ${className ? className : ""}`}>{content}</p>
  );
};

export default tag;
