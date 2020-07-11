import React from "react";
import { useSpring, animated, interpolate } from "react-spring";

const FallingCard = ({ xPos, yPos, portrait = false, picture }) => {
  const to = {
    x: xPos,
    y: yPos,
    scale: 1,
    rot: -25 + Math.random() * 50,
    delay: 1000,
  };
  const from = { x: xPos, rot: 0, scale: 1.5, y: -1000 };
  const trans = (r, s) =>
    `perspective(1500px) rotateX(30deg) rotateY(${
      r / 10
    }deg) rotateZ(${r}deg) scale(${s})`;
  const { x, y, rot, scale } = useSpring({
    ...to,
    from,
    config: { friction: 50, tension: 800 },
  });

  return (
    <animated.div
      style={{
        transform: interpolate(
          [x, y, rot, scale],
          (x, y, rot, scale) =>
            `translate3d(${x}px,${y}px,0) rotate(${rot}deg) scale(${scale}) ${trans(
              rot,
              scale
            )}`
        ),
        backgroundImage: `url(${picture})`,
        backgroundSize: "cover",
      }}
      className={`${portrait ? "h-64 w-48" : "h-48 w-64"} absolute shadow-md`}
    />
  );
};

export default FallingCard;
