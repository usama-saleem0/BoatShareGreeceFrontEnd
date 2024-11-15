import React from "react";
import { Link } from "react-router-dom";
import Drop5 from "../drop-dwon/Drop5";
import Quality1 from "../../assets/Images/Quality1.png";
import Quality2 from "../../assets/Images/Quality2.png";
import Quality3 from "../../assets/Images/Quality3.png";
const About3 = () => {


    return (
        <>
            <section className="Quality " style={{backgroundColor:"#0F59AE"}}>
                <div className="container">
                    <div className="main-Quality">
                       <div className="Quality-card">
                       <div className="Quality-min-card color-change">
                            <img src={Quality1} alt="" />
                 
                        <p>This is a safe space & everyone is welcome. We are all equal. </p>
                        </div>
                     
                       </div>

                       <div className="Quality-card  more-Quality about3-border">
                        <div className="Quality-min-card color-change">
                            <img src={Quality2} alt="" />
                     
                        <p>You & your safety is our priority. All of our captains have been trained and have the necessary licenses, inurance & documentation. We work with trusted companies with a perfect safety record. All necessary life saving devices & equipment onboard. </p>
                        </div>
                     
                       </div>


                       <div className="Quality-card  more-Quality about3-border">
                       <div className="Quality-min-card color-change">
                            <img src={Quality3} alt="" />
        
                        <p>We require all passengers to be polite & courteous to fellow passengers & captain at all times. </p>
                        </div>
                     
                       </div>
                    </div>
                </div>
            </section>
        </>
    )



}


export default About3