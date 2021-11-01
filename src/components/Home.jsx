import React from "react";

import Navbar from "./Navbar";
import Presentation from "./Presentation";
import ProyectoDestacado from "./ProyectoDestacado";
import SegundoProyecto from "./SegundoProyecto";
import TercerProyecto from "./TercerProyecto";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="container">
        <Presentation />
        <ProyectoDestacado />
        <SegundoProyecto />
        <TercerProyecto />
      </main>
    </>
  );
};

export default Home;
