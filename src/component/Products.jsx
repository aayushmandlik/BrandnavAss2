import React from "react";
import { assets } from "../assets/assets";

const Products = () => {
  //   return (
  //     <div className="flex flex-col justify-center items-center p-10 mt-32">
  //       <div className="text-center max-w-3xl mx-auto">
  //         <p className="text-3xl text-[#31323d] front-medium">
  //           Explore our wide selection of products that helps you preserve your
  //           memories, in your own style.
  //         </p>
  //         <div className="flex">
  //           <div className="bg-[#ffffff] rounded-lg">
  //             <div>
  //               <span>AirVault Cloud</span>
  //               <span></span>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );

  return (
    <div className="mt-15 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-center text-[#31323d] text-[32px] font-medium mb-10">
          Explore our wide selection of products that helps you
          <br />
          preserve your memories, in your own style.
        </h2>

        {/* <div className="flex flex-col"> */}
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* AirVault Cloud */}
          <div className="bg-white rounded-[48px] text-[#58585c] flex flex-col w-full">
            <h3 className="text-[40px] font-medium px-14 pt-10 mb-3">
              <span className="bg-gradient-to-r from-[#4873ff] via-[#593cff] to-[#ff3ccb] bg-clip-text text-transparent font-extrabold">
                AirVault Cloud
              </span>{" "}
              is built for people who like it to keep it{" "}
              <span className="font-bold text-[#31323d]">simple</span>.
            </h3>

            <p className="text-[#64667a] text-[22px] px-14 font-medium">
              AirVault Cloud lets you pack light on your trips so you can{" "}
              <span className="font-bold text-[#31323d]">
                explore the world with just your phone
              </span>
              .
            </p>

            <div className="flex justify-between items-center mt-auto">
              <button className="border border-black rounded-full px-[24px] py-[12px] ml-14 text-xl font-semibold hover:bg-gray-50">
                Try AirVault Now
              </button>

              <div className="w-[40%] overflow-hidden">
                <img
                  src={assets.cloudproduct}
                  alt="Phone with AirVault Cloud app"
                  className="w-full rounded-br-[48px]"
                />
              </div>
            </div>
          </div>

          {/* AirVault Go */}
          <div className="bg-white rounded-[48px] text-[#58585c] flex-1 relative">
            <h3 className="text-[40px] font-medium px-14 pt-10 mb-3">
              <span className="bg-gradient-to-r from-[#4873ff] via-[#593cff] to-[#ff3ccb] bg-clip-text text-transparent font-extrabold">
                AirVault Go
              </span>{" "}
              is built for people who like to keep it{" "}
              <span className="font-bold text-[#31323d]">close</span>.
            </h3>

            <div className="flex justify-start relative">
              <p className="text-[#64667a] w-[60%] text-[22px] pl-14 font-medium mb-4 relative z-10">
                AirVault Go lets you{" "}
                <span className="font-bold text-[#31323d]">
                  keep all your memories in your pocket
                </span>
                , so you can take them with you even on the craziest of
                adventures.
              </p>

              <div className="w-[60%] absolute right-0 top-[-90px]">
                <img
                  src={assets.goproduct}
                  alt="AirVault Go device"
                  className="w-full"
                />
              </div>
            </div>

            <div className="flex justify-between items-center mt-10">
              <button className="border border-black rounded-full px-[24px] py-[12px] ml-14 text-xl font-semibold hover:bg-gray-50">
                Try AirVault Now
              </button>
            </div>
          </div>
        </div>
        {/* AirVault Pro - Full Width */}
        <div className="bg-white pl-10 pt-10 pb-20 rounded-[48px] mt-5 md:col-span-2 relative">
          <h3 className="text-[40px] text-[#58585c] font-medium mb-2 w-[40%]">
            <span className="text-[40px] font-extrabold bg-gradient-to-r from-[#ff9900] via-[#f56f2c] to-[#b41fff] bg-clip-text text-transparent">
              AirVault Pro
            </span>{" "}
            is built for people who are hungry for{" "}
            <span className="font-extrabold">power</span>.
          </h3>

          <div className="flex flex-col md:flex-row justify-between">
            <div className="md:w-1/2 relative">
              <p className="text-[#64667a] text-[22px] font-medium w-[80%] mb-4 relative z-10">
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

            <div className="w-[60%] absolute right-0 top-[50px]">
              <img
                src={assets.nas}
                alt="AirVault Pro server"
                className="w-full rounded-[48px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
