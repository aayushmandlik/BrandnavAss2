import React from "react";
import { assets } from "../assets/assets";

const Mobile = () => {
  return (
    <div className="flex flex-col items-center justify-center text-[#31323d] pt-5 pb-32">
      <h1 className="text-[40px] font-medium">
        AirVault doesn’t just store your media.
      </h1>
      <h1 className="text-[68px] font-bold">We track your memories.</h1>
      <p className="text-[22px] font-medium">
        Your entire life-story right at your fingertips.
      </p>
      <button className="mt-5 py-[12px] px-[24px] bg-[#ff6a00] rounded-[67px] text-[18px] font-semibold text-white cursor-pointer">
        Try AirVault Now
      </button>
      <img className="mt-32" src={assets.mobile} alt="" />
    </div>
  );
};

export default Mobile;
