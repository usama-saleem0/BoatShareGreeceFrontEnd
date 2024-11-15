import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../components/sidebar/Dashboard";
import CustomerDetails from "../components/sidebar/CustomerDetails";
import Booking from "../components/sidebar/Booking";
import Destination from "../components/sidebar/Destination";
import Tour from "../components/sidebar/Tour";
import AllToursCards from "../components/sidebar/AllTourCards";

const DashboardRoutes = () => {
  return (
    // ts
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="customerdetails" element={<CustomerDetails />} />
      <Route path="booking" element={<Booking />} />
      <Route path="destination" element={<Destination />} />
      <Route path="tour" element={<Tour />} />



      <Route path="destination/alltours/:name" element={<AllToursCards />} />
    </Routes>
  );
};

export default DashboardRoutes;
