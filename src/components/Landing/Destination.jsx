import React, { useState } from "react";

import Destination1 from "../../assets/Images/Comingsoon.png";
import Destination2 from "../../assets/Images/Zakynthosheader.png";
import Destination3 from "../../assets/Images/Destination3.png";
import india from "../../assets/Images/india-1.png";
import { Link } from "react-router-dom";
const Destination = () => {



    return (
        <>
     <section className="Destination">
        <div className="container">
            <div className="main-Destination">
                <div className="Destination-h2">
                <h2>Destination</h2>
                </div>
       

                <div className="Destination-box">
                <div className="Destination-main-box">
                <div className="Destination-card">
                    <div className="Destination-card-img">
                        <img src={Destination1} alt="" />
                    </div>
                    <div className="Destination-card-hover">
                        <img src={india} alt="" />
                        
                        <h2>Coming Soon</h2>
                        <div className="line-box"></div>
                        <Link
            to="/Tours"
            className="none-list"
            onClick={() => handleChangeIndex(0)}
          >        <button>View All Tour</button></Link>
                    </div>
                </div>
                <p>Coming Soon</p>
                </div>

                <div className="Destination-main-box">
                <div className="Destination-card">
                    <div className="Destination-card-img">
                        <img src={Destination2} alt="" />
                    </div>
                    <div className="Destination-card-hover">
                        <img src={india} alt="" />
                   
                        <h2>7 Tours</h2>
                        <div className="line-box"></div>
                        <Link
            to="/Tours"
            className="none-list"
            onClick={() => handleChangeIndex(0)}
          >        <button>View All Tours</button></Link>
                 
                    </div>
                </div>
                <p>Zakynthos </p>
                </div>


                <div className="Destination-main-box">
                <div className="Destination-card">
                    <div className="Destination-card-img">
                        <img src={Destination1} alt="" />
                    </div>
                    <div className="Destination-card-hover">
                        <img src={india} alt="" />
                     
                        <h2>Coming Soon</h2>
                        <div className="line-box"></div>
                        <Link
            to="/Tours"
            className="none-list"
            onClick={() => handleChangeIndex(0)}
          >        <button>View All Tour</button></Link>
                    </div>
                </div>
                <p>Coming Soon</p>
                </div>
                </div>
            </div>
        </div>
     </section>
        </>
    )



}


export default Destination