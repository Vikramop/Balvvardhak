import {
  BlogPageCard,
  BlogPageSideCard,
  SearchBox,
} from '@/components/ReusableComponents';
import React from 'react';

const Page = () => {
  return (
    <div>
      <div className=" relative">
        <img
          src="/blog-head.png"
          alt=""
          className=" w-[100%] max-sm:h-[20vh] "
        />
        <h2
          className="absolute top-32 font-poppins font-[500] text-[36px]  ml-32 z-0 leading-[40px]
            max-lg:top-20 max-lg:text-[30px]
             max-md:ml-20 max-md:top-12
             max-sm:ml-4 max-sm:text-[24px]
          "
        >
          <span className="font-poppins font-[400] text-[15px]">Our Blogs</span>{' '}
          <br />
          Latest Posts
        </h2>
      </div>

      <div className="container mt-6 flex gap-5">
        <div className="w-[75%] max-md:w-[100%]">
          <BlogPageCard />
          <BlogPageCard />
          <BlogPageCard />
          <BlogPageCard />
        </div>

        <div className="w-[25%] max-md:hidden">
          <div>
            <SearchBox />
            <h3 className="mt-6 text-[36px] font-[500] font-poppins">
              Recent Posts
            </h3>
            <div className="divide-y-2 divide-[#A7A8AB] -mt-2">
              <BlogPageSideCard />
              <BlogPageSideCard />
              <BlogPageSideCard />
              <BlogPageSideCard />
              <BlogPageSideCard />
            </div>
          </div>

          <div className="mt-32">
            <h3 className="font-[500] text-[36px] font-poppins">Categories</h3>
            <div className="divide-y-2 divide-[#A7A8AB] mt-6">
              <p className="font-[400] text-[15px] font-poppins py-4">
                Kids Play
              </p>
              <p className="font-[400] text-[15px] font-poppins py-4">
                Kids Play
              </p>
              <p className="font-[400] text-[15px] font-poppins py-4">
                Kids Play
              </p>
              <p className="font-[400] text-[15px] font-poppins py-4">
                Kids Play
              </p>
              <p className="font-[400] text-[15px] font-poppins py-4">
                Kids Play
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
