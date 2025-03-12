import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div>
      <div className="mt-[25px] ml-[64px]">
        <img src={assets.logo} alt="" />
      </div>
      <div className="p-32">
        <div className="flex flex-col items-center justify-center">
          <div className="text-[70px] font-bold bg-gradient-to-r from-[#5c5c5c] via-[#3d3d3d] to-[#5c5c5c] bg-clip-text text-transparent">
            Your photo gallery is a mess!
          </div>
          <div className="text-[70px] -mt-5 font-bold bg-gradient-to-r from-[#5c5c5c] via-[#3d3d3d] to-[#5c5c5c] bg-clip-text text-transparent">
            We can fix it.
          </div>
          <p className="text-[22px] font-medium text-[#3d3d3d]">
            AirVault is the easiest way to capture and relive your memories.
          </p>
        </div>
        <div className="flex items-center justify-center mt-7">
          <button className="py-[12px] px-[24px] bg-[#ff6a00] rounded-[67px] text-[18px] font-semibold text-white cursor-pointer">
            Try AirVault Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
