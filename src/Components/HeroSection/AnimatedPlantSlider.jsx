import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AnimatedPlantSlider = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch("/slider.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Slider data:", data);
        setSlides(data);
      })
      // .catch((err) => console.error("Failed to load slider data:", err));
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="w-full overflow-hidden">
      {slides.length > 0 ? (
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id} className="relative">
              {/* Background Image */}
              <img
                src={slide.image}
                className="w-full h-[600px] object-cover opacity-50"
              />

              {/* Content */}
              <div className="absolute inset-0 bg-transparent  flex flex-col justify-center items-center text-white px-6 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#008236]">
                  {slide.title}
                </h2>
                <p className="text-base md:text-xl max-w-2xl text-[#234823] font-bold">{slide.content}</p>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <p className="text-center py-10">Loading...</p>
      )}
    </div>
  );
};

export default AnimatedPlantSlider;
