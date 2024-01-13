import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const HomeSection = () => {
  return (
    <section className="w-full">
      <main className="mx-auto max-w-[80rem] flex items-center justify-start flex-col md:flex-row gap-[68px] md:px-8 px-4">
        {/* content div */}
        <div className="w-full md:w-1/2 flex items-start justify-center flex-col">
          <h1 className="text-[#4A3D2E] md:text-[3.9375rem] text-[2rem] font-[800] md:leading-[130.159%] leading-[1.3] md:text-start text-center">
            Dive into a world of endless fashion possibilities
          </h1>
          <p className="md:text-[1.1875rem] text-[1rem] text-[#4A3D20] font-[400] md:leading-[200%] leading-[1.4] md:mt-[1.75rem] mt-2 md:text-start text-center">
            Dive into a realm of endless fashion possibilities. Explore our
            diverse collections and redefine your style. Your fashion journey
            begins here
          </p>

          <div className="flex flex-col md:flex-row items-start  gap-4 md:mt-[3rem] mt-[2rem] w-full">

            <Button className="bg-[#232323] hover:bg-[#a0a0a0e8] text-[#fff] md:text-[1.18319rem] text-[1rem] font-[700] md:px-[3.13688rem] px-0 md:py-7 py-7 rounded-full border-4 border-[#000] md:w-auto w-full">
              Explore Now
            </Button>
            <Button className="bg-[#FFF] text-[#232323] hover:bg-[#a0a0a0] text-[1.18319rem] font-[700] px-[3.13688rem] py-7 rounded-full border-4 border-[#000] md:w-auto w-full">
              Explore Now
            </Button>
          </div>
          <p className="tracking-[0.02119rem] leading-[133.333%] font-[600] text-[0.84763rem] text-[#374151] mt-[2.3rem]">
            20% discount over 47$ use code 7djk#8hH7
          </p>
        </div>
        {/* image div */}
        <div className="w-full md:w-1/2">
          <Image
            src="/Herosection.png"
            alt="Fashion"
            width={629}
            height={715}
            className=""
          />
        </div>
      </main>
    </section>
  );
};

export default HomeSection;
