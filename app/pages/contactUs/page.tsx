import { BigButton } from '@/components/ReusableComponents';
import React from 'react';

const page = () => {
  return (
    <div>
      <div className=" relative">
        <img
          src="/about-head.png"
          alt=""
          className=" w-[100%] max-sm:h-[20vh] "
        />
        <h2
          className="absolute top-32 font-poppins font-[700] text-[48px]  ml-32 z-0
            max-lg:top-20 max-lg:text-[30px]
             max-md:ml-20 max-md:top-12
             max-sm:ml-4 max-sm:text-[24px]
          "
        >
          Contact
        </h2>
      </div>

      <div className="container md:flex mt-20 ">
        <div className="md:w-[50%]">
          <h2 className="font-poppins text-[48px] font-[700] leading-[60px] max-sm:leading-tight max-sm:text-[35px]">
            <span className="text-[#FF7119]">Have you got </span> <br /> a
            question for us?
          </h2>
          <h4 className="font-poppins font-[500] text-[20px] my-6  ">
            Questions or special inquiries? Fill out a form and we’ll be in
            touch as soon as possible.
          </h4>

          <div className="mt-12">
            <div className="flex items-center">
              <div>
                <img src="/location.png" alt="" />
              </div>
              <div className="ml-4 pl-4 border-l-2 border-[#A7A8AB]">
                <p className="font-poppins font-[500] text-[20px]">Location </p>
                <p className="font-poppins font-[400] text-[15px] w-[85%]">
                  108 house , 234 street, fast lane, beside neighbours, City,
                  State 560000
                </p>
              </div>
            </div>

            <div className="flex my-8 items-center">
              <div>
                <img src="/clock.png" alt="" />
              </div>
              <div className="ml-4 pl-4 border-l-2 border-[#A7A8AB]">
                <p className="font-poppins font-[500] text-[20px]">Timings </p>
                <p className="font-poppins font-[400] text-[15px] w-[85%]">
                  108 house , 234 street, fast lane, beside neighbours, City,
                  State 560000
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="">
                <img src="/phone.png" alt="" />
              </div>
              <div className="ml-4 pl-4 border-l-2 border-[#A7A8AB]">
                <p className="font-poppins font-[500] text-[20px]">Phone </p>
                <p className="font-poppins font-[400] text-[15px] w-[85%]">
                  108 house , 234 street, fast lane, beside neighbours, City,
                  State 560000
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[50%] md:pl-10 max-sm:mt-12 max-md:mt-16">
          <div className="bg-white h-full rounded-2xl md:p-16 p-4">
            <p className="font-poppins font-[500] text-[36px]">Get in touch</p>
            <input
              type="text"
              placeholder="Your Name"
              className="border border-[#A7A8AB] p-2 rounded-3xl focus:outline-none focus:border-orange-500 pl-4 w-[100%] mt-8"
            />
            <input
              type="text"
              placeholder="Your Email"
              className="border border-[#A7A8AB] p-2 rounded-3xl focus:outline-none focus:border-orange-500 pl-4 w-[100%] my-8"
            />
            <textarea
              rows={5}
              placeholder="Message"
              className="border border-[#A7A8AB] p-2 rounded-3xl focus:outline-none focus:border-orange-500 pl-4 w-[100%]  mb-8"
            />
            <div className="w-[40%]">
              <BigButton content="Buy Now" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
