import React from "react";
import Home from "./home/Home";
import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "./../components/navbar/Navbar";

const MainLayouts = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayouts;
