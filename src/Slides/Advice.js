import React, { useState } from "react";

const SlideContent = ({ nextSlide }) => {
  const [advice, onadviceChange] = useState();

  return (
    <div className="flex w-full flex-col items-center justify-between space-y-6 z-10">
      <h1 className="text-teal-500 text-5xl font-black text-glow uppercase">
        Any advice for the parents?
      </h1>
      <textarea
        value={advice}
        onChange={(e) => onadviceChange(e.target.value)}
        className="form-textarea mt-1 block w-1/2 h-64 shadow-md"
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

const AdviceSlide = ({ nextSlide }) => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <SlideContent nextSlide={nextSlide} />
    </div>
  );
};

export default AdviceSlide;
