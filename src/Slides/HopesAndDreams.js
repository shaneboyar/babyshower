import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

const SlideContent = ({ nextSlide }) => {
  const [learn, onLearnChange] = useState();
  const [become, onBecomeChange] = useState();
  const [love, onLoveChange] = useState();
  const [laugh, onLaughChange] = useState();
  const [remember, onRememberChange] = useState();

  return (
    <div className="flex w-full flex-col container items-center justify-between px-4 space-y-4 md:space-y-6 z-10">
      <h1 className="text-teal-500 text-5xl text-center font-black text-glow uppercase">
        Hopes and dreams for the baby
      </h1>
      <TextField
        label="I hope you learn:"
        value={learn}
        onChange={(e) => onLearnChange(e.target.value)}
        variant="outlined"
        className="bg-white w-full md:w-1/2"
      />
      <TextField
        label="I hope you become:"
        value={become}
        onChange={(e) => onBecomeChange(e.target.value)}
        variant="outlined"
        className="bg-white w-full md:w-1/2"
      />
      <TextField
        label="I hope you love:"
        value={love}
        onChange={(e) => onLoveChange(e.target.value)}
        variant="outlined"
        className="bg-white w-full md:w-1/2"
      />
      <TextField
        label="I hope you laugh:"
        value={laugh}
        onChange={(e) => onLaughChange(e.target.value)}
        variant="outlined"
        className="bg-white w-full md:w-1/2"
      />
      <TextField
        label="I hope you remember:"
        value={remember}
        onChange={(e) => onRememberChange(e.target.value)}
        variant="outlined"
        className="bg-white w-full md:w-1/2"
      />
      <button
        onClick={nextSlide}
        className="bg-teal-300 text-white font-bold py-2 px-4 rounded w-64 hover:bg-teal-700"
      >
        Submit
      </button>
    </div>
  );
};

const HopeAndDreamsSlide = ({ nextSlide }) => {
  return (
    <div className="w-screen h-screen flex items-center justify-center pb-32 md:pb-0">
      <SlideContent nextSlide={nextSlide} />
    </div>
  );
};

export default HopeAndDreamsSlide;
