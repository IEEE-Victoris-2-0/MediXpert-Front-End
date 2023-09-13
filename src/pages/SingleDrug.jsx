import React from "react";
import Navbar from "../components/Navbar";
import { AiFillHeart } from "react-icons/ai";

const SingleDrug = () => {
  return (
    <div>
      <Navbar />
      <div className="container min-h-[calc(100vh-120px)] flex flex-col justify-center items-center gap-8 lg:flex-row py-8">
        <div className="flex-1 p-4 flex justify-center items-center bg-white rounded-lg shadow-sm w-full h-full">
          <img
            src="/assets/pandol.png"
            alt=""
            className="w-1/2 object-contain"
          />
        </div>
        <div className="flex-1 flex flex-col gap-2 justify-center">
          <h2 className="h2 text-primary">Pandol Extra</h2>
          <h3 className="text-[#FF9090] h3">EGP67.50</h3>
          <p className="text-sm lg:text-xl">
            Reduction of elevated intraocular pressure (IOP) in patients with
            open-angle glaucoma or ocular hypertension who are insufficiently
            responsive to topical beta-blockers or prostaglandin analogs, Side
            effects : Eye burning, irritation, blurred vision, itching or
            corneal erosionEyelid irritation or inflammation.
          </p>
          <div className="text-white text-sm lg:text-lg flex gap-2">
            <button className="bg-primary px-4 py-2 rounded-lg">
              Add to cart
            </button>
            <button className="bg-primary  p-2 rounded-lg flex gap-2 items-center">
              <AiFillHeart className="text-3xl text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleDrug;
