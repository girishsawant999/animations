"use client";

import { animate } from "motion";
import { useEffect, useRef, useState } from "react";

const pathValues = [
  "M172 74.5625L156.085 53H96.1702L84 68V184.25L96.1702 203H172V130.812L166.383 122.375H128",
  "M75 53H128M181 53H128M128 53V203H75H181",
  "M87 203V53H150.484L169 79.3158V100.368L154.011 117.035L143.43 117.609M103.753 117.035L143.43 117.609M143.43 117.609L169 160.018V203",
  "M75 53H128M181 53H128M128 53V203H75H181",
  "M170.158 68.0943L159.737 53H99.1053L86.7895 65.2642V100.17L99.1053 119.981H162.579L173 138.849V190.736L159.737 203H94.3684L83 190.736",
  "M88 50V125M88 200V125M88 125H167V50V200",
];

const noOfCircles = 40;
const circleRadius = 10;

const GooeyText = () => {
  const [index, setIndex] = useState(0);
  const paths = useRef<SVGPathElement[] | null[]>([]);
  const circles = useRef<SVGCircleElement[] | null[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % pathValues.length);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const path = paths.current[index];
    const circlesArray = circles.current;

    if (!path) return;

    const pathLength = path.getTotalLength();
    circlesArray.forEach((circle, i) => {
      if (!circle) return;
      const { x, y } = path.getPointAtLength((i / noOfCircles) * pathLength);
      animate(circle, { cx: x, cy: y }, { delay: i * 0.01, ease: "easeOut" });
    });
  }, [index]);

  return (
    <section className="min-h-screen bg-[#B5A8D5] grid place-items-center overflow-hidden relative ">
      <svg
        viewBox="0 0 256 256"
        className="size-[clamp(256px,80vw,100vw)]"
        filter="url(#gooey)"
      >
        <defs>
          <filter id="gooey">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="15"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 60 -10"
              result="gooey"
            />
            <feBlend in="SourceGraphic" in2="gooey" mode="normal" />
          </filter>
        </defs>

        {pathValues.map((d, i) => (
          <path
            key={`path-${i}`}
            d={d}
            stroke="black"
            className="hidden"
            ref={(ref) => {
              paths.current[i] = ref;
            }}
          />
        ))}

        <g>
          {Array.from({ length: noOfCircles }).map((_, i) => (
            <circle
              key={`circle-${i}`}
              cx={128}
              cy={128}
              r={circleRadius}
              fill="#211C84"
              ref={(ref) => {
                circles.current[i] = ref;
              }}
            />
          ))}
        </g>
      </svg>
    </section>
  );
};

export default GooeyText;
