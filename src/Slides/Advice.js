import React, { useState } from "react";

const SlideContent = ({ nextSlide }) => {
  const [advice, onadviceChange] = useState("");

  return (
    <div className="flex w-full flex-col container items-center justify-between px-4 space-y-4 md:space-y-6 z-10">
      <h1 className="text-teal-500 text-5xl text-center font-black text-glow uppercase">
        Any advice for the parents?
      </h1>
      <textarea
        value={advice}
        onChange={(e) => onadviceChange(e.target.value)}
        className="form-textarea mt-1 block w-full md:w-1/2 h-64 shadow-md"
      />
      <button
        onClick={() => nextSlide({ advice })}
        className="bg-teal-300 text-white font-bold py-2 px-4 rounded w-64 hover:bg-teal-700 shadow-lg"
      >
        Next
      </button>
    </div>
  );
};

const AdviceSlide = ({ nextSlide }) => {
  return (
    <div className="w-screen h-screen flex items-center justify-center pb-32 md:pb-0">
      <SlideContent nextSlide={nextSlide} />
    </div>
  );
};

export default AdviceSlide;
