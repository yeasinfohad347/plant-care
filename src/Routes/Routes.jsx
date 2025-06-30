import React from "react";
import { createBrowserRouter } from "react-router";
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
import Loading from "../Pages/Loading";
import ErrorPage from "../Pages/ErrorPage";
import UpdateProfile from "../Pages/UpdateProfile";
import ForgotPassword from "../Pages/ForgotPassword";

// Dashboard
import DashboardLayout from "../Pages/DashboardLayout";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import AllItem from "../Pages/Dashboard/Allitem";
import AddItem from "../Pages/Dashboard/AddItem";
import MyItem from "../Pages/Dashboard/MyItem";

// import AddItem from "../Pages/Dashboard/AddItem";
// import MyItems from "../Pages/Dashboard/MyItems";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "updateProfile", element: <UpdateProfile /> },
      { path: "forgotPassword", element: <ForgotPassword /> },

      {
        path: "addplant",
        element: (
          <PrivetRoute>
            <AddPlant />
          </PrivetRoute>
        ),
      },
      {
        path: "allplants",
        loader: () => fetch("https://plant-care-tracker-server-two.vercel.app/plants"),
        element: <AllPlants />,
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "plants/:id",
        loader: ({ params }) =>
          fetch(`https://plant-care-tracker-server-two.vercel.app/plants/${params.id}`),
        element: (
          <PrivetRoute>
            <PlantDetails />
          </PrivetRoute>
        ),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "profile",
        element: (
          <PrivetRoute>
            <Profile />
          </PrivetRoute>
        ),
      },
      {
        path: "myplants",
        element: (
          <PrivetRoute>
            <MyPlants />
          </PrivetRoute>
        ),
      },
      {
        path: "update-plant/:id",
        loader: ({ params }) =>
          fetch(`https://plant-care-tracker-server-two.vercel.app/plants/${params.id}`),
        element: <UpdatePlant />,
        hydrateFallbackElement: <Loading />,
      },

      // 🧩 Dashboard and its children
      {
        path: "/dashboard",
        element: (
          <PrivetRoute>
            <DashboardLayout />
          </PrivetRoute>
        ),
        children: [
          {
            index: true,
            element: <DashboardHome />,
          },
          {
            path: "/dashboard/all-items",
            loader: () => fetch("https://plant-care-tracker-server-two.vercel.app/plants"),
            element: <AllItem />,
          },
          {
            path: "/dashboard/add-item",
            element: <AddItem />,
          },
          {
            path: "/dashboard/my-items",
            element: <MyItem />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
