import React from "react";
import { Link } from "react-router-dom";
import Header from "../mocks/Header";
import Footer from "../mocks/Footer";
import Tours1 from "../components/Tours/Tours1";
import Tours2 from "../components/Tours/Tours2";
import Booking1 from "../components/Booking/Booking1";
import Booking2 from "../components/Booking/Booking2";
import Whatsapp1 from "../components/Whatsapp";



const Booking = () => {


  return (
    <>
     <Whatsapp1/>
      <Header />
      <Booking1 />
      <Booking2/>
      <Footer />
    </>
  )



}


export default Booking