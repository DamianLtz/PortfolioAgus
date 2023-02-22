import Head from "next/head";
import Navbar from "../components/Header";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";
import Presentation from "../components/Presentation";
import PrimaryProyect from "../components/PrimaryProyect";
import SecondaryProyect from "../components/SecondaryProyects";

export default function Home() {
  return (
    <>
      <Head>
        <title>Agustin Ietta Portfolio&apos;s </title>
        <meta name="description" content="My Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Container as="main">
        <Presentation />
        <PrimaryProyect proyectName="Apolo" />
        <SecondaryProyect proyectName="Quiero!" />
        <SecondaryProyect proyectName="MercadoPOS" order="reverse" />
      </Container>
      <Footer />
    </>
  );
}
