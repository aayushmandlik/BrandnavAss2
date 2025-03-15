import React from "react";
import { assets } from "../assets/assets";

const Mobile = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center text-[#31323d] pb-32 lg:pt-0 px-10">
      <h1 className="text-[24px] lg:text-[40px] font-medium">
        AirVault doesn’t just store your media.
      </h1>
      <h1 className="lg:text-[68px] text-[36px] font-bold lg:my-0 my-3">
        We track your memories.
      </h1>
      <p className="lg:text-[22px] text-[18px] font-medium  lg:my-0 my-3">
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
