import React from "react";
import { AiFillHeart, AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const DrugCard = ({ drug }) => {
  return (
    <div className="bg-white flex flex-col justify-center w-full h-full aspect-square p-4 rounded-lg relative overflow-hidden">
      <div className="absolute top-0 right-0 bg-[#FF9090] p-2 rounded-es-lg cursor-pointer">
        <AiFillHeart className="text-3xl text-white" />
      </div>
      <div className="overflow-hidden flex justify-center w-full h-full items-center">
        <img
          src={drug.image}
          alt={drug.name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
      <span>
        {drug.name.length > 20 ? drug.name.slice(0, 20) + "..." : drug.name}
      </span>
      <div className="flex justify-between items-center">
        <span className="text-[#FF9090]">EGP {drug.price}</span>
        <Link
          to={`/drug/${drug.slug}`}
          className="bg-[#FF9090] p-2 rounded-full"
        >
          <AiOutlineArrowRight className="text-white text-2xl" />
        </Link>
      </div>
    </div>
  );
};

export default DrugCard;
