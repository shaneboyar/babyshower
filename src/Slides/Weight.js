import React, { useState } from "react";
import { useWindowSize } from "@react-hook/window-size";
import Slider from "@material-ui/core/Slider";
import { withStyles } from "@material-ui/core/styles";
import stephmom from "../pictures/steph-mom.JPG";
import shanemom from "../pictures/shane-mom.JPG";
import FallingCard from "../FallingCard";

function convertRange(value, r1, r2) {
  return ((value - r1[0]) * (r2[1] - r2[0])) / (r1[1] - r1[0]) + r2[0];
}

const getValueText = (value, setValue) => {
  const weight = Math.floor(convertRange(value, [0, 100], [96, 192]));
  const pounds = Math.floor(weight / 16);
  const ounces = weight % 16;
  setValue(`${pounds}lbs ${ounces}oz`);
  return `${pounds}lbs ${ounces}oz`;
};

const CustomSlider = withStyles({
  valueLabel: {
    top: -22,
    "& *": {
      background: "transparent",
      color: "#000",
      width: "5rem",
      fontSize: "1rem",
    },
  },
})(Slider);

const SlideContent = ({ nextSlide }) => {
  const [, setValue] = useState("9lbs 0oz");
  return (
    <div className="flex w-full flex-col container items-center justify-between space-y-4 md:space-y-6 z-10">
      <h1 className="text-teal-500 text-3xl md:text-5xl font-black text-center text-glow">
        How much will he weigh?
      </h1>
      <div className="w-64">
        <CustomSlider
          valueLabelFormat={(value) => getValueText(value, setValue)}
          aria-labelledby="discrete-slider-always"
          step={1}
          valueLabelDisplay="on"
          defaultValue={50}
        />
      </div>
      <button
        onClick={nextSlide}
        className="bg-teal-300 text-white font-bold py-2 px-4 rounded w-64"
      >
        Submit
      </button>
    </div>
  );
};

const WeightSlide = ({ nextSlide }) => {
  const [width] = useWindowSize();

  return (
    <div className="w-screen h-screen flex items-center justify-center pb-32 md:pb-0">
      <div className="hidden md:flex w-full h-full items-center justify-center absolute z-0">
        <FallingCard xPos={-(width / 4)} yPos={0} picture={stephmom} />
        <FallingCard xPos={width / 4} yPos={0} picture={shanemom} portrait />
      </div>
      <SlideContent nextSlide={nextSlide} />
    </div>
  );
};

export default WeightSlide;
