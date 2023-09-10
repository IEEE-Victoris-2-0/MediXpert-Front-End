import React from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import OurCategories from "../components/OurCategories";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <OurCategories />
    </div>
  );
};

export default Home;
