import React, { useState } from "react";
import classNames from "classnames";
import { useWindowSize } from "@react-hook/window-size";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { teal } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";
import steph from "../pictures/steph-flowers.JPG";
import shane from "../pictures/shane-beach.JPG";
import FallingCard from "../FallingCard";

const CustomRadio = withStyles({
  root: {
    color: teal[400],
    "&$checked": {
      color: teal[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const CustomControl = withStyles({
  label: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: teal[500],
  },
})((props) => <FormControlLabel {...props} />);

const SlideContent = ({ nextSlide }) => {
  const [value, onChange] = useState();
  return (
    <div className="flex w-full flex-col items-center justify-between space-y-6 z-10">
      <h1 className="font-sans font-bold text-5xl text-teal-500 text-center text-glow">
        What color hair will he have?
      </h1>
      <div className="w-64">
        <RadioGroup
          aria-label="hairColor"
          name="hairColor"
          onChange={(e) => onChange(e.target.value)}
        >
          <CustomControl
            value="blonde"
            control={<CustomRadio value="blonde" />}
            label="Blonde"
            style={{ fontSize: 48 }}
          />
          <CustomControl
            value="brown"
            control={<CustomRadio />}
            label="Brown"
          />
          <CustomControl value="red" control={<CustomRadio />} label="Red" />
          <CustomControl
            value="black"
            control={<CustomRadio />}
            label="Black"
          />
        </RadioGroup>
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

const HairSlide = ({ nextSlide }) => {
  const [width, height] = useWindowSize();

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex w-full h-full items-center justify-center absolute z-0">
        <FallingCard xPos={-(width / 4)} yPos={0} picture={steph} />
        <FallingCard xPos={width / 4} yPos={0} picture={shane} />
      </div>
      <SlideContent nextSlide={nextSlide} />
    </div>
  );
};

export default HairSlide;
