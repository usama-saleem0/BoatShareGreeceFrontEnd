import React, { useState } from "react";
import Gallerya1 from "../../assets/Images/hello1.jpeg";
import Gallerya2 from "../../assets/Images/hello2.jpg";
import Gallerya3 from "../../assets/Images/hello3.jpg";
import Gallerya4 from "../../assets/Images/hello4.jpg";
import Gallerya5 from "../../assets/Images/hello5.jpg";
import Gallerya6 from "../../assets/Images/hello6.jpeg";
import Gallerya7 from "../../assets/Images/hello7.jpeg";
import Gallerya8 from "../../assets/Images/hello8.jpeg";
import Gallerya9 from "../../assets/Images/hello9.jpeg";
import Gallerya10 from "../../assets/Images/hello10.jpeg";
import Gallerya11 from "../../assets/Images/hello11.jpeg";
import Gallerya12 from "../../assets/Images/hello12.jpeg";
import Gallerya13 from "../../assets/Images/hello13.jpeg";
import Gallerya14 from "../../assets/Images/hello14.jpeg";
import Gallerya15 from "../../assets/Images/hello15.jpeg";
import Gallerya16 from "../../assets/Images/hello16.jpeg";
import Gallerya17 from "../../assets/Images/hello17.jpeg";
import Gallerya18 from "../../assets/Images/hello18.jpeg";
import Gallerya19 from "../../assets/Images/hello19.jpeg";
import Gallerya20 from "../../assets/Images/hello20.jpeg";
import Gallerya21 from "../../assets/Images/hello21.jpeg";
import Gallerya22 from "../../assets/Images/hello22.jpeg";

const Gallery2 = () => {
  // State to manage whether all cards are shown or only 9
  const [showAll, setShowAll] = useState(false);
  
  // Array of images to loop through
  const images = [
    "http://res.cloudinary.com/dcd0ad1pk/image/upload/v1730381039/n8sbcpeh1phyqwf4wsnl.png",
    "http://res.cloudinary.com/dcd0ad1pk/image/upload/v1730381040/txrmrdholaggdueygzjk.png",
    "http://res.cloudinary.com/dcd0ad1pk/image/upload/v1730381041/g3lso4wnjbbcierzhk3c.png",
    "http://res.cloudinary.com/dcd0ad1pk/image/upload/v1730381042/fqnuge0i6fw0dz2uu6dk.png",
    "http://res.cloudinary.com/dcd0ad1pk/image/upload/v1730381043/bndsoanthmtcyvlr9caq.png",
    "http://res.cloudinary.com/dcd0ad1pk/image/upload/v1730381044/bulabkmvhous8pm56bwu.png",
    "http://res.cloudinary.com/dcd0ad1pk/image/upload/v1730381045/vm8x6a0rhf11nkeuindm.png",
    "http://res.cloudinary.com/dcd0ad1pk/image/upload/v1730381047/rov88teltwsifm63bu2s.png",
    "http://res.cloudinary.com/dcd0ad1pk/image/upload/v1730381048/sygpbobiplsfhova6zr9.png",
    "http://res.cloudinary.com/dcd0ad1pk/image/upload/v1730381049/kolpwce6zm4harcizs17.png",
    "http://res.cloudinary.com/dcd0ad1pk/image/upload/v1730381049/fksemqzlnocuke4xbdos.png",
    "http://res.cloudinary.com/dcd0ad1pk/image/upload/v1730381050/rwy8tt81vr07kloszqyx.png",
    "http://res.cloudinary.com/dcd0ad1pk/image/upload/v1730381052/plemxw7xqzqzggjac6fj.png",
    "http://res.cloudinary.com/dcd0ad1pk/image/upload/v1730381052/lzp8k5htixlvwp0q9e9t.png",
    "http://res.cloudinary.com/dcd0ad1pk/image/upload/v1730381053/yefr6doggllnitlorfgz.png",
    "http://res.cloudinary.com/dcd0ad1pk/image/upload/v1730381054/o2bolhh06tji3nfzyvjw.png",
    "http://res.cloudinary.com/dcd0ad1pk/image/upload/v1730381055/c035avjhtttkzarc53vf.png"
  ];

  // Toggle between showing all or showing only 9 cards
  const handleToggle = () => {
    setShowAll(!showAll); // Toggle the visibility state
  };

  return (
    <section className="Gallery2">
      <div className="container">
        <div className="main-Gallery2">
          <div className="Gallery2-img-box">
            {/* Loop over images array, but show either all or only the first 9 */}
            {images.slice(0, showAll ? images.length : 9).map((image, index) => (
              <div className="Gallery2-card" key={index}>
                <img src={image} alt={`Gallery image ${index + 1}`} />
              </div>
            ))}
          </div>

          {/* Button to toggle between showing all and showing only 9 */}
          <div className="Gallery2-btn">
            <button className="hover-btn" onClick={handleToggle}>
              <span>{showAll ? "Hide" : "View More"}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery2;
