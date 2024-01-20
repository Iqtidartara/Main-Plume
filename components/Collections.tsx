import React from "react";

const Collections = () => {


  return (
    <section className="w-full">
      <main className="max-w-[80rem] mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-[#4A3D2E] md:text-[3.125rem] text-[2rem] font-[700] leading-[100%] uppercase text-center">
            Our Winter collection
          </h1>
          <p className="text-[#4A3D2E] md:text-[1.2625rem] text-[1rem] font-[400] leading-[140%] text-center">
            Discover the Cozy Chic: Our Winter Collection 2023. Stay <br/>warm while
            looking fabulous this season!
          </p>
          {/* cards */}
<div className="bg-[#EFDCC7]">
<h2>the case </h2>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptates amet obcaecati sunt. Facere ut adipisci numquam, laudantium nisi maiores autem dignissimos obcaecati quam, minus facilis dicta minima earum possimus!</p>
</div>
          <div className="flex flex-row justify-between mt-10">
            {/* first image */}
            <div className="w-1/3">
              <img src="/demo.png" alt="demo" />
            </div>

            {/* buttons and image */}
            <div className="flex flex-col gap-4  w-1/3 mt-10">
              <div className="flex flex-col gap-4  w-full">
                <button className=" text-[1.125rem] font-500 uppercase px-6 py-8 bg-[#232323] rounded-[3.23125rem]   border-[1.65px] border-solid border-[#403A35] gap-4 ">
                  Shop Now
                  <img
                    src="/Arrow 12.png"
                    alt="arrow"
                    width={50}
                    height={6}
                    className="w-[4.9375rem] h-2"
                  />
                </button>
                <button className="bg-[#FBFAF6] border-[1.65px] border-solid border-[#403A35] px-6 py-8 text-[#232323] text-[1.125rem] font-500 uppercase text-center rounded-[3.23125rem] hover:text-[#fff]">
                  explore more COLLECTION
                </button>
              </div>
            </div>

            {/* last image */}
            <div className="w-1/3">
              <img src="/demo.png" alt="demo" />
            </div>
</div>

        </div>
      </main>
    </section>
  );
};

export default Collections;
