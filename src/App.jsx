import React from "react";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import SingleDrug from "./pages/SingleDrug";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import ResetPassword from "./pages/ResetPassword";
import PharmacyProfile from "./pages/PharmacyProfile";
import Map from "./pages/Map";
import UserProfile from "./pages/UserProfile";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="font-poppins">
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/drug/:id" element={<SingleDrug />} />
          <Route path="/search" element={<Search />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/pharmacyprofile" element={<PharmacyProfile />} />
          <Route path="/map" element={<Map />} />
          <Route path="/userprofile" element={<UserProfile />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
