'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNavbar = () => {
    setShowNav(!showNav);
  };
  return (
    <div className="h-[12vh] w-[100%] bg-white drop-shadow-md max-md:h-[8vh] relative z-50">
      <div className="container h-full flex items-center justify-between ">
        <p className="font-yatra font-[400] text-[32px] text-[#5E381A] md:max-lg:text-[28px]">
          Balvvardhak
        </p>
        {showNav ? (
          <span onClick={toggleNavbar}>✕</span>
        ) : (
          // <img

          //   src="/menuicon.png"
          //   alt="menuicon"
          //   className="w-8 h-8 lg:hidden"
          // />
          <div className="relative">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={toggleNavbar}
              className="w-8 h-8 md:hidden z-50"
            >
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        )}

        {showNav && (
          <div className="absolute top-24 left-0  w-full h-auto bg-white rounded-md p-2 flex flex-col z-50 max-md:top-16">
            <Link
              href="/"
              className="font-poppins font-[400] text-[15px] py-3 hover:bg-[#F0F7FF] cursor-pointer text-center"
            >
              Home
            </Link>
            <Link
              href="./pages/aboutUs"
              className="font-poppins font-[400] text-[15px] py-3 hover:bg-[#F0F7FF] cursor-pointer text-center"
            >
              Our Story
            </Link>
            <Link
              href="/pages/our-recipes"
              className="font-poppins font-[400] text-[15px] py-3 hover:bg-[#F0F7FF] cursor-pointer text-center"
            >
              Our Recipes
            </Link>
            <Link
              href="/pages/blogs"
              className="font-poppins font-[400] text-[15px] py-3 hover:bg-[#F0F7FF] cursor-pointer text-center"
            >
              Blogs
            </Link>
            <Link
              href="/pages/our-grains"
              className="font-poppins font-[400] text-[15px] py-3 hover:bg-[#F0F7FF] cursor-pointer text-center"
            >
              Our Grains
            </Link>
            <Link
              href="/pages/contactUs"
              className="font-poppins font-[400] text-[15px] py-3 hover:bg-[#F0F7FF] cursor-pointer text-center"
            >
              Contact Us
            </Link>
          </div>
        )}

        <div className="flex gap-5 max-md:hidden md:max-lg:gap-3">
          <Link href="/" className="font-poppins font-[400] text-[15px]">
            Home
          </Link>
          <Link
            href="/pages/aboutUs"
            className="font-poppins font-[400] text-[15px]"
          >
            Our Story
          </Link>
          <Link
            href="/pages/our-recipes"
            className="font-poppins font-[400] text-[15px]"
          >
            Our Recipes
          </Link>
          <Link
            href="/pages/blogs"
            className="font-poppins font-[400] text-[15px]"
          >
            Blogs
          </Link>
          <Link
            href="/pages/our-grains"
            className="font-poppins font-[400] text-[15px]"
          >
            Our Grains
          </Link>
          <Link
            href="/pages/contactUs"
            className="font-poppins font-[400] text-[15px]"
          >
            Contact Us
          </Link>
          <div className="ml-4 md:max-lg:ml-0">
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
