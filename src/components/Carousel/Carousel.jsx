import React from 'react';
import Slider from 'react-slick';

const Carousel = ({images}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

//   const images = [
//     "http://res.cloudinary.com/dcd0ad1pk/image/upload/v1727102751/n9vgr2uqtgpjbbxuo7ph.jpg",
//     "http://res.cloudinary.com/dcd0ad1pk/image/upload/v1727102752/nuvou1u6znt7shhduvit.jpg",
//     "http://res.cloudinary.com/dcd0ad1pk/image/upload/v1727102753/piwsihlpn0wdx0ky7fjr.jpg",
//     // Add more image URLs as needed
//   ];

  return (
    <div>
      <Slider {...settings}>
        {images?.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} style={{ width: '100%' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
