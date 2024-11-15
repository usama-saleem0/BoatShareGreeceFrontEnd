import React from "react";
import { Link } from "react-router-dom";
import Header from "../mocks/Header";
import Footer from "../mocks/Footer";
import About1 from "../components/About/About1";
import About2 from "../components/About/About2";
import About3 from "../components/About/About3";
import About4 from "../components/About/About4";
import Whatsapp1 from "../components/Whatsapp";



const About = () => {


  return (
    <>
    <Whatsapp1/>
      <Header/>
      <About1/>
      <About2/>
      <About3/>
      <About4/>
      <Footer/>
    </>
  )



}


export default About