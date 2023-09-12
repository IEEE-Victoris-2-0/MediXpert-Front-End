import React from "react";
import { AiFillHeart, AiOutlineArrowRight } from "react-icons/ai";

const DrugCard = () => {
  return (
    <div className="bg-white flex flex-col h-72 max-w-72 p-4 rounded-lg relative overflow-hidden">
      <div className="absolute top-0 right-0 bg-[#FF9090] p-2 rounded-es-lg cursor-pointer">
        <AiFillHeart className="text-3xl text-white" />
      </div>
      <div className="overflow-hidden flex justify-center items-center">
        <img
          src="/assets/pandol.png"
          alt=""
          className="w-[80%] h-[80%] object-contain"
        />
      </div>
      <span>Panadol Extra</span>
      <div className="flex justify-between items-center">
        <span className="text-[#FF9090]">EGP67.50</span>
        <div className="bg-[#FF9090] p-2 rounded-full">
          <AiOutlineArrowRight className="text-white text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default DrugCard;
