import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../mocks/Header";
import Footer from "../mocks/Footer";
import Tours1 from "../components/Tours/Tours1";
import Tours2 from "../components/Tours/Tours2";
import Booking1 from "../components/Booking/Booking1";
import Booking2 from "../components/Booking/Booking2";
import Checkout1 from "../components/Checkout/Checkout1";
import Checkout2 from "../components/Checkout/Checkout2";
import ThankYou1 from "../components/ThankYou/ThankYou1";
import ThankYou2 from "../components/ThankYou/ThankYou2";
import Whatsapp1 from "../components/Whatsapp";



const ThankYou = () => {
 


  return (
    <>
     <Whatsapp1/>
      <Header />
      <ThankYou1 />
      <ThankYou2/>
      <Footer />
    </>
  )



}


export default ThankYou