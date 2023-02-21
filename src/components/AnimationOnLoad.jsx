import React, { useEffect, useState } from "react";
import { Circle } from "rc-progress";

const AnimationOnLoad = () => {
  const [percent, setPercent] = useState(0);
  const limiter = 100;

  useEffect(() => {
    const incrementer = setInterval(() => {
      setPercent((prev) => {
        if (prev < limiter) return prev + 1;
        clearInterval(incrementer);
        return prev;
      });
    }, 25);
  }, []);
  // console.log(percent);

  return (
    <div className="w-full h-[100vh] bg-white flex justify-center items-center animate-animateOpacity">
      <div className="w-40 h-40 rounded-full flex justify-center items-center animate-animatePulse shadow-lg">
        <Circle
          className="w-40 h-40"
          percent={percent}
          strokeWidth={2}
          strokeColor="#000000"
          trailColor="#fff"
        />
        <div className="text-6xl z-10 absolute animate-animateOpacity2">T</div>
      </div>
    </div>
  );
};

export default AnimationOnLoad;
