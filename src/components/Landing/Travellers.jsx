import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import t1 from "../../assets/Images/t1.png";
import t2 from "../../assets/Images/t2.png";
import t3 from "../../assets/Images/t3.png";
import t4 from "../../assets/Images/t4.png";
import t5 from "../../assets/Images/t5.png";
import t6 from "../../assets/Images/t6.png";
import t7 from "../../assets/Images/t7.png";
import t8 from "../../assets/Images/t8.png";
import t9 from "../../assets/Images/t9.png";

const testimonials = [
  {
    img: t1,
    name: "Dutchy123",

    message: "Props to you man, the tour was amazing, our captain Pandalis was a great guy who showed us all around and made sure we didnt miss out any of the fun. We all had a great time!",
  },
  {
    img: t2,
    name: "tonyandsue2017",
    message: "Ian Roberts is very knowledgeable and arranged a Small Group Turtle Tour for us. Cost of €60 each but well worth it. There were 6 of us in a small boat with a guide who was lovely.  3 hours on the boat and in the Sea. Visited the Turtle Sanctuary, saw loads of Turtles and a Sea Lion. I would love to go again and would definitely book with them again.",
  },
  {
    img: t3,
    name: "gplaw",
    message: "Big shout out to Ian who facilitated a wonderful boat trip from hotel which took us around the blue caves etc with a stay at the shipwreck. Ian was very knowledgeable about the island and was a fantastic host and is definitely worth asking about any trips with him..big thank you Ian we had a fantastic time with our little group on board!",
  },
  {
    img: t4,
    name: " 1KikiDee",
    message: "It was so easy to book boat trips with Ian. Everything ran smoothly, we booked a boat trip via Ian and had a great day. He handles everything well and ensures the guests are happy and can access everything they need. Everything was great.",
  },


  {
    img: t5,
    name: " Joshua E",
    message: "First of the island of Zakynthos is an absolutely beautiful island! We traveled from Texas USA Me and my now fiancé In August where i proposed here on a boat provided by Ian robert’s. I was able to communicate with him via whatsapp 2 weeks prior to arrival and he made sure i was taking care of! Amazing experience ",
  },



  {
    img: t6,
    name: " KBS ",
    message: "We had a couple of day trips on private boats booked through Ian Roberts. He was very helpful, friendly and not in the slightest bit pushy which we liked. The boat we picked were skippered by Pandalis who was attentive and catered for our requirements. These trips were the pinnacle of the holiday for me: swimming with turtles, swimming into caves and visiting white sanded coves.",
  },





  {
    img: t7,
    name: " Les & Sarah ",
    message: "Thanks again for recommending the boat trip today. Brilliant day. Thanks to Pantelis what a lovely experience on the boat today, amazing scenery, fantastic swim through the caves, the water was so beautiful & we saw 3 turtles 🐢.Fantastic to go on a small boat with only 6 people in total, &an informative Captain. ",
  },




{
  img: t8,
    name: " Jane & Dave ",
      message: "We had an absolutely gorgeous experience which was very relaxing. We really enjoyed the more personal touch offered by a smaller boat/group. It meant that it felt less intimidating towards the turtles we encountered. Our guide was very knowledgeable and friendly. The caves and beautiful sea were absolutely stunning",
  },


{
  img: t9,
    name: " Peter & Herma ",
      message: "The Small Group Turtle Tour we did was fantastic. Just with 6 persons and the guide on a small boat. We have seen some turtles, they are wunderfull. The small boat can float into the caves, which is really great. We had a very nice swim-stop at the beach and later we have been swimming through a very small tunnel in the rocks; that was an amazing experience. Thanx again Ian for this perfect trip. Greetings, ",
  },
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600, // for screens 600px or smaller
        settings: {
          slidesToShow: 1, // show one card
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="Testimonial">
      <div className="container">
        <div className="main-Testimonial">
          <div className="Testimonial-taital">
            <h2>Travellers Experiences</h2>
          </div>
          <div className="Testimonial-box">
            <div className="testimonial-slider">
              <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="testimonial-card">
                    <div className="testimonial-name-tital">
                      <div className="testimonial-dp">
                        <img src={testimonial.img} alt={testimonial.name} />
                      </div>
                      <span>
                        <h2>{testimonial.name}</h2>
                      </span>
                    </div>
                    <p>{testimonial.message}</p>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
