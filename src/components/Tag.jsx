import React from "react";

const tag = ({ content }) => {
  return (
    <button className="button d-flex align-items-center tag">{content}</button>
  );
};

export default tag;
