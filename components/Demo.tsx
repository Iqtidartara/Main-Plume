import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Demo = () => {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-[80rem] px-4">
        {/* main div where I give flex property */}

        <div className="flex flex-row justify-between">
          {/* first image */}
          <div className="w-1/3">
            <Image src="/demo1.png" alt="first image" width={200} height={400} />
          </div>

          {/* buttons and image */}
          <div>
            <Button className="">
              Shop Now
              <Image
                src="/Arrow 12.png"
                alt="arrow"
                width={50}
                height={6}
                className="w-4.9375rem h-2"
              />
            </Button>
            <Button className="bg-white px-6 py-7"></Button>

            <Image
              src={"/demo2.png"}
              alt="second image"
              width={200}
              height={400}
            />
          </div>

          {/* last image */}
          <div className="w-1/3">
            <Image src="/demo3.png" alt="third image" width={200} height={400} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
