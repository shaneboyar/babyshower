import React, { useState } from "react";
import { useWindowSize } from "@react-hook/window-size";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import { teal } from "@material-ui/core/colors";
import steph from "../pictures/steph-grandpa.JPG";
import shane from "../pictures/shane-dodgers.JPG";
import FallingCard from "../FallingCard";

const CustomSwitch = withStyles({
  switchBase: {
    color: teal[300],
    "&$checked": {
      color: teal[500],
    },
    "&$checked + $track": {
      backgroundColor: teal[500],
    },
  },
  checked: {},
  track: {},
})(Switch);

const SlideContent = ({ nextSlide }) => {
  const [value, handleChange] = useState("Yes");
  return (
    <div className="flex w-full flex-col container items-center justify-between space-y-4 md:space-y-6 z-10">
      <h1 className="text-teal-500 text-3xl md:text-5xl font-black text-center text-glow">
        Will he have eyebrows or not?
      </h1>
      <div className="w-64 flex flex-row items-center justify-center">
        <h5 className="font-sans font-bold text-xl text-teal-500 text-center text-glow">
          Yes
        </h5>
        <CustomSwitch
          checked={value === "No"}
          onChange={(checked) => handleChange(value === "Yes" ? "No" : "Yes")}
        />
        <h5 className="font-sans font-bold text-xl text-teal-500 text-center text-glow">
          No
        </h5>
      </div>
      <button
        onClick={nextSlide}
        className="bg-teal-300 text-white font-bold py-2 px-4 rounded w-64 hover:bg-teal-700"
      >
        Submit
      </button>
    </div>
  );
};

const EyebrowsSlide = ({ nextSlide }) => {
  const [width] = useWindowSize();

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="hidden md:flex w-full h-full items-center justify-center absolute z-0">
        <FallingCard xPos={-(width / 4)} yPos={0} picture={steph} />
        <FallingCard xPos={width / 4} yPos={0} picture={shane} portrait />
      </div>
      <SlideContent nextSlide={nextSlide} />
    </div>
  );
};

export default EyebrowsSlide;
