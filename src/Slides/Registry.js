import React from "react";
import { useWindowSize } from "@react-hook/window-size";
import stroller from "../pictures/stroller.JPG";
import nursery from "../pictures/nursery.jpg";
import porch from "../pictures/porch.JPG";
import FallingCard from "../FallingCard";

const SlideContent = ({ nextSlide }) => {
  return (
    <div className="flex w-full flex-col items-center justify-between space-y-6 z-10">
      <h1
        align="center"
        className="text-teal-500 text-5xl font-black text-glow uppercase"
      >
        Thank you!
      </h1>
      <button
        onClick={() => {
          window.location = "https://babylist.com/boyar";
        }}
        className="bg-teal-300 text-white font-bold py-2 px-4 rounded w-64 hover:bg-teal-700"
      >
        VISIT REGISTRY
      </button>
    </div>
  );
};

const RegistrySlide = ({ nextSlide }) => {
  const [width, height] = useWindowSize();

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex w-full h-full items-center justify-center absolute z-0">
        <FallingCard xPos={-(width / 3)} yPos={0} picture={stroller} portrait />
        <FallingCard xPos={0} yPos={-(height / 3)} picture={porch} />
        <FallingCard xPos={width / 3} yPos={0} picture={nursery} portrait />
      </div>
      <SlideContent nextSlide={nextSlide} />
    </div>
  );
};

export default RegistrySlide;
