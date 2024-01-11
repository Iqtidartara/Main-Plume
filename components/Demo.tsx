import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Demo = () => {

  return (
    <section className="w-full">
      <div className="mx-auto max-w-[80rem] px-4 flex gap-10"
      style={{
        background :"url('/Rectangle 2075.svg')",
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover"
      }}>
        {/* 1st image  */}
        
          <Image
            src={"/demo1.png"}
            alt="dress"
            width={313}
            height={574}
            className="rounded-[12px]"
          />
        </div>
        {/* button and Image */}
        <div className="flex  justify-between flex-col w-[40%]  ">
          <div className="flex flex-col gap-4 p-4 bg-[#FF]">
            <Button className="text-[#FFF] text-[1.125rem] font-[700] leading-[305.556%] bg-[#232323] rounded-full px-16 py-8 gap-2 uppercase border-[1.65px] border-[#000] hover:bg-slate-400">
              Shop now{" "}
              <Image src="/Arrow 12.png" width={70} height={10} alt="arrow" />{" "}
            </Button>
            <Button className="bg-[#FBFAF6]  border-[1.65px] border-[#403A35] px-16 py-8 text-[#333] text-[1.125rem] uppercase font-[700] leading-[305.556%] rounded-full hover:bg-slate-400">
              explore more COLLECTION
            </Button>
          </div>
          <div className=" ">
            <Image
              alt="demo2"
              src="/demo2.png"
              width={325}
              height={530}
              className="w-full rounded-[12px]"
            />
          </div>
        </div>
        {/* 3rd Image */}
        <div className=" rounded-[36px]">
          <Image src="/demo3.png" alt="demo3" width={316} height={572} />
        </div>
      


    </section>
  );
};

export default Demo;
