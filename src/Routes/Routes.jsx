import React, { useEffect } from "react";
import { useLocation, useNavigate, useRoutes } from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/Dashboard";
import Landing from "../pages/landing";
import About from "../pages/About";
import Tours from "../pages/Tours";
import Contact from "../pages/Contact";
import Memorable from "../pages/Memorable";
import Booking from "../pages/Booking";
import Login from "../components/login/Login";
import Singup from "../components/login/singup";
import Gallery from "../pages/Gallery";
import CheckOut from "../pages/Checkout";
import ThankYou from "../pages/Thankyou";
import SearchResults from "../pages/SearchResults";

const Routes = () => {

 


  return useRoutes([
    {
      path: "",
      element: <Landing />,
    },

    {
      path: "",
      element: <Landing />,
    },

    {
      path: "/About",
      element: <About />,
    },

    {
      path: "/Gallery",
      element: <Gallery />,
    },

    {
      path: "/Tours",
      element: <Tours />,
    },

    {
      path: "/Contact",
      element: <Contact />,
    },

    {
      path: "/tour/:id",
      element: <Memorable />,
    },

    {
      path: "/Booking",
      element: <Booking />,
    },
    {
      path: "/checkout",
      element: <CheckOut />,
    },

    {
      path: "/thankyou",
      element: <ThankYou />,
    },

    {
      path: "/adminlogin",
      element: <Login />,
    },

    {
      path: "/Singup",
      element: <Singup />,
    },
    {
      path: "/searchresult/:name",
      element: <SearchResults />,
    },

    {
      path: "/adminboatsharegreecedashboard/*",
      element: <Dashboard />,
    },
  ]);
};

export default Routes;
