import { Container } from "@mui/material";
import React from "react";
import label from "../assets/image/sea-turtle.png";
import shape from "../assets/image/shape.png";
import shape1 from "../assets/image/shape (1).png";

export default function RoadMap() {
  return (
    <Container maxWidth="xl" id="roadmap">
      <div className="flex flex-col md:mx-20 mt-[108px] gap-20">
        <div className="flex flex-col items-center justify-center">
          <span className="text-center text-white text-2xl md:text-[56px] leading-tight font-Inter font-semibold">
            Roadmap
          </span>
          <div className="flex items-center text-center max-w-md text-white mx-auto mt-12">
            Roadmap description Roadmap description Roadmap description Roadmap
            description Roadmap description Roadmap description Roadmap
            description Roadmap description Roadmap description Roadmap
            description Roadmap description Roadmap description
          </div>
        </div>
        <div className="relative flex flex-col md:mx-14">
          <div className="flex items-center gap-3">
            <img
              src={label}
              alt="label"
              className=" bg-white rounded-[32px] py-8 px-16"
            />
            <span className="text-white text-xl leading-6 font-Inter font-semibold ">
              Wavy Turtle Club Launch
            </span>
          </div>
          <div className="flex w-4/4 md:-mt-5 md:-mb-10 mx-auto">
            <img src={shape} alt="shape" className="w-auto" />
          </div>
          <div className="flex items-center flex-row-reverse gap-3">
            <img
              src={label}
              alt="label"
              className=" bg-white rounded-[32px] py-8 px-16"
            />
            <span className="text-white text-xl leading-6 font-Inter font-semibold ">
              Staking
            </span>
          </div>
          <div className="flex w-4/4 md:-mt-5 md:-mb-10 mx-auto">
            <img src={shape1} alt="shape" className="w-auto" />
          </div>
          <div className="flex items-center gap-3">
            <img
              src={label}
              alt="label"
              className=" bg-white rounded-[32px] py-8 px-16"
            />
            <span className="text-white text-xl leading-6 font-Inter font-semibold ">
              Q3 2022
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
}
