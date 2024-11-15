import React from "react";
import { Link } from "react-router-dom";
import Header from "../mocks/Header";
import Footer from "../mocks/Footer";
import Contact1 from "../components/Contact/Contact1";
import Contact2 from "../components/Contact/Contact2";
import Contact3 from "../components/Contact/Contact3";
import Memorable1 from "../components/Memorable/Memorable1";
import Memorable2 from "../components/Memorable/Memorable2";
import Whatsapp1 from "../components/Whatsapp";




const Memorable = () => {


  return (
    <>
     <Whatsapp1/>
      <Header/>
      <Memorable1/>
      <Memorable2/>
      <Footer/>
    </>
  )



}


export default Memorable