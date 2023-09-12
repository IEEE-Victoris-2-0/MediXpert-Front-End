import React from "react";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import SingleCategory from "./pages/SingleCategory";

const App = () => {
  return (
    <div className="font-poppins overflow-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/category/:category" element={<SingleCategory />} />
      </Routes>
    </div>
  );
};

export default App;
