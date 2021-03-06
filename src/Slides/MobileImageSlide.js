import React from "react";

const MobileImageSlide = ({ nextSlide, image }) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="flex w-full h-screen bg-contain bg-no-repeat bg-top flex-col container items-center justify-between  space-y-4 md:space-y-6 z-10"
    >
      <button
        onClick={nextSlide}
        className="bg-teal-300 text-white font-bold py-2 px-4 bottom-0 absolute mb-32 rounded w-64"
      >
        Next
      </button>
    </div>
  );
};

export default MobileImageSlide;
