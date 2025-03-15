import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div>
      <div className="lg:mt-[25px] lg:ml-[64px] mt-5 ml-5">
        <img src={assets.logo} alt="" />
      </div>
      <div className="lg:px-10 p-10 lg:p-32 lg:mt-0 my-36">
        <div className="flex flex-col items-center text-center justify-center">
          <div className="text-[36px] lg:text-[70px] font-bold bg-gradient-to-r from-[#5c5c5c] via-[#3d3d3d] to-[#5c5c5c] bg-clip-text text-transparent">
            Your photo gallery is a mess!
            <br /> We can fix it.
          </div>
          <div className="text-[36px] lg:text-[70px] -mt-5 font-bold bg-gradient-to-r from-[#5c5c5c] via-[#3d3d3d] to-[#5c5c5c] bg-clip-text text-transparent"></div>
          <p className="text-[18px] lg:text-[22px] font-medium text-[#3d3d3d] lg:my-10 my-15">
            AirVault is the easiest way to capture and relive your memories.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <button className="py-[12px] px-[24px] bg-[#ff6a00] rounded-[67px] text-[18px] font-semibold text-white cursor-pointer">
            Try AirVault Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
