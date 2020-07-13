import React from "react";
import { useWindowSize } from "@react-hook/window-size";
import deck1 from "../pictures/deck1.jpg";
import deck2 from "../pictures/deck2.jpg";
import deck3 from "../pictures/deck3.jpg";
import FallingCard from "../FallingCard";

const SlideContent = ({ nextSlide }) => {
  return (
    <div className="flex w-full flex-col container items-center justify-between space-y-4 md:space-y-6 z-10 rounded-lg">
      <h1
        align="center"
        className="text-teal-500 text-3xl md:text-5xl font-black text-stroke uppercase"
      >
        Welcome to our virtual baby shower!
      </h1>
      <p className="w-full px-4 md:px-8 md:w-1/2 text-xl text-center font-medium text-glow">
        We wish more than anything that you could all be with us in person to
        celebrate and help us welcome our baby, but we still want to hear all of
        your wishes for him, your advice for us, and your guesses for which one
        of us he'll look like. We can't wait for you to meet him soon enough!
      </p>
      <p className="w-full px-4 md:px-8 md:w-1/2 text-center text-glow font-thin italic text-glow">
        Guess the most correct answers and receive a prize from the
        parents-to-be!
      </p>
      <button
        onClick={nextSlide}
        className="bg-teal-300 text-white font-bold py-2 px-4 rounded w-64 shadow-lg hover:bg-teal-700 shadow-lg"
      >
        ENTER
      </button>
      <button
        onClick={() => {
          window.location = "https://babylist.com/boyar";
        }}
        className="bg-white text-teal-300 font-bold py-2 px-4 rounded w-64 hover:bg-teal-700 border-teal-300 border-2"
      >
        VISIT REGISTRY
      </button>
    </div>
  );
};

const WelcomeSlide = ({ nextSlide }) => {
  const [width, height] = useWindowSize();

  return (
    <div className="w-screen h-screen flex items-center justify-center pb-32 md:pb-0">
      <div className="hidden md:flex w-full h-full items-center justify-center absolute z-0">
        <FallingCard xPos={-(width / 3)} yPos={0} picture={deck1} portrait />
        <FallingCard xPos={0} yPos={-(height / 3)} picture={deck2} portrait />
        <FallingCard xPos={width / 3} yPos={0} picture={deck3} portrait />
      </div>
      <SlideContent nextSlide={nextSlide} />
    </div>
  );
};

export default WelcomeSlide;
