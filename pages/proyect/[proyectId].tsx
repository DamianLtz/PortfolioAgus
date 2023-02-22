import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import listProyects from "../api/listProyects";

// Components
import { Row } from "react-bootstrap";
import Footer from "../../components/Footer";
import ButtonBack from "../../components/ButtonBack";
import ProyectDescription from "../../components/proyectsComponents/ProyectDescription";
import ProyectImages from "../../components/proyectsComponents/ProyectImages";
import ProyectPresentation from "../../components/proyectsComponents/ProyectPresentation";

const InformacionProyecto = () => {
  const router = useRouter();
  const proyectId = router.query.proyectId;
  const [backDark, setBackDark] = useState(false);

  const selectedProyect = listProyects.find(
    (proyect) => Number(proyectId) === proyect.id
  );

  const changeBackground = () => {
    if (window.scrollY >= 875 && window.screen.width > 1272) {
      setBackDark(true);
    } else if (window.scrollY >= 650 && window.screen.width <= 1272) {
      setBackDark(true);
    } else if (window.scrollY >= 590 && window.screen.width <= 576) {
      setBackDark(true);
    } else {
      setBackDark(false);
    }
  };

  if (Number(proyectId) >= 4) {
    router.replace("/notFound");
  }

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    selectedProyect && (
      <>
        <main>
          <section className="position-relative vh-lg-100">
            <ButtonBack className={backDark ? "button-flecha-dark" : ""} />
            <div className="container-presentation justify-items-center">
              <Row>
                <ProyectPresentation
                  title={selectedProyect.title}
                  image={selectedProyect.image}
                  tags={selectedProyect.tags}
                />
              </Row>
            </div>
          </section>
          <ProyectDescription
            overview={selectedProyect.overview}
            role={selectedProyect.role}
            year={selectedProyect.year}
          />
          <ProyectImages imagesProyect={selectedProyect.imagesProyect} />
        </main>
        <Footer />
      </>
    )
  );
};

export default InformacionProyecto;
