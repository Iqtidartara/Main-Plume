import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { url } from "inspector";

const Demo = () => {
  return (
    <section className="w-full">
      <div
      style={
        {
          background :"url('/bgdemo.svg')",
          backgroundPosition : "center",
          backgroundRepeat:'no-repeat',
          backgroundSize:'cover',
          width:'1240px',
          height:'610.37px',
        }
      }
      className="mx-auto max-w-[80rem] px-4">
        {/* main div where I give flex property */}

        <div className="flex flex-row justify-between">
          {/* first image */}
          <div className="w-1/3">
            <Image src="/demo1.png" alt="first image" width={525} height={324} className="rounded-[1.625rem]" />
          </div>

          {/* buttons and image */}
          <div className="flex flex-col gap-4 m-10 items-center justify-between">
           
           <div className="flex flex-col gap-4 m-10 w-full"> <Button className=" text-[1.125rem] font-500 uppercase px-6 py-8 bg-[#232323] rounded-[3.23125rem]   border-[1.65px] border-solid border-[#403A35] gap-4 ">
              Shop Now
              <Image
                src="/Arrow 12.png"
                alt="arrow"
                width={50}
                height={6}
                className="w-[4.9375rem] h-2"
              />
            </Button>
            <Button className="bg-[#FBFAF6] border-[1.65px] border-solid border-[#403A35] px-6 py-8 text-[#232323] text-[1.125rem] font-500 uppercase text-center rounded-[3.23125rem] hover:text-[#fff]">explore more COLLECTION</Button>
            </div>
            <Image
              src={"/demo2.png"}
              alt="second image"
              width={530}
              height={325}
              className=""
            />
          </div>

          {/* last image */}
          <div className="w-1/3  ">
            <Image src="/demo3.png" alt="third image" width={530} height={530} className="w-[33.125rem]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
