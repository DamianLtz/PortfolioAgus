import { memo } from "react";
import { Container } from "react-bootstrap";
import ButtonEmail from "./footer/ButtonEmail";
import SocialMedia from "./footer/SocialMedia";

const Footer = () => {
  return (
    <Container as="footer">
      <div className="row footer">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="d-flex flex-column align-items-center justify-content-center h-100">
            <h2 className="title-footer text-light">
              Let&apos;s work together
            </h2>
            <p className="fs-5 pb-5">
              {`Contact me for jobs, freelance projects or say hi :)`}
            </p>
            <ButtonEmail />
          </div>
        </div>
      </div>
      <SocialMedia />
    </Container>
  );
};

export default memo(Footer);
