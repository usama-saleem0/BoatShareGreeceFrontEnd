import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Lhero from "../components/Landing/Lhero";
import Header from "../mocks/Header";
import Booking from "../components/Landing/Booking";
import Destination from "../components/Landing/Destination";
import Tours from "../components/Landing/Tours";
import Quality from "../components/Landing/Quality";
import TestimonialSlider from "../components/Landing/Travellers";
import Footer from "../mocks/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getTours } from "../Redux/Features/ToursSlice";

import { getDestinations } from "../Redux/Features/DestinationSlice";
import Whatsapp from "../components/Whatsapp";
import Whatsapp1 from "../components/Whatsapp";


const Landing = () => {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getTours())
    dispatch(getDestinations())
  },[])







  return (
    <>
    

    <Whatsapp1/>

      <Header />
      <Lhero />
      <Booking/>
      <Destination/>
      <Tours/>
      <Quality/>
      <TestimonialSlider/>
      <Footer/>
    </>
  );
};

export default Landing;
