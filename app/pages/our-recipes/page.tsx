'use client';
import { RecipiesCard } from '@/components/ReusableComponents';
import React, { useState } from 'react';

const Page = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="">
      <div className="relative">
        <img
          src="/recipe-head.png"
          alt=""
          className="w-[100%] max-sm:h-[20vh]  "
        />
        <h2
          className="absolute top-32 font-poppins font-[700] text-[48px]  ml-32 z-0
          max-lg:top-20 max-lg:text-[30px]
           max-md:ml-20 max-md:top-12
           max-sm:ml-4 max-sm:text-[24px]
        "
        >
          Our Recipes
        </h2>
      </div>
      <div className="mt-20 container max-sm:mt-6">
        <div>
          <img src="/leaf.png" alt="leaf" className="mb-2 mx-auto" />
        </div>
        <h3 className="text-center font-poppins text-[34px] font-[500]  max-sm:text-[28px] mb-4 ">
          In Spotlight
        </h3>

        <div className="flex justify-between mt-8 max-md:flex-col">
          <RecipiesCard recipie="Ragi Paratha" />
          <RecipiesCard recipie="Ragi Paratha" />
          <RecipiesCard recipie="Ragi Paratha" />
        </div>
      </div>

      <div className="mt-20 container">
        <div>
          <img src="/leaf.png" alt="leaf" className="mb-2 mx-auto" />
        </div>
        <h3 className="text-center font-poppins text-[34px] font-[500]  max-sm:text-[28px] mb-4 ">
          Supergrain in every meal
        </h3>

        <div className="flex justify-center gap-3">
          <div
            className={`tab ${
              activeTab === 1
                ? 'font-poppins text-[20px] font-[500] text-black underline underline-[#FF7119] cursor-pointer decoration-[#FF7119]'
                : 'text-[#A7A8AB] font-[500] font-poppins text-[20px] cursor-pointer hover:text-gray-500 duration-125'
            }`}
            onClick={() => handleTabClick(1)}
          >
            Breakfast
          </div>
          <div
            className={`tab ${
              activeTab === 2
                ? 'font-poppins text-[20px] font-[500] text-black underline underline-[#FF7119] cursor-pointer decoration-[#FF7119]'
                : 'text-[#A7A8AB] font-[500] font-poppins text-[20px] cursor-pointer hover:text-gray-500 duration-125'
            }`}
            onClick={() => handleTabClick(2)}
          >
            Lunch
          </div>
          <div
            className={`tab ${
              activeTab === 3
                ? 'font-poppins text-[20px] font-[500] text-black underline underline-[#FF7119] cursor-pointer decoration-[#FF7119]'
                : 'text-[#A7A8AB] font-[500] font-poppins text-[20px] cursor-pointer hover:text-gray-500 duration-125'
            }`}
            onClick={() => handleTabClick(3)}
          >
            Dinner
          </div>
          <div
            className={`tab ${
              activeTab === 4
                ? 'font-poppins text-[20px] font-[500] text-black underline underline-[#FF7119] cursor-pointer decoration-[#FF7119]'
                : 'text-[#A7A8AB] font-[500] font-poppins text-[20px] cursor-pointer hover:text-gray-500 duration-125'
            }`}
            onClick={() => handleTabClick(4)}
          >
            Snacks
          </div>
          {activeTab === 1 && ''}
          {activeTab === 2 && ''}
          {activeTab === 3 && ''}
          {activeTab === 4 && ''}
        </div>

        <div className="flex justify-between mt-8 max-md:flex-col">
          <RecipiesCard recipie="Ragi Paratha" />
          <RecipiesCard recipie="Ragi Paratha" />
          <RecipiesCard recipie="Ragi Paratha" />
        </div>
      </div>

      <div className="mt-20 container">
        <div>
          <img src="/leaf.png" alt="leaf" className="mb-2 mx-auto" />
        </div>
        <h3 className="text-center font-poppins text-[34px] font-[500]  max-sm:text-[28px] mb-4 ">
          By Ingredients
        </h3>

        <div className="flex justify-center gap-3">
          <div
            className={`tab ${
              activeTab === 1
                ? 'font-poppins text-[20px] font-[500] text-black underline underline-[#FF7119] cursor-pointer decoration-[#FF7119]'
                : 'text-[#A7A8AB] font-[500] font-poppins text-[20px] cursor-pointer hover:text-gray-500 duration-125'
            }`}
            onClick={() => handleTabClick(1)}
          >
            Breakfast
          </div>
          <div
            className={`tab ${
              activeTab === 2
                ? 'font-poppins text-[20px] font-[500] text-black underline underline-[#FF7119] cursor-pointer decoration-[#FF7119]'
                : 'text-[#A7A8AB] font-[500] font-poppins text-[20px] cursor-pointer hover:text-gray-500 duration-125'
            }`}
            onClick={() => handleTabClick(2)}
          >
            Lunch
          </div>
          <div
            className={`tab ${
              activeTab === 3
                ? 'font-poppins text-[20px] font-[500] text-black underline underline-[#FF7119] cursor-pointer decoration-[#FF7119]'
                : 'text-[#A7A8AB] font-[500] font-poppins text-[20px] cursor-pointer hover:text-gray-500 duration-125'
            }`}
            onClick={() => handleTabClick(3)}
          >
            Dinner
          </div>
          <div
            className={`tab ${
              activeTab === 4
                ? 'font-poppins text-[20px] font-[500] text-black underline underline-[#FF7119] cursor-pointer decoration-[#FF7119]'
                : 'text-[#A7A8AB] font-[500] font-poppins text-[20px] cursor-pointer hover:text-gray-500 duration-125'
            }`}
            onClick={() => handleTabClick(4)}
          >
            Snacks
          </div>
          {activeTab === 1 && ''}
          {activeTab === 2 && ''}
          {activeTab === 3 && ''}
          {activeTab === 4 && ''}
        </div>

        <div className="flex justify-between mt-8 max-md:flex-col">
          <RecipiesCard recipie="Ragi Paratha" />
          <RecipiesCard recipie="Ragi Paratha" />
          <RecipiesCard recipie="Ragi Paratha" />
        </div>
      </div>
    </div>
  );
};

export default Page;
