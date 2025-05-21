import React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import HomeLayouts from '../Layouts/HomeLayouts';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';

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
          path:'register',
          element:<Register/>
        }
    ]
  },

]);


export default router;