import React, { useState } from "react";
import classNames from "classnames";
import { useWindowSize } from "@react-hook/window-size";
import Slider from "@material-ui/core/Slider";
import { withStyles } from "@material-ui/core/styles";
import stephdad from "../pictures/steph-dad.JPG";
import shanedad from "../pictures/shane-dad.JPG";
import FallingCard from "../FallingCard";

function convertRange(value, r1, r2) {
  return ((value - r1[0]) * (r2[1] - r2[0])) / (r1[1] - r1[0]) + r2[0];
}

const getValueText = (value) => {
  const length = convertRange(value, [0, 100], [16, 24]);
  console.log("getValueText -> length", length);
  return `${length.toFixed(1)}"`;
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
  const [value, onChange] = useState();
  return (
    <div className="flex w-full flex-col items-center justify-between space-y-6 z-10">
      <h1 className="font-sans font-bold text-6xl text-teal-500 text-center text-glow">
        How long will he be?
      </h1>
      <div className="w-64">
        <CustomSlider
          valueLabelFormat={getValueText}
          aria-labelledby="discrete-slider-always"
          step={1}
          valueLabelDisplay="on"
          value={value}
          defaultValue={50}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
      <button
        onClick={nextSlide}
        disabled={!value}
        className={classNames(
          !value ? "opacity-50 cursor-not-allowed" : "hover:bg-teal-700",
          "bg-teal-300 text-white font-bold py-2 px-4 rounded w-64"
        )}
      >
        Submit
      </button>
    </div>
  );
};

const LengthSlide = ({ nextSlide }) => {
  const [width, height] = useWindowSize();

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex w-full h-full items-center justify-center absolute z-0">
        <FallingCard xPos={-(width / 8)} yPos={0} picture={stephdad} />
        <FallingCard xPos={width / 8} yPos={0} picture={shanedad} />
      </div>
      <SlideContent nextSlide={nextSlide} />
    </div>
  );
};

export default LengthSlide;
