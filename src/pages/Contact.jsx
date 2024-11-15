import React from "react";
import { Link } from "react-router-dom";
import Header from "../mocks/Header";
import Footer from "../mocks/Footer";
import Contact1 from "../components/Contact/Contact1";
import Contact2 from "../components/Contact/Contact2";
import Contact3 from "../components/Contact/Contact3";
import Whatsapp1 from "../components/Whatsapp";




const Contact = () => {


  return (
    <>
     <Whatsapp1/>
      <Header/>
      <Contact1/>
      <Contact2/>
      <Contact3/>
      <Footer/>
    </>
  )



}


export default Contact