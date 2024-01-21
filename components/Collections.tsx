import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const cardData = [
  {
    title: "Women",
    description:
      "Elevate Your Winter Style: Must-Have Fashion Essentials for Women. Stay Chic and Cozy with Our Latest Winter Collection",
    imageSrc: "/card1.png",
    buttonText: "Shop Now",
  },
  {
    title: "Children",
    description:
      "Our enchanting dresses offer comfort and charm, perfect for your child's special occasions",
    imageSrc: "/card2.png",
    buttonText: "Shop Now",
  },
  {
    title: "Men",
    description:
      "Revamp your look with our contemporary men's fashion, where comfort meets style. Elevate your confidence, one outfit at a time.",
    imageSrc: "/card3.png",
    buttonText: "Shop Now",
  },
  {
    title: "New Collection",
    description:
      "Elevate your style with our stunning new collection. From timeless classics to bold trends, we have something for everyone.",
    imageSrc: "/card4.png",
    buttonText: "Shop Now",
  },
  // Add more card data as needed
];

const Collections: React.FC = () => {
  return (
    <section className="w-full">
      <main className="max-w-[80rem] mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-[#4A3D2E] text-3.125rem font-bold leading-3.125rem uppercase">
            Our Winter collection
          </h1>
          <p className="text-[#4A3D20] text-center text-1.5625rem font-normal leading-2.1875rem">
            Discover the Cozy Chic: Our Winter Collection 2023. Stay <br />
            warm while looking fabulous this season!
          </p>

          {/* Map over cardData to render each card */}
          <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-8 mt-6">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="bg-[#EFDCC7] h-[397px] pl-[3rem] pt-[3rem] pr-0 pb-0 rounded-tr-[4.75rem] rounded-bl-[4.75rem] flex flex-col lg:flex-row "
              >
                {/* Card content */}
                <div className="w-full lg:w-[70%]">
                  <h2 className="leading-[119.248%] text-2.5rem font-[600] text-[#232323]">
                    {card.title}
                  </h2>
                  <p className="leading-[153.421%] font-[500] text-[#5B5B5B] text-[1.07325rem] my-[1.88rem]">
                    {card.description}
                  </p>
                  <Button className="bg-transparent border border-1px border-black text-[0.75rem] text-[#232323] font-[500] mt-4 py-[1.25719rem] px-10 rounded-none hover:text-[#FFF]">
                    {card.buttonText}
                  </Button>
                </div>

                {/* Card image */}
                <div className="flex items-center justify-center w-full lg:w-[69%] mt-6 lg:mt-0">
                  <Image
                    src={card.imageSrc}
                    alt={`Card ${index + 1}`}
                    className="aspect-square object-contain object-center w-full max-w-[300px] max-h-[300px] overflow-hidden grow"
                    width={400}
                    height={300}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
};

export default Collections;
