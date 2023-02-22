import React from "react";
import Link from "next/link";
import AuthorFront from "./AuthorFront";
import { LinksFooter } from "../../pages/api/linksFooter";

export default function SocialMedia() {
  return (
    <div className="row py-5">
      <div className="col-lg-6 col-md-6 col-sm-12 order-md-1 g-0">
        <ul className="d-flex align-items-center justify-content-center justify-content-md-end redes">
          {LinksFooter.map((linkFooter) => {
            return (
              <li key={linkFooter.name}>
                <Link
                  href={linkFooter.link}
                  target="_blank"
                  rel="noreferrer"
                  className="position-relative">
                  {linkFooter.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <AuthorFront />
    </div>
  );
}
