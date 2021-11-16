import React from "react";

const ButtonTest = ({ children, onClick }) => {
  return <div onClick={onClick}>{children}</div>;
};

export default ButtonTest;
