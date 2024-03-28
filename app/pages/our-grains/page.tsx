import { BestSellerCard } from '@/components/ReusableComponents';
import React from 'react';

const Page = () => {
  return (
    <div>
      <div className=" relative">
        <img
          src="/grains-head.png"
          alt=""
          className=" w-[100%] max-sm:h-[20vh] "
        />
        <h2
          className="absolute top-32 font-poppins font-[500] text-[36px]  ml-32 z-0 leading-[40px]
            max-lg:top-20 max-lg:text-[30px]
             max-md:ml-20 max-md:top-12
             max-sm:ml-4 max-sm:text-[24px]
          "
        ></h2>
      </div>

      <div className="container mt-20">
        <h1 className="font-yatra font-[400] text-[75px] leading-[90px] ">
          Ragi or Finger Millet
        </h1>
        <h4 className="font-[300] text-[20px] font-poppins  my-6">
          Locally Known as: Mandua/Mangal (Hindi, Machni (Marathi),
          Taidalu(Telangana))
        </h4>
        <p className="font-poppins font-[400] text-[15px] w-[80%]">
          Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum
          dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit
          amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum
          dolor sit amet.Lorem ipsum dolor sit amet.
          <br /> <br />
          Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum
          dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit
          amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum
          dolor sit amet.Lorem ipsum dolor sit amet.
          <br /> <br />
          Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum
          dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit
          amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum
          dolor sit amet.Lorem ipsum dolor sit amet.
        </p>

        <div className="relative mt-20 px-auto ">
          <div>
            <img src="/stats.png" alt="" />
          </div>
          <div>
            <p className="absolute top-20 right-[48%] text-[36px] font-[500] font-poppins leading-10 text-white">
              7.3g <br />{' '}
              <span className="font-poppins text-[20px] ">Protein</span>
            </p>
            <p className="absolute top-20 right-[72%] text-[36px] font-[500] font-poppins leading-10 text-white">
              7.3g <br />{' '}
              <span className="font-poppins text-[20px] ">Protein</span>
            </p>
            <p className="absolute top-[45%] right-[88%] text-[36px] font-[500] font-poppins leading-10 text-white">
              7.3g <br />{' '}
              <span className="font-poppins text-[20px] ">Protein</span>
            </p>
            <p className="absolute bottom-20 right-[75%] text-[36px] font-[500] font-poppins leading-10 text-white">
              7.3g <br />{' '}
              <span className="font-poppins text-[20px] ">Protein</span>
            </p>
            <p className="absolute top-[45%] right-[35%] text-[36px] font-[500] font-poppins leading-10 text-white">
              7.3g <br />{' '}
              <span className="font-poppins text-[20px] ">Protein</span>
            </p>
            <p className="absolute bottom-20 right-[45%] text-[36px] font-[500] font-poppins leading-10 text-white">
              7.3g <br />{' '}
              <span className="font-poppins text-[20px] ">Protein</span>
            </p>
          </div>
        </div>

        <div className="mt-20">
          <div>
            <img src="/leaf.png" alt="leaf" className="mx-auto" />
          </div>
          <p className="font-poppins text-[34px] font-[500] text-center max-sm:text-[28px]">
            Benefits
          </p>

          <div className="flex gap-3 mt-4">
            <p className="w-8 h-8 bg-[#FF7119] rounded-3xl"></p>
            <p className="font-[400] font-poppins text-[15px]">
              Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit
              amet.
            </p>
          </div>
          <div className="flex gap-3 mt-4">
            <p className="w-8 h-8 bg-[#FF7119] rounded-3xl"></p>
            <p className="font-[400] font-poppins text-[15px]">
              Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit
              amet.
            </p>
          </div>
          <div className="flex gap-3 mt-4">
            <p className="w-8 h-8 bg-[#FF7119] rounded-3xl"></p>
            <p className="font-[400] font-poppins text-[15px]">
              Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit
              amet.
            </p>
          </div>
        </div>
        <div className="mt-20">
          <div>
            <img src="/leaf.png" alt="leaf" className="mx-auto" />
          </div>
          <p className="font-poppins text-[34px] font-[500] text-center max-sm:text-[28px]">
            Our Products with Ragi
          </p>
          <p className="font-[400] font-poppins text-[15px] text-center my-6">
            Wide selection of organic and plant-based snacks, meals, finger
            foods and purées.
          </p>
          <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
            <BestSellerCard content="Instant Millet Mix 228g" />
            <BestSellerCard content="Instant Millet Mix 228g" />
            <BestSellerCard content="Instant Millet Mix 228g" />
            <BestSellerCard content="Instant Millet Mix 228g" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
