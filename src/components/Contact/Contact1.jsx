import React from "react";
import { Link } from "react-router-dom";
import whatsapp from "../../assets/Images/whatsapp.png";


const Contact1 = () => {


    return (
        <>
          <section className="hero-about">
            <div className="container">
                <div className="main-about1">
                    <div className="about1-tital">
                        <h2>Contact us</h2>
                        <p>You can also contact us directly by clicking the WhatsApp logo </p>
                    </div>
                </div>
            </div>
            {/* <button className="whatapp-btn"><img src={whatsapp} alt="" /></button> */}
          </section>
        </>
    )



}


export default Contact1