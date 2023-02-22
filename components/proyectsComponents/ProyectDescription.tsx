import { IProyectos } from "../../utils/types";
import { Row, Col } from "react-bootstrap";

const ProyectDescription = ({
  overview,
  role,
  year,
}: Pick<IProyectos, "overview" | "role" | "year">) => {
  return (
    <section className="bg-light position-relative">
      <div className="container container-overview">
        <Row>
          <Col lg="5" md="12">
            <h4 className="text-dark pb-3">Overview</h4>
            <p className="text-dark">{overview}</p>
          </Col>
          <Col lg="3" md="12" className="my-lg-0 my-4">
            <h4 className="text-dark pb-3">My Role</h4>
            <p className="text-dark">{role}</p>
          </Col>
          <Col lg="4" md="12">
            <h4 className="text-dark pb-3">Year</h4>
            <p className="text-dark">{year}</p>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ProyectDescription;
