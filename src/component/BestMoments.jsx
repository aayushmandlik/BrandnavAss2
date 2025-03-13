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
      <div className="relative w-full max-w-4xl mx-auto h-[400px] mt-10">
        {/* Mountain Photo */}
        <div className="absolute left-[0%] top-0 overflow-hidden">
          <img
            src={assets.memory3}
            alt="Mountain adventure"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bachelor Party Photo */}
        <div className="absolute left-[7%] -bottom-8 rounded-3xl overflow-hidden z-10">
          <div className="relative w-full h-full">
            <img
              src={assets.memory2}
              alt="Bachelor party"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* New Year's Eve Photo */}
        <div className="absolute left-[26%] -top-[10%] rounded-3xl overflow-hidden z-0">
          <div className="w-full h-full">
            <img
              src={assets.memory1}
              alt="New Year's Eve"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* iOS Share Sheet */}
        <div className="absolute -right-[7%] top-[10%]">
          <div className="w-full h-full">
            <img
              src={assets.memory4}
              alt="New Year's Eve"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="text-center max-w-3xl mx-auto mt-32">
        <h1 className="text-4xl md:text-6xl font-bold text-[#31323d] mb-6">
          Your memories are worth everything!
        </h1>
        <p className="text-xl text-[#31323d] mb-8 font-normal">
          No one understands it better than us.
        </p>
      </div>

      <div className="relative min-w-screen max-w-4xl mx-0 h-[400px] mt-10">
        <div className="absolute left-[0%] top-0 overflow-hidden">
          <img
            src={assets.frame1}
            // alt="Mountain adventure"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute left-[22%] top-[20%] rounded-3xl overflow-hidden z-10">
          <div className="relative w-full h-full">
            <img
              src={assets.frame2}
              alt="Bachelor party"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="absolute left-[38%] -top-5 rounded-3xl overflow-hidden z-10">
          <div className="w-full h-full">
            <img
              src={assets.frame3}
              alt="New Year's Eve"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="absolute left-[67%] top-[20%] overflow-hidden z-10">
          <img
            src={assets.frame4}
            alt="Mountain adventure"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute right-[0%] top-0 rounded-3xl overflow-hidden z-0">
          <div className="relative w-full h-full">
            <img
              src={assets.frame5}
              alt="Bachelor party"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestMoments;
