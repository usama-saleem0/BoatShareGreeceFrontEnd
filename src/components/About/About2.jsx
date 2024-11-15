import React from "react";
import { Link } from "react-router-dom";
import Charter from "../../assets/Images/Charter.png";


const About2 = () => {


    return (
        <>
          <section className="Charter">
            <div className="container">
                <div className="main-Charter">
                    <div className="Charter-tital">
                        <h2>Affordable Luxury</h2>
                        <p>Tours for everyone & every budget, Speak directly with someone now by clicking the WhatsApp logo</p>
                    </div>

                    <div className="Charter-video">
    <video 
        src='https://boatsharegreece.com/assets/BoatshareVideo.mp4' 
        controls 
        autoPlay 
        loop 
        muted 
        style={{ width: '100%', height: 'auto' }} 
    >
        Your browser does not support the video tag.
    </video>
    {/* <img src={Charter} alt="" /> */}
</div>
                </div>
            </div>
          </section>
        </>
    )



}


export default About2