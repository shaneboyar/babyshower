import React, { useRef } from "react";
import { useSprings } from "react-spring";
import clamp from "lodash-es/clamp";
import { useDrag } from "react-use-gesture";
import CardContainer from "./CardContainer";
import BirthdayCard from "./Slides/Birthday";
import BirthtimeSlide from "./Slides/Birthtime";
import WeightSlide from "./Slides/Weight";
import LengthSlide from "./Slides/Length";
import HairSlide from "./Slides/Hair";
import EyesSlide from "./Slides/Eyes";

const cards = [
  <BirthdayCard />,
  <BirthtimeSlide />,
  <WeightSlide />,
  <LengthSlide />,
  <HairSlide />,
  <EyesSlide />,
];

function Deck() {
  const index = useRef(0);
  const [props, set] = useSprings(cards.length, (i) => ({
    x: i * window.innerWidth,
    sc: 1,
    display: "block",
  }));
  const bind = useDrag(
    ({ down, delta: [xDelta], direction: [xDir], distance, cancel }) => {
      if (down && distance > window.innerWidth / 2)
        cancel(
          (index.current = clamp(
            index.current + (xDir > 0 ? -1 : 1),
            0,
            cards.length - 1
          ))
        );
      set((i) => {
        if (i < index.current - 1 || i > index.current + 1)
          return { display: "none" };
        const x = (i - index.current) * window.innerWidth + (down ? xDelta : 0);
        const sc = down ? 1 - distance / window.innerWidth / 2 : 1;
        return { x, sc, display: "block" };
      });
    }
  );
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return props.map((springProps, i) => (
    <CardContainer key={i} bind={bind(i)} springProps={springProps}>
      {cards[i]}
    </CardContainer>
  ));
}

export default Deck;
