import React from "react";
import { assets } from "../assets/assets";

const BestMoments = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      {/* Text Content */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-6xl font-semibold text-[#31323d] mb-6">
          The best moments are the ones you share
        </h1>
        <p className="text-xl text-[#31323d] mb-8 font-normal">
          Share your memories with your friends and family with a single click.
        </p>
        <button className="mt-5 py-[12px] px-[24px] bg-[#ff6a00] rounded-[67px] text-[18px] font-semibold text-white cursor-pointer">
          Try AirVault Now
        </button>
      </div>

      {/* Images Stack */}
      <div className="lg:relative lg:w-full lg:max-w-4xl lg:mx-auto lg:h-[400px] lg:mt-10">
        {/* Mountain Photo */}
        <div className="absolute left-[0%] top-0 overflow-hidden hidden lg:block">
          <img
            src={assets.memory3}
            alt="Mountain adventure"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bachelor Party Photo */}
        <div className="absolute left-[7%] -bottom-8 rounded-3xl overflow-hidden z-10 hidden lg:block">
          <div className="relative w-full h-full">
            <img
              src={assets.memory2}
              alt="Bachelor party"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* New Year's Eve Photo */}
        <div className="absolute left-[26%] -top-[10%] rounded-3xl overflow-hidden z-0 hidden lg:block">
          <div className="w-full h-full">
            <img
              src={assets.memory1}
              alt="New Year's Eve"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* iOS Share Sheet */}
        <div className="lg:absolute lg:-right-[7%] lg:top-[10%]">
          <div className="lg:w-full lg:h-full w-[105%] h-[105%] flex items-center justify-center]">
            <img
              src={assets.memory4}
              alt="ios sheet"
              className="lg:w-full lg:h-full lg:pl-0 pl-5 lg:object-cover"
            />
          </div>
        </div>
      </div>

      <div className="text-center max-w-3xl mx-auto mt-32">
        <h1 className="text-4xl md:text-6xl font-bold lg:text-[#31323d] bg-gradient-to-r from-[#5c5c5c] via-[#3d3d3d] to-[#5c5c5c] bg-clip-text text-transparent mb-8">
          Your memories are worth everything!
        </h1>
        <p className="text-xl text-[#31323d] mb-8 font-normal">
          No one understands it better than us.
        </p>
      </div>

      <div className="relative min-w-screen max-w-4xl mx-0 h-[400px] mt-10">
        <div className="absolute h-full left-[0%] top-[15%] md:top-0 overflow-hidden">
          <img
            src={assets.frame1}
            alt="frame1"
            className="w-full h-[270px] md:h-full object-cover"
          />
        </div>

        <div className="absolute left-[60%] md:left-[22%] top-0 md:top-[20%] rounded-3xl overflow-hidden z-10">
          <div className="relative w-full h-full">
            <img
              src={assets.frame2}
              alt="frame2"
              className="w-full h-[270px] md:h-full object-cover"
            />
          </div>
        </div>

        <div className="absolute md:left-[38%] left-[20%] top-[50%] md:-top-5 rounded-3xl overflow-hidden z-10">
          <div className="w-full h-full">
            <img
              src={assets.frame3}
              alt="frame3"
              className="w-full h-[270px] md:h-full object-cover"
            />
          </div>
        </div>

        <div className="absolute h-full left-[-15%] md:left-[70%] bottom-[-100%] md:bottom-0 md:top-[20%] overflow-hidden z-[11]">
          <img
            src={assets.frame4}
            alt="frame4"
            className="w-full h-[270px] md:h-full object-cover"
          />
        </div>

        <div className="absolute right-[0%] bottom-[-55%] md:bottom-0 md:top-0 rounded-3xl overflow-hidden z-0">
          <div className="relative w-full h-full">
            <img
              src={assets.frame5}
              alt="frame5"
              className="w-full h-[270px] md:h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestMoments;
