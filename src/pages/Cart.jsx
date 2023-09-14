import React from "react";
import Navbar from "../components/Navbar";
import { AiOutlineClose } from "react-icons/ai";

const Cart = () => {
  return (
    <div>
      <Navbar />
      <div className="container min-h-[calc(100vh-120px)] flex flex-col gap-8 lg:flex-row py-8">
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <h2 className="h2 text-primary">Your Cart</h2>
            <ul className="flex flex-col gap-4">
              <li className="bg-white p-4 rounded-lg shadow-md text-primary flex justify-between">
                <div className="flex justify-center items-center w-[20%]">
                  <img
                    src="/assets/pandol.png"
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="h3">Pandol Extra</h3>
                  <span className="text-sm lg:text-lg">10 LE</span>
                </div>
                <div className=" flex flex-col justify-between bg-[#D8C9FF] rounded-lg">
                  <span className="bg-primary text-white  h-10 w-10 rounded-lg flex justify-center items-center cursor-pointer">
                    +
                  </span>
                  <span className=" h-10 w-10 rounded-lg flex justify-center items-center">
                    1
                  </span>
                  <span className="bg-[#C6AEFF]  h-10 w-10 rounded-lg flex justify-center items-center cursor-pointer">
                    -
                  </span>
                </div>
                <div className="cursor-pointer">
                  <AiOutlineClose className="text-2xl text-primary" />
                </div>
              </li>
              <li className="bg-white p-4 rounded-lg shadow-md text-primary flex justify-between">
                <div className="flex justify-center items-center w-[20%]">
                  <img
                    src="/assets/pandol.png"
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="h3">Pandol Extra</h3>
                  <span className="text-sm lg:text-lg">10 LE</span>
                </div>
                <div className=" flex flex-col justify-between bg-[#D8C9FF] rounded-lg">
                  <span className="bg-primary text-white  h-10 w-10 rounded-lg flex justify-center items-center cursor-pointer">
                    +
                  </span>
                  <span className=" h-10 w-10 rounded-lg flex justify-center items-center">
                    1
                  </span>
                  <span className="bg-[#C6AEFF]  h-10 w-10 rounded-lg flex justify-center items-center cursor-pointer">
                    -
                  </span>
                </div>
                <div className="cursor-pointer">
                  <AiOutlineClose className="text-2xl text-primary" />
                </div>
              </li>
              <li className="bg-white p-4 rounded-lg shadow-md text-primary flex justify-between">
                <div className="flex justify-center items-center w-[20%]">
                  <img
                    src="/assets/pandol.png"
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="h3">Pandol Extra</h3>
                  <span className="text-sm lg:text-lg">10 LE</span>
                </div>
                <div className=" flex flex-col justify-between bg-[#D8C9FF] rounded-lg">
                  <span className="bg-primary text-white  h-10 w-10 rounded-lg flex justify-center items-center cursor-pointer">
                    +
                  </span>
                  <span className=" h-10 w-10 rounded-lg flex justify-center items-center">
                    1
                  </span>
                  <span className="bg-[#C6AEFF]  h-10 w-10 rounded-lg flex justify-center items-center cursor-pointer">
                    -
                  </span>
                </div>
                <div className="cursor-pointer">
                  <AiOutlineClose className="text-2xl text-primary" />
                </div>
              </li>
              <li className="bg-white p-4 rounded-lg shadow-md text-primary flex justify-between">
                <div className="flex justify-center items-center w-[20%]">
                  <img
                    src="/assets/pandol.png"
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="h3">Pandol Extra</h3>
                  <span className="text-sm lg:text-lg">10 LE</span>
                </div>
                <div className=" flex flex-col justify-between bg-[#D8C9FF] rounded-lg">
                  <span className="bg-primary text-white  h-10 w-10 rounded-lg flex justify-center items-center cursor-pointer">
                    +
                  </span>
                  <span className=" h-10 w-10 rounded-lg flex justify-center items-center">
                    1
                  </span>
                  <span className="bg-[#C6AEFF]  h-10 w-10 rounded-lg flex justify-center items-center cursor-pointer">
                    -
                  </span>
                </div>
                <div className="cursor-pointer">
                  <AiOutlineClose className="text-2xl text-primary" />
                </div>
              </li>
              <li className="bg-white p-4 rounded-lg shadow-md text-primary flex justify-between">
                <div className="flex justify-center items-center w-[20%]">
                  <img
                    src="/assets/pandol.png"
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="h3">Pandol Extra</h3>
                  <span className="text-sm lg:text-lg">10 LE</span>
                </div>
                <div className=" flex flex-col justify-between bg-[#D8C9FF] rounded-lg">
                  <span className="bg-primary text-white  h-10 w-10 rounded-lg flex justify-center items-center cursor-pointer">
                    +
                  </span>
                  <span className=" h-10 w-10 rounded-lg flex justify-center items-center">
                    1
                  </span>
                  <span className="bg-[#C6AEFF]  h-10 w-10 rounded-lg flex justify-center items-center cursor-pointer">
                    -
                  </span>
                </div>
                <div className="cursor-pointer">
                  <AiOutlineClose className="text-2xl text-primary" />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <form className="flex-1 rounded-lg bg-[#C8B3FC54] p-4 text-primary h-max flex flex-col gap-4">
          <h3 className="h3">Summary</h3>
          <div className="flex justify-between items-center rounded-lg bg-white px-4 py-2">
            <input
              type="text"
              placeholder="Enter Discount Code"
              className="w-full bg-transparent py-2 hover:outline-none focus:outline-none placeholder-[#C8B3FC]"
            />
            <span>Apply</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Subtotal</span>
            <span>EGP 100</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Delivery</span>
            <span className="font-semibold">FREE</span>
          </div>
          <div className="h-px w-full bg-primary"></div>
          <div className="flex justify-between items-center">
            <span>Total</span>
            <span className="font-semibold">EGP 100</span>
          </div>
          <button
            type="submit"
            className="bg-primary text-white p-4 rounded-lg w-full font-semibold"
          >
            Checkout
          </button>
        </form>
      </div>
    </div>
  );
};

export default Cart;
