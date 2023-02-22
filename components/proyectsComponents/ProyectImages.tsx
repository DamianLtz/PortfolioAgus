import { Container } from "react-bootstrap";
import { IProyectos } from "../../utils/types";
import Image from "next/image";

const ProyectImages = ({
  imagesProyect,
}: Pick<IProyectos, "imagesProyect">) => {
  return (
    <section className="bg-presentation-proyect">
      <Container>
        {imagesProyect.map((image, index) => {
          return (
            <Image
              key={index}
              src={image}
              alt="Images of the proyect"
              className="img-fluid w-100"
              placeholder="blur"
            />
          );
        })}
      </Container>
    </section>
  );
};

export default ProyectImages;
