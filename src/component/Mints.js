import { Container } from "@mui/material";
import React, { useState } from "react";
import collection from "../assets/image/Collection.png";
import skinRainbow from "../assets/image/skin-rainbow.png";
import minus from "../assets/image/minus.png";
import plus from "../assets/image/plus.png";
export default function Mints() {
  const [value, setMintValue] = useState("");
  return (
    <Container maxWidth="xl" className="relative  mt-6" id="mint">
      <div className="rounded-[20px] bg-gradient p-[18px] md:mx-20">
        <div className="grid md:grid-cols-1 xl:grid-cols-2 bg-black h-full rounded-[20px] px-4 py-5 md:py-14 md:px-12 gap-5">
          <div className="flex flex-col gap-[30px] md:w-auto xl:max-w-[500px]">
            <div className="flex justify-center rounded-[20px] bg-gradient p-[9px] mx-auto">
              <img
                src={collection}
                alt="collection"
                width={500}
                className="rounded-md"
              />
            </div>
            <span className="text-white text-xl leading-6 font-semibold md:px-16">
              Wavy Turtles is a collection of 6,000 hand-drawn NFTs that exist
              in their shell on the Solana network
            </span>
            <span className="text-white text-xl leading-6 font-semibold md:px-16">
              Wavy Turtles is a collection of 6,000 hand-drawn NFTs that exist
              in their shell on the Solana network
            </span>
          </div>
          <div className="flex flex-col items-center gap-[30px]">
            <span className="text-transparent text-center bg-clip-text bg-gradient-to-r from-lime to-yellow text-5xl md:text-7xl leading-[80px] font-Inter font-semibold">
              Mint Now!
              <img src={skinRainbow} alt="skinRainbow" />
            </span>
            <span className="text-white text-center font-Inter font-semibold text-3xl md:text-[45px] leading-10">
              Get your Wavy Turtle
            </span>
            <div className="flex items-center justify-between">
              <button className="flex items-center justify-center bg-gradient rounded-full max-w-[60px] box-shadow ">
                <img src={minus} alt="minus" />
              </button>
              <input
                placeholder="1"
                onChange={(e) => setMintValue(e.target.value)}
                value={value}
                className="placeholder-white outline-none bg-transparent text-center text-white border-border border-solid border-[1.2px] mx-12 rounded-[3.5px] max-w-[128px] leading-5 text-base py-1"
              />
              <button className="flex items-center justify-center bg-gradient rounded-full max-w-[60px] box-shadow ">
                <img src={plus} alt="plus" />
              </button>
            </div>
            <button className="hidden md:flex bg-gradient rounded-2xl py-4 px-10 text-center text-white font-semibold text-xl leading-6 mt-12">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}
