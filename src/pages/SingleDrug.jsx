import React from "react";
import Navbar from "../components/Navbar";
import { AiFillHeart } from "react-icons/ai";
import { CartContext } from "../contexts/cart";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DRUGS_DATA } from "../data/drugs";

const SingleDrug = () => {
  const { addItemToCart } = useContext(CartContext);

  const { drug } = useParams();

  const drugData = DRUGS_DATA.filter((drugItem) => drugItem.slug === drug)[0];

  return (
    <div>
      <Navbar />
      <div className="container min-h-[calc(100vh-120px)] flex flex-col justify-center items-center gap-8 lg:flex-row py-8">
        <div className="flex-1 p-4 flex justify-center items-center bg-white rounded-lg shadow-sm w-full h-full">
          <img
            src={drugData.image}
            alt={drugData.name}
            className="w-1/2 object-contain"
          />
        </div>
        <div className="flex-1 flex flex-col gap-2 justify-center">
          <h2 className="h2 text-primary">
            {drugData.name.length > 20
              ? drugData.name.slice(0, 20) + "..."
              : drugData.name}
          </h2>
          <h3 className="text-[#FF9090] h3">EGP {drugData.price}</h3>
          <p className="text-sm lg:text-xl">
            Reduction of elevated intraocular pressure (IOP) in patients with
            open-angle glaucoma or ocular hypertension who are insufficiently
            responsive to topical beta-blockers or prostaglandin analogs, Side
            effects : Eye burning, irritation, blurred vision, itching or
            corneal erosionEyelid irritation or inflammation.
          </p>
          <div className="text-white text-sm lg:text-lg flex gap-2">
            <button
              className="bg-primary px-4 py-2 rounded-lg"
              onClick={() => addItemToCart(drugData)}
            >
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
