import React from "react";
import { animated } from "react-spring";

const CardContainer = ({ i, springProps, trans, bind, style, children }) => {
  const { x, display, sc } = springProps;
  return (
    <animated.div
      {...bind}
      key={i}
      style={{
        display,
        transform: x.interpolate((x) => `translate3d(${x}px,0,0)`),
      }}
    >
      <animated.div style={{ transform: sc.interpolate((s) => `scale(${s})`) }}>
        {children}
      </animated.div>
    </animated.div>
  );
};

export default CardContainer;
