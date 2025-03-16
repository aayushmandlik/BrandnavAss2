import React from "react";
import { assets } from "../assets/assets";
import { useMediaQuery } from "react-responsive";

const Products = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className="lg:mt-15 mt-80 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-center text-[#31323d] text-[22px] md:text-[32px] font-medium mb-10 px-3.5 md:px-44">
          Explore our wide selection of products that helps you
          {/* <br /> */} preserve your memories, in your own style.
        </h2>

        {/* <div className="flex flex-col"> */}
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-4 md:mx-0">
          {/* AirVault Cloud */}
          <div className="bg-white rounded-[48px] text-[#58585c] flex flex-col w-full px-8 md:px-14 lg:px-0">
            <h3 className="lg:text-[40px] text-[36px] font-medium pt-10 mb-3 lg:px-20 px-0.5 ">
              <span className="bg-gradient-to-r from-[#4873ff] via-[#593cff] to-[#ff3ccb] bg-clip-text text-transparent font-extrabold">
                AirVault Cloud
              </span>{" "}
              is built for people who like it to keep it{" "}
              <span className="font-bold text-[#31323d]">simple</span>.
            </h3>

            <p className="text-[#64667a] text-[18px] md:text-[22px] mt-4 md:mt-0 font-medium lg:px-20 px-0">
              AirVault Cloud lets you pack light on your trips so you can{" "}
              <span className="font-bold text-[#31323d]">
                explore the world with just your phone
              </span>
              .
            </p>

            <div className="flex justify-between flex-col md:flex-row md:items-center mt-12 md:mt-auto gap-6 md:gap-0">
              <button className="border border-black rounded-full px-[24px] py-[12px] text-xl font-semibold hover:bg-gray-50 w-fit lg:ml-20 ml-0">
                Try AirVault Now
              </button>

              <div className="md:w-[40%] w-full overflow-hidden">
                <img
                  src={
                    isMobile ? assets.cloudproductmobile : assets.cloudproduct
                  }
                  alt="Phone with AirVault Cloud app"
                  className="w-full h-[255px] md:h-full md:rounded-br-[48px]"
                />
              </div>
            </div>
          </div>

          {/* AirVault Go */}
          <div className="bg-white rounded-[48px] text-[#58585c] flex-1 relative overflow-hidden">
            <h3 className="lg:text-[40px] text-[36px] font-medium pt-10 mb-3 lg:px-20 px-8">
              <span className="bg-gradient-to-r from-[#4873ff] via-[#593cff] to-[#ff3ccb] bg-clip-text text-transparent font-extrabold">
                AirVault Go
              </span>{" "}
              is built for people who like to keep it{" "}
              <span className="font-bold text-[#31323d]">close</span>.
            </h3>

            <div className="flex flex-col justify-start relative">
              <p className="text-[#64667a] w-[70%] text-[18px] md:text-[22px] font-medium lg:mb-15 mb-0 lg:px-20 px-8">
                AirVault Go lets you{" "}
                <span className="font-bold text-[#31323d]">
                  keep all your memories in your pocket
                </span>
                , so you can take them with you even on the craziest of
                adventures.
              </p>

              <button className="border border-black my-10 md:my-4 rounded-full px-[24px] py-[12px] text-[18px] font-semibold hover:bg-gray-50 w-fit lg:ml-20 ml-8">
                Try AirVault Now
              </button>
              <div className="absolute -right-10 md:right-0 overflow-hidden lg:top-[-90px] top-[-50px] h-[105%] lg:h-[150%]">
                <img
                  src={assets.goproduct}
                  alt="AirVault Go device"
                  className="w-[105%] h-[105%] lg:w-[120%] lg:h-[100%]"
                />
              </div>
            </div>
          </div>
        </div>
        {/* AirVault Pro - Full Width */}
        <div className="flex items-start flex-col md:flex-row gap-6 bg-white mx-4 md:mx-0 pl-8 md:pl-10 pt-10 rounded-[48px] mt-5 md:col-span-2 relative">
          <div className="flex flex-col justify-between md:justify-start w-full md:w-5/12">
            <h3 className="text-[40px] text-[#58585c] font-medium mb-2">
              <span className="text-[40px] font-extrabold bg-gradient-to-r from-[#ff9900] via-[#f56f2c] to-[#b41fff] bg-clip-text text-transparent">
                AirVault Pro
              </span>{" "}
              is built for people who are hungry for{" "}
              <span className="font-extrabold">power</span>.
            </h3>
            <div className="relative mt-4 md:mt-0">
              <p className="text-[#64667a] text-[18px] md:text-[22px] font-medium pr-6 mb-4 relative z-10">
                AirVault Pro brings together the power of distributed hosting
                into a single compact package, allowing your team to
                <span className="font-bold text-[#31323d]">
                  {" "}
                  simultaneously access all your files at blazing fast speed!
                </span>
              </p>

              <button className="border border-black rounded-full px-[24px] py-[12px] my-12 text-xl font-semibold hover:bg-gray-50">
                Try AirVault Now
              </button>
            </div>
          </div>

          <div className="md:w-7/12 w-full overflow-hidden">
            <img
              src={assets.nas}
              alt="AirVault Pro server"
              className="w-full rounded-br-[48px] md:ml-0 scale-100 md:scale-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
