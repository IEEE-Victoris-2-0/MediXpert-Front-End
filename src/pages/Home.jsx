import React from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import OurCategories from "../components/OurCategories";
import DrugsGrid from "../components/DrugsGrid";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <OurCategories />
      <DrugsGrid />
    </div>
  );
};

export default Home;
