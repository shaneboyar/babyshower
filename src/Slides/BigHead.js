import React, { useState } from "react";
import { useWindowSize } from "@react-hook/window-size";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import FaceIcon from "@material-ui/icons/Face";
import HearingIcon from "@material-ui/icons/Hearing";
import CompareArrowsIcon from "@material-ui/icons/CompareArrows";
import { withStyles } from "@material-ui/core/styles";
import { teal } from "@material-ui/core/colors";
import steph from "../pictures/steph-crawl.JPG";
import shane from "../pictures/shane-mom.JPG";
import FallingCard from "../FallingCard";

const CustomToggle = withStyles({
  root: {
    height: "6rem",
    width: "6rem",
    "&:focus": {
      outline: "none",
    },
    "&:hover": {
      backgroundColor: teal[400],
    },
    "&$selected": {
      backgroundColor: teal[200],
    },
  },
  selected: {
    backgroundColor: teal[200],
  },
})((props) => <ToggleButton {...props} />);

const SlideContent = ({ nextSlide }) => {
  const [bigHead, handleChange] = useState();
  return (
    <div className="flex w-full flex-col container items-center justify-between space-y-4 md:space-y-6 z-10">
      <h1 className="text-teal-500 text-3xl md:text-5xl font-black text-center text-glow">
        Will he have a big head, big ears, or both?
      </h1>
      <div className="w-64 flex flex-row items-center justify-center">
        <ToggleButtonGroup
          value={bigHead}
          exclusive
          aria-label="text alignment"
        >
          <CustomToggle
            onClick={(e) => {
              e.preventDefault();
              handleChange("Big Head");
            }}
            value="Big Head"
            aria-label="Big Head"
          >
            <FaceIcon style={{ fontSize: "4rem" }} />
          </CustomToggle>
          <CustomToggle
            onClick={(e) => {
              e.preventDefault();
              handleChange("Both");
            }}
            value="Both"
            aria-label="Both"
          >
            <CompareArrowsIcon style={{ fontSize: "4rem" }} />
          </CustomToggle>
          <CustomToggle
            onClick={(e) => {
              e.preventDefault();
              handleChange("Big Ears");
            }}
            value="Big Ears"
            aria-label="Big Ears"
          >
            <HearingIcon style={{ fontSize: "4rem" }} />
          </CustomToggle>
        </ToggleButtonGroup>
      </div>
      <button
        onClick={() => nextSlide({ bigHead: bigHead || "No Answer" })}
        className="bg-teal-300 text-white font-bold py-2 px-4 rounded w-64 hover:bg-teal-700 shadow-lg"
      >
        Next
      </button>
    </div>
  );
};

const BigHeadSlide = ({ nextSlide }) => {
  const [width] = useWindowSize();

  return (
    <div className="w-screen h-screen flex items-center justify-center pb-32 md:pb-0">
      <div className="hidden md:flex w-full h-full items-center justify-center absolute z-0">
        <FallingCard xPos={-(width / 3.5)} yPos={0} picture={steph} portrait />
        <FallingCard xPos={width / 3.5} yPos={0} picture={shane} portrait />
      </div>
      <SlideContent nextSlide={nextSlide} />
    </div>
  );
};

export default BigHeadSlide;
