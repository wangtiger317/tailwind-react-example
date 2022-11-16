import { Container } from "@mui/material";
import React from "react";
import mint0 from "../assets/image/hats1 1 (1).png";
import mint1 from "../assets/image/hats1 1 (2).png";
import mint2 from "../assets/image/hats1 1.png";
import mint3 from "../assets/image/hats2 1 (1).png";
import mint4 from "../assets/image/hats6 1 (1).png";

export default function Traits() {
  const items = [
    {
      id: 1,
      title: "Backwards",
      mint: "0.00",
      img: mint0,
    },
    {
      id: 2,
      title: "Beanie",
      mint: "0.00",
      img: mint1,
    },
    {
      id: 3,
      title: "Bucket Hat",
      mint: "0.00",
      img: mint2,
    },
    {
      id: 4,
      title: "HeadBand",
      mint: "0.00",
      img: mint3,
    },
    {
      id: 5,
      title: "Party Hat",
      mint: "0.00",
      img: mint4,
    },
  ];
  return (
    <Container maxWidth="xl" id="traits">
      <div className="md:mx-20">
        <div className="flex flex-col py-20 gap-[10px]">
          <span className="text-center text-white text-2xl md:text-[56px] leading-tight font-Inter font-semibold">
            Preview of Traits
          </span>
          <div className="flex flex-col gap-10">
            <span className="text-white text-2xl md:text-[56px] leading-tight font-Inter font-semibold">
              Headgear
            </span>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 items-center justify-between gap-10 xl:gap-20">
              {items.map((item) => (
                <div
                  className="bg-gradient p-2 gap-3 flex flex-col w-full md:max-w-[139px] rounded-2xl"
                  key={item.id}
                >
                  <img src={item.img} alt="mint-img" />
                  <span className="text-xl text-center text-white font-Inter font-medium leading-5">
                    {item.title}
                  </span>
                  <span className="text-xl text-center text-white font-Inter font-medium leading-5 mt-1">
                    {item.mint}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col py-20 gap-[10px]">
          <div className="flex flex-col gap-10">
            <span className="text-white text-2xl md:text-[56px] leading-tight font-Inter font-semibold">
              Backbling
            </span>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 items-center justify-between gap-10 xl:gap-20">
              {items.map((item) => (
                <div
                  className="bg-gray p-2 gap-3 flex flex-col md:max-w-[139px] rounded-2xl"
                  key={item.id}
                >
                  <img src={item.img} alt="mint-img" />
                  <span className="text-xl text-center text-white font-Inter font-medium leading-5">
                    {item.title}
                  </span>
                  <span className="text-xl text-center text-white font-Inter font-medium leading-5 mt-1">
                    {item.mint}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-center text-white text-2xl md:text-[56px] leading-tight font-Inter font-semibold">
            What traits does your Wavy Turtle have?
          </span>
          <button className="outline-none bg-white py-4 px-10 font-Inter rounded-2xl text-xl font-semibold mt-12">
            Mint
          </button>
        </div>
      </div>
    </Container>
  );
}
