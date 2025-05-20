import React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import HomeLayouts from '../Layouts/HomeLayouts';
import Home from '../Pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element:<HomeLayouts/>,
    children:[
        {
            index:true,
            path:'/',
            element:<Home/>
        }
    ]
  },
]);


export default router;