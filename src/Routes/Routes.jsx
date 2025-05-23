import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddPlant from "../Pages/AddPlant";
import AllPlants from "../Pages/AllPlants";
import PlantDetails from "../Pages/plantDetails";
import PrivetRoute from "./PrivateRoute";
import Profile from "../Pages/Profile";
import MyPlants from "../Pages/MyPlants";
import UpdatePlant from "../Pages/UpdatePlant";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/addplant",
        element: (
          <PrivetRoute>
            <AddPlant />
          </PrivetRoute>
        ),
      },
      {
        path: "/allplants",
        loader: () => fetch("http://localhost:3000/plants"),
        element: <AllPlants />,
      },
      {
        path: "/plants/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/plants/${params.id}`),
        element: (
          <PrivetRoute>
            <PlantDetails />
          </PrivetRoute>
        ),
      },
      {
        path:'/profile',
        element:<PrivetRoute>
          <Profile/>
        </PrivetRoute>
      },
      {
        path:'/myplants',
        element:
        <PrivetRoute>
          <MyPlants/>
        </PrivetRoute>
      },
      {
        path:'/update-plant/:id',
         loader: ({ params }) =>
          fetch(`http://localhost:3000/plants/${params.id}`),
         element:<UpdatePlant/>
      }
    ],
  },
]);

export default router;
