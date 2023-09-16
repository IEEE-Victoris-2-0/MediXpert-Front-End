import React from "react";
import { Link } from "react-router-dom";

const PhramacyCard = ({ pharmacy }) => {
  return (
    <Link
      to={`/pharmacy/${pharmacy.slug}`}
      className="bg-white flex justify-center w-full h-full aspect-square items-center p-4 rounded-lg relative overflow-hidden hover:scale-105 transition-all duration-300"
    >
      <div className="bg-[#C2AEF39C] w-full h-full rounded-lg p-4 flex flex-col gap-2 items-center justify-center">
        <div className="overflow-hidden flex justify-center w-full h-full items-center">
          <img
            src={pharmacy.image}
            alt={pharmacy.name}
            className="w-1/2 object-contain"
          />
        </div>
        <span>
          {pharmacy.name.length > 20
            ? pharmacy.name.slice(0, 20) + "..."
            : pharmacy.name}
        </span>
        <div className="flex gap-2 bg-primary rounded-lg px-4 py-1 text-white">
          <img src="/assets/star.svg" alt="" />
          <span>{pharmacy.rating}</span>
        </div>
      </div>
    </Link>
  );
};

export default PhramacyCard;
