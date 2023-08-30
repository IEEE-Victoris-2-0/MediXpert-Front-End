import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex gap-4">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/signup">Signup</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/cart">Cart</NavLink>
      <NavLink to="/saved">Saved</NavLink>
      <NavLink to="/map">Map</NavLink>
      <NavLink to="/userprofile">UserProfile</NavLink>
    </nav>
  );
};

export default Navbar;
