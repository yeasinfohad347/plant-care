import React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import HomeLayouts from '../Layouts/HomeLayouts';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import AddPlant from '../Pages/AddPlant';
import AllPlants from '../Pages/AllPlants';

const router = createBrowserRouter([
  {
    path: "/",
    element:<HomeLayouts/>,
    children:[
        {
            index:true,
            path:'/',
            element:<Home/>
        },
        {
            path:'/login',
            element:<Login/>
        },
        {
          path:'/register',
          element:<Register/>
        },
        {
          path:'/addplant',
          element:<AddPlant/>
        },
        {
          path:'/allplants',
          loader:()=>fetch('http://localhost:3000/plants'),
          element:<AllPlants/>
        }
    ]
  },

]);


export default router;