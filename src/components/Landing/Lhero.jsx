import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

 





const Lhero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate()

  const slides = [
    <section className="landing-hero " key={1}>
      <div className="container">
        <div className="main-hero">
          <div className="hero-title">
          <h2>Small capacity boats</h2>
            <p> So beautiful & we saw 3 turtles. Fantastic to go on a small boat with only 6 people in total & an informative Captain. <br /> Les & Sarah. </p>
            <button onClick={()=>navigate('/Tours')}>Explore More</button>
          </div>
        </div>
      </div>
    </section>,
  
    <section className="landing-hero land1" key={2}>
      <div className="container">
        <div className="main-hero">
          <div className="hero-title">
            <h2>A day to remember</h2>
            <p>We had an absolutely gorgeous experience which was very relaxing. We really enjoyed the more personal touch offered by a smaller boat/group. <br /> Jane & Dave.</p>
            <button onClick={()=>navigate('/Tours')}>Explore More</button>
          </div>
        </div>
      </div>
    </section>,
   
    <section className="landing-hero land2" key={3}>
      <div className="container">
        <div className="main-hero">
          <div className="hero-title">
            <h2> Experienced company </h2>
            <p> They are very knowledgeable and arranged a Small Group Turtle Tour for us. There were 6 of us in a small boat with a guide who was lovely. I would love to go again and would definitely book with them again. <br /> Tony & Sue . </p>
            <button onClick={()=>navigate('/Tours')}>Explore More</button>
          </div>
        </div>
      </div>
    </section>,
  
  ];
 

  // Change the slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fade-slider">
      {slides.map((slide, index) => (
        <div key={index} className={`slide ${index === currentSlide ? "active" : ""}`}>
          {slide}
      
        </div>
      ))}
    </div>
  );
};

export default Lhero;
