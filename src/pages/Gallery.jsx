import React from "react";
import { Link } from "react-router-dom";
import Header from "../mocks/Header";
import Footer from "../mocks/Footer";
import Gallery1 from "../components/Gallery/Gallery1";
import Gallery2 from "../components/Gallery/Gallery2";
import Whatsapp1 from "../components/Whatsapp";



const Gallery = () => {


  return (
    <>
     <Whatsapp1/>
      <Header/>
      <Gallery1/>
      <Gallery2/>
      <Footer/>
    </>
  )



}


export default Gallery