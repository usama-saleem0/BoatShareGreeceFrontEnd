import React from "react";
import whatsapp from "../assets/Images/whatsapp.png";

const Whatsapp1=()=>{
    const phoneNumber = '+306978131329'; // Enter the phone number in international format (no + or spaces)
    const message = 'Hello! I would like to inquire about your services.'; // Custom message
    
    const handleWhatsAppClick = () => {
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank'); // Open WhatsApp link in a new tab
    };
  

    return (

    <>

     
      <button className="whatapp-btn" onClick={handleWhatsAppClick}><img src={whatsapp} alt="" /></button>
    
    </>

    )




}


export default Whatsapp1