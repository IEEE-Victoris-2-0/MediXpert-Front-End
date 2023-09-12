import React from "react";
import { NavLink } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { BsFillTelephoneFill, BsFillCartFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="bg-primary py-4 text-white">
      <div className="container flex items-center justify-between">
        <NavLink to="/" className="w-20 h-20">
          <img
            src="/assets/logo.svg"
            alt="logo"
            className="w-full h-full object-contain"
          />
        </NavLink>
        <ul className="flex items-center gap-4 font-semibold">
          <NavLink className="flex gap-2 items-center" to="/location">
            <MdLocationPin />
            <span>Location</span>
          </NavLink>
          <NavLink className="flex gap-2 items-center" to="/call-dr">
            <BsFillTelephoneFill />
            <span>Call Dr</span>
          </NavLink>
          <NavLink className="flex gap-2 items-center" to="/favorites">
            <AiFillHeart />
            <span>Favorites</span>
          </NavLink>
          <NavLink className="flex gap-2 items-center" to="/cart">
            <BsFillCartFill />
            <span>Cart</span>
          </NavLink>
          <NavLink className="flex gap-2 items-center" to="/login">
            <FaUserAlt />
            <span>Login</span>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
