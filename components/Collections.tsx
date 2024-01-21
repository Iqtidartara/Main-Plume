import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const Collections = () => {
  return (
    <section className="w-full">
      <main className="max-w-[80rem] mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-[#4A3D2E] md:text-[3.125rem] text-[2rem] font-[700] leading-[100%] uppercase text-center">
            Our Winter collection
          </h1>
          <p className="text-[#4A3D2E] md:text-[1.2625rem] text-[1rem] font-[400] leading-[140%] text-center">
            Discover the Cozy Chic: Our Winter Collection 2023. Stay <br />
            warm while looking fabulous this season!
          </p>
          {/* cards */}
          <div className="bg-[#EFDCC7] w-[582px] h-[397px] p-[3rem] rounded-tr-[4.75rem] rounded-bl-[4.75rem] flex ">
            {/* card content */}
            <div className="w-[70%]">
            <h2 className="leading-[119.248%] text-[2.5rem] font-[600] text-[#232323]">
              Women
            </h2>
            <p className="leading-[153.421%] font-[500] text-[#5B5B5B] text-[1.07325rem] my-[1.88rem]">
              Elevate Your Winter Style: Must-Have Fashion Essentials for Women.
              Stay Chic and Cozy with Our Latest Winter Collection
            </p>
            <Button className="bg-transparent border border-1px border-black text-[0.75rem] text-[#232323] font-[500] mt-4 py-[1.25719rem] px-10 rounded-none hover:text-[#FFF]">
              Shop Now
            </Button>
          </div>

          <div className="w-[30%]">
            <Image src="/1a.png" alt="" width={369} height={394}/>
          </div>
          </div>


        </div>
      </main>
    </section>
  );
};

export default Collections;
