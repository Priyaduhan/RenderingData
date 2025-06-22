import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ additionalImages }) => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full max-w-xs sm:max-w-md mx-auto">
      <Slider {...settings}>
        {additionalImages.map((pic, index) => (
          <div key={index} className="flex justify-center">
            <img
              src={pic}
              alt={`Slide ${index}`}
              className="h-[220px] sm:h-[300px] w-full object-contain rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
