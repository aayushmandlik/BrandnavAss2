import React from "react";
import { assets } from "../assets/assets";

const Gallery = () => {
  return (
    <div className="py-20 bg-[#ffffff]">
      <div className="flex flex-col items-center justify-center p-[32px]">
        <h1 className="text-[68px] font-bold bg-gradient-to-r from-[#5c5c5c] via-[#3d3d3d] to-[#5c5c5c] bg-clip-text text-transparent">
          We know the faces you love
        </h1>
        <p className="text-[22px] font-medium text-[#3d3d3d]">
          AirVault uses AI to find your loved ones, across all your
          memories.Letting you live those
        </p>
        <p className="text-[22px] font-medium text-[#3d3d3d]">
          happy moments that truly happen only once.
        </p>
        <button className="mt-10 py-[12px] px-[24px] bg-[#ff6a00] rounded-[67px] text-[18px] font-semibold text-white cursor-pointer">
          Try AirVault Now
        </button>
      </div>
      <div className="flex justify-between w-[full] mr-0 gap-7">
        <img src={assets.g11} alt="" />
        <img src={assets.g12} alt="" />
        <img src={assets.g13} alt="" />
        <img src={assets.g14} alt="" />
        <img src={assets.g15} alt="" />
        {/* <img src={assets.g16} alt="" /> */}
      </div>
      <div className="flex justify-between w-[full] mr-0 gap-7 mt-5">
        <img src={assets.g21} alt="" />
        <img src={assets.g22} alt="" />
        <img src={assets.g23} alt="" />
        <img src={assets.g24} alt="" />
      </div>
      <div className="flex justify-between w-[full] mr-0 gap-7 mt-5">
        <img src={assets.g31} alt="" />
        <img src={assets.g32} alt="" />
        <img src={assets.g33} alt="" />
      </div>
    </div>
  );
};

export default Gallery;
