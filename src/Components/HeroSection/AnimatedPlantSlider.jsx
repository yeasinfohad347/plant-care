import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AnimatedPlantSlider = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch("/slider.json") // make sure file is in `public/sliderData.json`
      .then((res) => res.json())
      .then((data) => {
        console.log("Slider data:", data);
        setSlides(data);
      })
      .catch((err) => console.error("Failed to load slider data:", err));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="w-full rounded-xl">
      {slides.length > 0 ? (
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id}>
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-100 object-cover rounded-xl"
              />
            </div>
          ))}
        </Slider>
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </div>
  );
};

export default AnimatedPlantSlider;
