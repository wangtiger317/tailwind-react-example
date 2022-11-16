import { Container } from "@mui/material";
import React from "react";
import home from "../assets/image/home.png";
export default function Home() {
  return (
    <Container maxWidth={"xl"}>
      <div className="grid md:grid-cols-[348px_1fr] xl:grid-cols-[348px_minmax(900px,_1fr)] items-center md:mx-20">
        <div className="flex flex-col gap-10">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime to-yellow text-7xl font-medium leading-none">
            Wavy Turtle Club
          </span>
          <div className="flex flex-col gap-4">
            <span className="text-left text-xl text-white font-Inter font-semibold">
              Wavy Turtles is a collection of 6,000 hand-drawn NFTs that exist
              in their shell on the Solana network
            </span>
            <button className="bg-gradient py-4 px-10 rounded-2xl font-semibold text-xl leading-6 font-Inter max-w-[122px]">
              Mint
            </button>
          </div>
        </div>
        <img src={home} alt="home" />
      </div>
    </Container>
  );
}
