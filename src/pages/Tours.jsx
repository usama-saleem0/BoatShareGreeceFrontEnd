import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../mocks/Header";
import Footer from "../mocks/Footer";
import Tours1 from "../components/Tours/Tours1";
import Tours2 from "../components/Tours/Tours2";
import { useDispatch } from "react-redux";
import { getTours } from "../Redux/Features/ToursSlice";
import Whatsapp1 from "../components/Whatsapp";



const Tours = () => {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getTours())
  },[])


  return (
    <>
     <Whatsapp1/>
      <Header/>
      <Tours1/>
      <Tours2/>
      <Footer/>
    </>
  )



}


export default Tours