import React from "react";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import SingleCategory from "./pages/SingleCategory";
import SingleDrug from "./pages/SingleDrug";
import CallDr from "./pages/CallDr";

const App = () => {
  return (
    <div className="font-poppins overflow-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/category/:category" element={<SingleCategory />} />
        <Route path="/call-dr" element={<CallDr />} />
        <Route path="/drug/:drug" element={<SingleDrug />} />
      </Routes>
    </div>
  );
};

export default App;
