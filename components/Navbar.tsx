"use client";
import { cn } from "@/lib/utils";
import { Popover } from "@headlessui/react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";



import { Button } from "@/components/ui/button";



const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const handleLinkClick = () => {

    setMenuOpen(false);
  };

  const links = [
    { href: "/", label: "HOME" },
    { href: "/About", label: "ABOUT US" },
    { href: "/Shop", label: "SHOP" },
    { href: "/Collections", label: "COLLECTIONS" },
  ];


  return (
    <div className="w-full bg-[#fffff] ">
      <Popover className="container mx-auto flex items-center py-8  max-w-[80rem] px-4 ">
        <Image
          src="/Logo.png"
          width={600}
          height={300}
          alt="logo"
          className="md:w-[190px] md:h-[41px] sm:w-[150px] sm:h-[41px]  w-[120px] h-[41px] "
        />
        <div className="grow">
          <div className="hidden sm:flex items-center justify-center gap-2 md:gap-12">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={cn(
                  "font-[500] text-[12px] leading-[416.667%]  text-[#232323] uppercase",
                  pathname.toLocaleLowerCase() === link.href.toLocaleLowerCase()
                    ? "current-page-text"
                    : ""
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex grow items-center justify-end sm:hidden">
          <Popover.Button
            className="inline-flex items-center justify-center rounded-md p-2  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 buttongradient text-black"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="sr-only">Open menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>

        <div
          className={`absolute inset-x-0 top-0 origin-top-right transform p-2 transition ${
            menuOpen ? "md:hidden" : "hidden"
          }`}
        >
          <div className="rounded-lg text-[#323232] text-center  bg-white  shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
              <Image
          src="/Logo.png"
          width={600}
          height={300}
          alt="logo"
          className=" w-[120px] h-[41px] object-contain"
        />
                <div className="mr-2">
                  <Popover.Button
                    className="inline-flex items-center justify-center rounded-md bg- p-2 text-black  hover-bg-gray-100 hover-text-gray-500 focus-outline-none focus-ring-2 focus-ring-inset focus-ring-indigo-500"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="sr-only ">Close menu</span>
                    <X className="h-6 w-6 buttongradient" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {links.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className={cn(
                        "focus-outline-none focus-ring-2 focus-ring-inset focus-ring-gray-500 px-2 font-[400] text-[0.75rem] leading-[1.1]  text-[#232323] uppercase",
                        pathname.toLocaleLowerCase() ===
                          link.href.toLocaleLowerCase()
                          ? "current-page-text"
                          : ""
                      )}
                      onClick={handleLinkClick}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
             
            </div>
          </div>
        </div>

        <div className="hidden sm:block">
       
        <Button className="hover:bg-[#232323e7] bg-[#232323] rounded-full px-8 py-3 text-[0.80556rem] font-[600] leading-normal ">Shop Now</Button>
      
        </div>
      </Popover>
    </div>
  );
};

export default Navbar;