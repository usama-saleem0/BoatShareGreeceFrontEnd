import React from "react";
import { Link } from "react-router-dom";
import Drop5 from "../drop-dwon/Drop5";
import History from "../../assets/Images/my.jpg";
import who from "../../assets/Images/newp3.png";
const About4 = () => {


    return (
        <>

            <section className="Our-History">
                <div className="container">
                    <div className="main-Our-History">
                        <div className="Our-History-box">
                            <div className="Our-History-img">
                                <img src={who} alt="" />
                            </div>
                            <div className="Our-History-tital ">
                                <h2>Who We Are</h2>
                                <p>Coming to Greece for your summer holiday? Then you’ve come to the right place.

I’ve worked in tourism in Greece for over a decade and within that time I have come to  realise that we are missing offering an exceptional tour option.  

Up until now most people have been priced out of having an experience that we are offering. Why are experiences like this only accessible to the wealthy? 

If you come to Greece for a summer holiday it’s very likely you’d like to do a boat tour, I mean why not? Greece is famous for its beautiful coastlines, beaches and clear blue sea. 

The problem is up until now you have had 1 of 2 options. A large often crowded group boat or an expensive out of your price range private boat.

Wouldn’t you like to know exactly what boat you’ll be going on and how many people will be onboard before you book? Well you can see all of that information prior to booking on 
BoatShareGreece.com
</p>
                            </div>
                        </div>
                        <div className="Our-History-box">
                            <div className="Our-History-tital">
                                {/* <h2>Our History</h2> */}
                                <p>
We offer you a more private, personal & VIP experience without the huge cost. 

We do this by booking private boats and selling the seats individually. 
This means that you will have a VIP experience for a fraction of the price. Boat Share Greece will find people like yourself to share the boat with splitting the cost.

So how does it work? Go to the homepage, select the location you wish to visit and research the tours available. Once you’ve booked your tour you will receive booking confirmation and your e-ticket. 

Tourists who have joined us this summer have had an experience they never thought was possible. The positive reviews, happy smiles and photographs made me realise this is something I must offer to a wider audience.  

If you want to chat directly to me please click the WhatsApp logo.  

Don’t leave your once in a life time experience to chance.

Affordable Luxury with BoatshareGreece.com

</p>
<p>
Ian Roberts
</p>
                            </div>
                            <div className="Our-History-img">
                                <img src={History} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )



}


export default About4