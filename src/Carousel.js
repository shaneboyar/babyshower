import React, { createRef, useCallback } from "react";
import Slider from "react-slick";
import BirthdayCard from "./Slides/Birthday";
import BirthtimeSlide from "./Slides/Birthtime";
import WeightSlide from "./Slides/Weight";
import LengthSlide from "./Slides/Length";
import HairSlide from "./Slides/Hair";
import EyesSlide from "./Slides/Eyes";
import CurlyStraightSlide from "./Slides/CurlyStraight";
import EyebrowsSlide from "./Slides/Eyebrows";
import BigHeadSlide from "./Slides/BigHead";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  const slider = createRef(null);
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
  };

  const nextSlide = useCallback(() => {
    if (slider.current) {
      slider.current.slickNext();
    }
  }, [slider]);

  return (
    <Slider
      {...settings}
      className="h-screen w-screen striped items-center justify-center"
      ref={slider}
    >
      <BirthdayCard nextSlide={nextSlide} />
      <BirthtimeSlide nextSlide={nextSlide} />
      <WeightSlide nextSlide={nextSlide} />
      <LengthSlide nextSlide={nextSlide} />
      <HairSlide nextSlide={nextSlide} />
      <EyesSlide nextSlide={nextSlide} />
      <CurlyStraightSlide nextSlide={nextSlide} />
      <EyebrowsSlide nextSlide={nextSlide} />
      <BigHeadSlide nextSlide={nextSlide} />
    </Slider>
  );
}

export default Carousel;
