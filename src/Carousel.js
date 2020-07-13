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

const mobile = isMobile();

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
      {mobile && (
        <MobileImageSlide
          nextSlide={nextSlide}
          image={require("./pictures/deck1.jpg")}
        />
      )}
      {mobile && (
        <MobileImageSlide
          nextSlide={nextSlide}
          image={require("./pictures/deck2.jpg")}
        />
      )}
      {mobile && (
        <MobileImageSlide
          nextSlide={nextSlide}
          image={require("./pictures/deck3.jpg")}
        />
      )}
      <BirthdayCard nextSlide={nextSlide} />
      {mobile && (
        <MobileImageSlide
          nextSlide={nextSlide}
          image={require("./pictures/shane-cake.JPG")}
        />
      )}
      {mobile && (
        <MobileImageSlide
          nextSlide={nextSlide}
          image={require("./pictures/steph-cake.JPG")}
        />
      )}
      <BirthtimeSlide nextSlide={nextSlide} />
      {mobile && (
        <MobileImageSlide
          nextSlide={nextSlide}
          image={require("./pictures/shane-car.JPG")}
        />
      )}
      {mobile && (
        <MobileImageSlide
          nextSlide={nextSlide}
          image={require("./pictures/steph-car.JPG")}
        />
      )}
      <WeightSlide nextSlide={nextSlide} />
      {mobile && (
        <MobileImageSlide
          nextSlide={nextSlide}
          image={require("./pictures/shane-born.JPG")}
        />
      )}
      {mobile && (
        <MobileImageSlide
          nextSlide={nextSlide}
          image={require("./pictures/steph-mom.JPG")}
        />
      )}
      <LengthSlide nextSlide={nextSlide} />
      {mobile && (
        <MobileImageSlide
          nextSlide={nextSlide}
          image={require("./pictures/shane-dad.JPG")}
        />
      )}
      {mobile && (
        <MobileImageSlide
          nextSlide={nextSlide}
          image={require("./pictures/steph-dad.JPG")}
        />
      )}
      <HairSlide nextSlide={nextSlide} />
      {mobile && (
        <MobileImageSlide
          nextSlide={nextSlide}
          image={require("./pictures/steph-flowers.JPG")}
        />
      )}
      {mobile && (
        <MobileImageSlide
          nextSlide={nextSlide}
          image={require("./pictures/shane-beach.JPG")}
        />
      )}
      <EyesSlide nextSlide={nextSlide} />
      {mobile && (
        <MobileImageSlide
          nextSlide={nextSlide}
          image={require("./pictures/steph-christmas.JPG")}
        />
      )}
      {mobile && (
        <MobileImageSlide
          nextSlide={nextSlide}
          image={require("./pictures/shane-megan.JPG")}
        />
      )}
      <CurlyStraightSlide nextSlide={nextSlide} />
      {mobile && (
        <MobileImageSlide
          nextSlide={nextSlide}
          image={require("./pictures/shane-paint.JPG")}
        />
      )}
      {mobile && (
        <MobileImageSlide
          nextSlide={nextSlide}
          image={require("./pictures/steph-lauren.JPG")}
        />
      )}
      <EyebrowsSlide nextSlide={nextSlide} />
      {mobile && (
        <MobileImageSlide
          nextSlide={nextSlide}
          image={require("./pictures/shane-dodgers.JPG")}
        />
      )}
      {mobile && (
        <MobileImageSlide
          nextSlide={nextSlide}
          image={require("./pictures/steph-grandpa.JPG")}
        />
      )}
      <BigHeadSlide nextSlide={nextSlide} />
      {mobile && (
        <MobileImageSlide
          nextSlide={nextSlide}
          image={require("./pictures/steph-crawl.JPG")}
        />
      )}
      {mobile && (
        <MobileImageSlide
          nextSlide={nextSlide}
          image={require("./pictures/shane-mom.JPG")}
        />
      )}
      <HopeAndDreamsSlide nextSlide={nextSlide} />
      <AdviceSlide nextSlide={nextSlide} />
      <BookSlide nextSlide={nextSlide} />
      <RegistrySlide />
    </Slider>
  );
}

export default Carousel;
