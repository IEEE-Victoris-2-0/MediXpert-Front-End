import React from "react";
import Navbar from "../components/Navbar";
import { FiSearch } from "react-icons/fi";

const Map = () => {
  return (
    <div>
      <Navbar />
      <div className="container min-h-[calc(100vh-120px)] flex flex-col justify-center items-center gap-8 lg:flex-row py-8">
        <div className="flex flex-col gap-8 justify-center items-center py-8">
          <h1 className="h1 bg-gradient-to-b from-[#000000] to-[#C8B3FC] text-transparent bg-clip-text text-center">
            Find your nearest pharmacy
          </h1>
          <div className="bg-[#C2AEF39C] rounded-xl flex items-center justify-between gap-2 p-4 w-full lg:max-w-xl">
            <input
              type="text"
              placeholder="Search by location"
              className="w-full p-2 bg-transparent focus:outline-none placeholder-white text-white"
            />
            <FiSearch className="text-3xl text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
