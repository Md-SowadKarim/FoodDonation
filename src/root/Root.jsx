import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import Error from './../layouts/error/Error';
  import Home from '../layouts/home/Home.jsx';
  import MainLayouts from './../layouts/MainLayouts';
import Donation from './../layouts/donation/Donation';
import Statistics from './../layouts/statistics/Statistics';
import Details from './../layouts/details/Details';

const Root = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts></MainLayouts>,
      errorElement:<Error></Error>,
      
      children:[
        {
          path: "/",
          element:<Home></Home>,
          loader:()=>fetch("data.json"),
      
        },
        {
          path: "/donation",
          element:<Donation></Donation>,
  
        },
        {
          path: "/statistics",
          element:<Statistics></Statistics>,
  
        },
        {
          path: "/details/:cartId",
          element:<Details></Details>,
          loader:()=>fetch("./data.json"),
      
        },
        
        
      ]
    },
   
  ]);
export default Root
