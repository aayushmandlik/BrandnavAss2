import React from "react";
import { assets } from "../assets/assets";

const Gallery = () => {
  return (
    <div className="py-20 bg-[#ffffff]">
      <div className="flex flex-col items-center justify-center p-[32px]">
        <h1 className="lg:text-[68px] text-[36px] text-center font-bold bg-gradient-to-r from-[#5c5c5c] via-[#3d3d3d] to-[#5c5c5c] bg-clip-text text-transparent mb-5">
          We know the faces you love
        </h1>
        <p className="lg:text-[22px] text-[18px] font-medium text-[#3d3d3d] text-center">
          AirVault uses AI to find your loved ones, across all your
          memories.Letting you live those happy moments that truly happen only
          once.
        </p>
        {/* <p className="lg:text-[22px] text-[18px] font-medium text-[#3d3d3d] text-center">
          happy moments that truly happen only once.
        </p> */}
        <button className="mt-10 py-[12px] px-[24px] bg-[#ff6a00] rounded-[67px] text-[18px] font-semibold text-white cursor-pointer">
          Try AirVault Now
        </button>
      </div>
      <div className="hidden lg:block">
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
      <div className="lg:hidden block">
        <div className="flex justify-evenly items-center gap-0 mb-2">
          <div className="flex flex-col gap-3">
            <img src={assets.mg11} alt="" />
            <img src={assets.mg12} alt="" />
          </div>
          <div>
            <img src={assets.mg13} alt="" />
          </div>
        </div>
        <div className="flex justify-evenly items-center gap-0 mb-2">
          <div>
            <img src={assets.mg21} alt="" />
          </div>
          <div>
            <img src={assets.mg22} alt="" />
          </div>
        </div>
        <div className="flex justify-evenly items-center gap-0">
          <div>
            <img src={assets.mg31} alt="" />
          </div>
          <div className="flex flex-col gap-3">
            <img src={assets.mg32} alt="" />
            <img src={assets.mg33} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
