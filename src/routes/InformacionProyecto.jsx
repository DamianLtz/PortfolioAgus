import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import ListaProyectos from "../components/ListaProyectos";
import Tag from "../components/Tag";
import ButtonBack from "../components/ButtonBack";

const InformacionProyecto = () => {
  const { id } = useParams();
  const idProyect = parseInt(id);

  const selectedProyect = ListaProyectos.find(
    (ListaProyectos) => idProyect === ListaProyectos.id
  );

  return (
    <main>
      <section className="position-relative vh-lg-100">
        <Link to="/">
          <ButtonBack />
        </Link>
        <div className="container-presentation justify-items-center">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center justify-content-center">
              <div>
                <h1 className="text-light text-center title-proyect">
                  {selectedProyect.title}
                </h1>
                <div>
                  <div className="d-flex tags-adjust">
                    {selectedProyect.tags.map((tag) => {
                      return (
                        <Tag key={tag} content={tag} />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <img src={selectedProyect.image} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light position-relative">
        <div className="container container-overview">
          <div className="row">
            <div className="col-lg-5">
              <h4 className="text-dark pb-3">Overview</h4>
              <p className="text-dark">{selectedProyect.overview}</p>
            </div>
            <div className="col-lg-3">
              <h4 className="text-dark pb-3">My Role</h4>
              <p className="text-dark">{selectedProyect.role}</p>
            </div>
            <div className="col-lg-4">
              <h4 className="text-dark pb-3">Year</h4>
              <p className="text-dark">{selectedProyect.year}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-presentation-proyect">
        <div className="container">
          {selectedProyect.imagesProyect.map((image) => {
            return (
              <img key={image} src={image} alt="" className="img-fluid w-100" />
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default InformacionProyecto;
