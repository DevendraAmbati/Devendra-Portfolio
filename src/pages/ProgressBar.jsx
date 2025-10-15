import React, { useEffect, useRef, useState } from "react";

const ProgressBar = ({
  title,
  percentage,
  bgColor = "#8E939C",       // Bar background
  fillColor = "#FD853A",  // Filled part
}) => {
  const [width, setWidth] = useState(0);
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setWidth(percentage);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of bar is visible
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, [percentage]);

  return (
    <div className="my-4 w-full" ref={barRef}>
      {/* Title and percentage */}
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-white">{title}</span>
        <span className="text-sm font-medium text-white">{width}%</span>
      </div>

      {/* Background bar */}
      <div
        className="w-full h-2 rounded-full overflow-hidden"
        style={{ backgroundColor: bgColor }}
      >
        {/* Filled bar */}
        <div
          className="h-full rounded-full transition-all duration-1500"
          style={{ width: `${width}%`, backgroundColor: fillColor }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
