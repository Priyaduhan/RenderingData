import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ additionalImages }) => {
  console.log("additionalImages link are", additionalImages);
  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className=" h-[340px] flex flex-col w-[350px] justify-center mx-auto relative z-10">
      <Slider {...settings}>
        {additionalImages.map((pic, index) => {
          return (
            <div key={index}>
              <img
                src={pic}
                alt="image"
                className="h-[300px] w-[250px] mx-auto object-cover rounded-md border-none outline-none"
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
