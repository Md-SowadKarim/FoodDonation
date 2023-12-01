import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="md:flex  justify-center md:justify-between items-center shadow-lg p-3">
        <div className="border-gray-100 p-5 ">
            <img className="h-[60px]" src="./Logo.png" alt="" />
        </div>
      <nav >
        <ul className="flex gap-8 md:text-xl ">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active underline text-[#FF444A]" : ""
              }
            >
              Home
            </NavLink>
            
          </li>
          <li>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active underline text-[#FF444A]" : ""
              }
            >
              Donation
            </NavLink>
            
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active underline text-[#FF444A]" : ""
              }
            >
              Statistics
            </NavLink>
            
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
