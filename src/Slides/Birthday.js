import React, { useState } from "react";
import { useWindowSize } from "@react-hook/window-size";
import TextField from "@material-ui/core/TextField";
import stephCake from "../pictures/steph-cake.JPG";
import shaneCake from "../pictures/shane-cake.JPG";
import FallingCard from "../FallingCard";

const SlideContent = ({ nextSlide }) => {
  const [value, onChange] = useState("2020-10-01");
  return (
    <div className="flex w-full flex-col items-center justify-between space-y-6 z-10">
      <h1 className="font-sans font-bold text-5xl text-teal-500 text-center text-glow">
        What day will he be born?
      </h1>
      <TextField
        id="date"
        type="date"
        defaultValue="2017-05-24"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
      <button
        onClick={nextSlide}
        className="bg-teal-300 text-white font-bold py-2 px-4 rounded w-64"
      >
        Submit
      </button>
    </div>
  );
};

const BirthdaySlide = ({ nextSlide }) => {
  const [width] = useWindowSize();

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex w-full h-full items-center justify-center absolute z-0">
        <FallingCard xPos={-(width / 4)} yPos={0} picture={stephCake} />
        <FallingCard xPos={width / 4} yPos={0} picture={shaneCake} portrait />
      </div>
      <SlideContent nextSlide={nextSlide} />
    </div>
  );
};

export default BirthdaySlide;