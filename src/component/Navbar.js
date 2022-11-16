import { Container } from "@mui/material";

import React from "react";
import logo from "../assets/image/logo.png";
export default function Navbar() {
  return (
    <Container maxWidth="xl">
      <div
        className="flex items-center justify-between py-14 
      md:mx-20"
      >
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="logo"
            className="w-12 md:object-cover md:w-auto"
          />
          <div className="flex bg-gradient items-center text-white text-center text-sm md:text-lg rounded-2xl py-2 px-3 md:py-4 md:px-5">
            Wavy Turtle Club
          </div>
        </div>
        <div className="hidden xl:flex items-center gap-10">
          <a
            href="#home"
            className="text-white capitalize text-base leading-4 font-Inter font-medium"
          >
            home
          </a>
          <a
            href="#mint"
            className="text-white capitalize text-base leading-4 font-Inter font-medium"
          >
            mint
          </a>
          <a
            href="#traits"
            className="text-white capitalize text-base leading-4 font-Inter font-medium"
          >
            traits
          </a>
          <a
            href="#roadmap"
            className="text-white capitalize text-base leading-4 font-Inter font-medium"
          >
            Roadmap
          </a>
        </div>
        <button className="hidden xl:flex bg-gradient rounded-2xl py-4 px-10 text-center text-white font-semibold text-xl leading-6">
          Connect Wallet
        </button>
      </div>
    </Container>
  );
}
