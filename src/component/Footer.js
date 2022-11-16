import { Container } from "@mui/material";
import React from "react";
import logo from "../assets/image/logo.png";

export default function Footer() {
  return (
    <Container maxWidth="xl" className=" mt-24">
      <div className="py-20 ">
        <div className="flex flex-col md:flex-row items-center justify-between bg-gradient p-5 rounded-2xl gap-10 md:gap-0">
          <div className="flex items-center gap-5">
            <img
              src={logo}
              alt="logo"
              className="w-12 md:object-cover md:w-auto"
            />
            <div className="flex items-center text-white text-center text-sm md:text-lg rounded-2xl py-2 px-3 md:py-4 md:px-5 font-Inter font-medium">
              Wavy Turtle Club
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <span className="font-Inter text-xl leading-7 text-white text-center font-medium">
              Twitter
            </span>
            <span className="font-Inter text-xl leading-7 text-white text-center font-medium">
              Discord
            </span>
            <span className="font-Inter text-xl leading-7 text-white text-center font-medium">
              Magic Eden
            </span>
            <span className="font-Inter text-xl leading-7 text-white text-center font-medium">
              Documentation
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
}
