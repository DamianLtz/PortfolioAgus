import React from "react";

import Navbar from "./Navbar";
import Presentation from "./Presentation";
import ProyectoDestacado from "./ProyectoDestacado";
import SegundoProyecto from "./SegundoProyecto";
import TercerProyecto from "./TercerProyecto";

const Home = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="container">
        <Presentation />
        <ProyectoDestacado />
        <SegundoProyecto />
        <TercerProyecto />
      </main>
    </div>
  );
};

export default Home;