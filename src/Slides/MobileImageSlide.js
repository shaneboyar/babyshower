import React from "react";

const MobileImageSlide = ({ nextSlide, image }) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="flex w-full flex-col container items-center justify-between space-y-4 md:space-y-6 z-10"
    >
      <button
        onClick={nextSlide}
        className="bg-teal-300 text-white font-bold py-2 px-4 rounded w-64"
      >
        Next
      </button>
    </div>
  );
};

export default MobileImageSlide;
