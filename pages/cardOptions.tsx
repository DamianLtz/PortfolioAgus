import React from "react";
import Head from "next/head";

import Row from "react-bootstrap/Row";
import ButtonBack from "../components/ButtonBack";
import { contentCards } from "./api/contentCards";
import CardsViews from "../components/CardsViews";
import { Container } from "react-bootstrap";

const UnknownComponent = () => {
  return (
    <>
      <Head>
        <title>Agustin Ietta | New Component </title>
        <meta name="description" content="My Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ButtonBack />
        <Container as="section">
          <div className="d-flex flex-column justify-content-center height-container">
            <h1 className="text-center fw-bold">
              Choose your preference
              <br />
              to continue
            </h1>
            <Row className="g-4">
              {contentCards.map((card) => {
                return (
                  <CardsViews
                    key={card.title}
                    title={card.title}
                    description={card.description}
                    viewOn={card.viewOn}
                    link={card.link}
                  />
                );
              })}
            </Row>
          </div>
        </Container>
      </main>
    </>
  );
};

export default UnknownComponent;
