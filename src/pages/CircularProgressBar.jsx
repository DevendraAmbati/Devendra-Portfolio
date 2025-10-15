import React, { useEffect, useRef, useState } from "react";

const CircularProgressBar = ({
  title,
  percentage,
  size = 100,                // Diameter of the circle
  strokeWidth = 5,          // Thickness of the circle
  circleOneStroke = "#8E939C",  // Background circle color
  circleTwoStroke = "#FD853A" // Filled circle color
}) => {
  const [progress, setProgress] = useState(0);
  const circleRef = useRef(null);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let start = 0;
            const animate = () => {
              if (start < percentage) {
                start += 1;
                setProgress(start);
                requestAnimationFrame(animate);
              }
            };
            animate();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (circleRef.current) {
      observer.observe(circleRef.current);
    }

    return () => observer.disconnect();
  }, [percentage]);

  return (
    <div className="flex flex-col items-center m-4" ref={circleRef}>
      <svg width={size} height={size}>
        <circle
          stroke={circleOneStroke}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          stroke={circleTwoStroke}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (progress / 100) * circumference}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.5s ease" }}
        />
      </svg>
      <div className="absolute mt-[35px] text-center">
        <span className="text-white font-bold text-lg">{progress}%</span>
      </div>
      <p className="text-white font-medium mt-4">{title}</p>
    </div>
  );
};

export default CircularProgressBar;
