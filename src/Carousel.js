import React, { createRef, useCallback } from "react";
import isMobile from "is-mobile";
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
import MobileImageSlide from "./Slides/MobileImageSlide";
import WelcomeSlide from "./Slides/Welcome";
import HopeAndDreamsSlide from "./Slides/HopesAndDreams";
import AdviceSlide from "./Slides/Advice";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BookSlide from "./Slides/Books";
import RegistrySlide from "./Slides/Registry";

function Carousel() {
  const slider = createRef(null);
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    swipe: false,
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
      lazyLoad
    >
      <WelcomeSlide nextSlide={nextSlide} />
      {isMobile && (
        <MobileImageSlide
          nextSlide={nextSlide}
          image={require("./pictures/deck2.jpg")}
        />
      )}
      <BirthdayCard nextSlide={nextSlide} />
      <BirthtimeSlide nextSlide={nextSlide} />
      <WeightSlide nextSlide={nextSlide} />
      <LengthSlide nextSlide={nextSlide} />
      <HairSlide nextSlide={nextSlide} />
      <EyesSlide nextSlide={nextSlide} />
      <CurlyStraightSlide nextSlide={nextSlide} />
      <EyebrowsSlide nextSlide={nextSlide} />
      <BigHeadSlide nextSlide={nextSlide} />
      <HopeAndDreamsSlide nextSlide={nextSlide} />
      <AdviceSlide nextSlide={nextSlide} />
      <BookSlide nextSlide={nextSlide} />
      <RegistrySlide />
    </Slider>
  );
}

export default Carousel;
