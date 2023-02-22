import Image from "next/image";
import Link from "next/link";
import { TCardsViews } from "../utils/types";
import FlechaV from "../img/main/FlechaV.svg";

const CardsViews = ({ title, description, viewOn, link }: TCardsViews) => {
  return (
    <Link href={link} className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
      <div className="border border-white rounded">
        <div className="p-4">
          <h2 className="py-1 fs-4">{title}</h2>
          <p className="py-1">{description}</p>
        </div>
        <div className="d-flex align-items-center px-4 py-3 border-white border-top">
          <p className="text-view me-2">{viewOn}</p>
          <Image src={FlechaV} alt="Go to Medium" />
        </div>
      </div>
    </Link>
  );
};

export default CardsViews;
