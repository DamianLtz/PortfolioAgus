import { Col } from "react-bootstrap";
import Image from "next/image";
import { IProyectos } from "../../utils/types";
import Tag from "../Tag";

const ProyectPresentation = ({
  title,
  tags,
  image,
}: Pick<IProyectos, "title" | "image" | "tags">) => {
  return (
    <>
      <Col lg="6" md="12">
        <div className="d-flex align-items-center justify-content-center h-100">
          <div>
            <h1 className="text-light title-proyect">{title}</h1>
            <div className="d-flex tags-adjust">
              {tags.map((tag: string) => {
                return <Tag key={tag} content={tag} />;
              })}
            </div>
          </div>
        </div>
      </Col>
      <Col lg="6" md="12">
        <div className="d-flex align-items-center">
          {image ? (
            <Image
              src={image}
              alt="Image of the proyect"
              className="img-fluid"
              priority={true}
            />
          ) : (
            <Image
              src={"./issue.png"}
              alt="Image of the proyect"
              className="img-fluid"
              priority={true}
              width={10}
              height={10}
            />
          )}
        </div>
      </Col>
    </>
  );
};

export default ProyectPresentation;
