import React from "react";
import { FiSearch } from "react-icons/fi";

const Search = () => {
  return (
    <div>
      <div className="container flex">
        <div className="flex-1 flex flex-col gap-8 justify-center items-center py-8 lg:gap-16 lg:items-start">
          <h1 className="h1 bg-gradient-to-b from-[#000000] to-[#C8B3FC] text-transparent bg-clip-text text-center lg:text-start">
            Better Pharmacy
            <br />
            Delivery, For <br /> Your Health
          </h1>
          <div className="bg-[#C2AEF39C] rounded-[32px] flex items-center justify-between gap-2 p-4 w-full lg:max-w-lg">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 bg-transparent focus:outline-none placeholder-white text-white"
            />
            <FiSearch className="text-3xl text-white" />
          </div>
        </div>
        <div className="flex-1 items-center justify-end hidden lg:flex">
          <img src="/assets/delivery-boy.svg" alt="delivery-boy" />
        </div>
      </div>
    </div>
  );
};

export default Search;
