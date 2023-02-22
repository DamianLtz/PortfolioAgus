import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";

// Img's:
import Img404 from "../img/Miscellaneous/img404.png";
import Flecha from "../img/main/Flecha.svg";
// Components & Hooks:
import Button from "../components/ButtonLink";
import useWindowSize from "../Hooks/useWindowSize";

const NotFound = () => {
  const router = useRouter();
  const size = useWindowSize();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, [router]);

  return (
    <Container as={"main"}>
      <div className="grid-container position-relative">
        <div className="container-404">
          <div className="order-2 order-lg-0">
            <h1 className="py-4">
              Like chicken icecream, <br /> this page doesn&apos;t exist.
            </h1>
            <Button
              link="/"
              className="button-view-proyect button-animate w-fit my-2"
              content="Go to home">
              <Image src={Flecha} alt="" className="ms-2" />
            </Button>
          </div>
          <div className="container-img-404">
            <Image
              src={Img404}
              alt={"La One (?)"}
              priority={true}
              className="img-fluid img-404"
            />
            <Link
              href="https://instagram.com/brenda.ruseler"
              target="_blank"
              rel="noreferrer"
              className="text-color-ig py-2 d-none d-lg-inline-block">
              Illustration by instagram.com/brenda.ruseler
            </Link>
          </div>
        </div>
        {size.width! < 991 && (
          <footer className="d-flex justify-content-center">
            <Link
              href="instagram.com/brenda.ruseler"
              target="_blank"
              rel="noreferrer"
              className="text-color-ig py-2 position-static">
              Illustration by instagram.com/brenda.ruseler
            </Link>
          </footer>
        )}
      </div>
    </Container>
  );
};

export default NotFound;
