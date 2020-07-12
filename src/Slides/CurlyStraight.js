import React, { useState } from "react";
import classNames from "classnames";
import { useWindowSize } from "@react-hook/window-size";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import { teal } from "@material-ui/core/colors";
import steph from "../pictures/steph-lauren.JPG";
import shane from "../pictures/shane-paint.JPG";
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
  const [value, handleChange] = useState("Curly");
  return (
    <div className="flex w-full flex-col items-center justify-between space-y-6 z-10">
      <h1 className="font-sans font-bold text-5xl text-teal-500 text-center text-glow">
        Will his hair be curly or straight?
      </h1>
      <div className="w-64 flex flex-row items-center justify-center">
        <h5 className="font-sans font-bold text-xl text-teal-500 text-center text-glow">
          Curly
        </h5>
        <CustomSwitch
          checked={value === "Straight"}
          onChange={(checked) =>
            handleChange(value === "Curly" ? "Straight" : "Curly")
          }
        />
        <h5 className="font-sans font-bold text-xl text-teal-500 text-center text-glow">
          Straight
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

const CurlyStraightSlide = ({ nextSlide }) => {
  const [width, height] = useWindowSize();

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex w-full h-full items-center justify-center absolute z-0">
        <FallingCard xPos={-(width / 4)} yPos={0} picture={steph} portrait />
        <FallingCard xPos={width / 4} yPos={0} picture={shane} portrait />
      </div>
      <SlideContent nextSlide={nextSlide} />
    </div>
  );
};

export default CurlyStraightSlide;
