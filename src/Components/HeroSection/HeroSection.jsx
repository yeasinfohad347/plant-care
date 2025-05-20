import React from "react";
import AnimatedPlantSlider from "./AnimatedPlantSlider";

const HeroSection = () => {
  return (
    <div className="py-20 w-11/12 mx-auto flex flex-col md:flex-row items-center gap-10 ">
      <div className="md:w-1/2 text-center md:text-left space-y-4">
        <h1 className="text-4xl font-bold mb-4">Keep Your Plants Alive</h1>
        <p className="text-gray-700">
          Individual care schedule and reminders for your plants,
          recommendations, step-by-step guides, identification, light meter, and
          more. Keep your plants alive with Planta!
        </p>
        <a className="btn bg-[#325432] text-white rounded-2xl">Explore More</a>
      </div>

      <div className="md:w-1/2 w-full">
        <AnimatedPlantSlider />
      </div>
    </div>
  );
};

export default HeroSection;
