import React from 'react';

const Page = () => {
  return (
    <div className="container mt-12">
      <h2 className="font-poppins text-[48px] font-[700] text-center">
        Delicious Ragi & Cheese Burger
      </h2>

      <div className="justify-center flex items-center gap-2 my-6">
        <div className=" w-12 h-12 rounded-2xl">
          <img src="/lady.png" alt="" className="w-full h-full" />
        </div>
        <p className="font-poppins text-[20px] font-[500]">
          <span className="text-[#FF7119] font-[300]">Recipe By </span>
          <br />
          Lady Gaga
        </p>
      </div>

      <div className="flex justify-center gap-2">
        <div className="flex gap-1 pr-6">
          <div>
            <img src="/time.png" alt="" />
          </div>
          <p className="text-[20px] font-[500] font-poppins">
            <span className="font-[300]">Prep: </span> 15 min
          </p>
        </div>
        <div className="flex gap-1 border-x-2 border-[#A7A8AB] px-6">
          <div>
            <img src="/time.png" alt="" />
          </div>
          <p className="text-[20px] font-[500] font-poppins">
            <span className="font-[300]">Cook: </span> 15 min
          </p>
        </div>
        <div className="flex gap-1 pl-6">
          <div>
            <img src="/time.png" alt="" />
          </div>
          <p className="text-[20px] font-[500] font-poppins">
            <span className="font-[300]">Servings: </span> 6 Servings
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center mt-20">
        <div className="w-[100%] rounded-3xl">
          <img src="/burger.png" alt="" className="w-[100%]" />
        </div>
        <div className=" grid grid-cols-4 gap-3 my-8">
          <div>
            <img src="/burger.png" alt="" className=" rounded-3xl" />
          </div>
          <div>
            <img src="/burger.png" alt="" className=" rounded-3xl" />
          </div>
          <div>
            <img src="/burger.png" alt="" className=" rounded-3xl" />
          </div>
          <div>
            <img src="/burger.png" alt="" className=" rounded-3xl" />
          </div>
        </div>
      </div>

      <h3 className="font-[500] text-[36px] font-poppins mt-8">Ingredients</h3>
      <div className="mt-6 ">
        <div className="flex items-center mt-2">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded accent-[#FF7119]"
          />
          <label
            htmlFor="default-checkbox"
            className="ms-2 text-[15px] font-[400] text-black font-poppins"
          >
            Ingredient1{' '}
            <span className="ml-2 pl-4 border-l-2 border-[#A7A8AB]">
              2 cups
            </span>
          </label>
        </div>
        <div className="flex items-center mt-2">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded accent-[#FF7119]"
          />
          <label
            htmlFor="default-checkbox"
            className="ms-2 text-[15px] font-[400] text-black font-poppins"
          >
            Ingredient1{' '}
            <span className="ml-2 pl-4 border-l-2 border-[#A7A8AB]">
              2 cups
            </span>
          </label>
        </div>
        <div className="flex items-center mt-2">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded accent-[#FF7119]"
          />
          <label
            htmlFor="default-checkbox"
            className="ms-2 text-[15px] font-[400] text-black font-poppins"
          >
            Ingredient1{' '}
            <span className="ml-2 pl-4 border-l-2 border-[#A7A8AB]">
              2 cups
            </span>
          </label>
        </div>
        <div className="flex items-center mt-2">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded accent-[#FF7119]"
          />
          <label
            htmlFor="default-checkbox"
            className="ms-2 text-[15px] font-[400] text-black font-poppins"
          >
            Ingredient1{' '}
            <span className="ml-2 pl-4 border-l-2 border-[#A7A8AB]">
              2 cups
            </span>
          </label>
        </div>
        <div className="flex items-center mt-2">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded accent-[#FF7119]"
          />
          <label
            htmlFor="default-checkbox"
            className="ms-2 text-[15px] font-[400] text-black font-poppins"
          >
            Ingredient1{' '}
            <span className="ml-2 pl-4 border-l-2 border-[#A7A8AB]">
              2 cups
            </span>
          </label>
        </div>
        <p className="font-poppins font-[400] text-[15px] mt-6">
          Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit
          amet, ante. Sit amet est et sapien ullamcorper pharetra. Aenean
          ultricies mi vitae est. Mauris placerat eleifend leo. Vestibulum erat
          wisi, condimentum sed, commodo vitae. Donec eu libero sit amet. Aenean
          fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci,
          sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar
          facilisis. Praesent dapibus, neque id cursus faucibus, tortor neque
          egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat.
          Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus,
          metus.
        </p>
      </div>

      <h3 className="font-[500] text-[36px] font-poppins mt-8 mb-4">
        Directions
      </h3>
      <div className="flex gap-2 items-center">
        <p className="w-6 h-6 bg-[#F48047] rounded-3xl flex justify-center items-center text-white font-[500]">
          1
        </p>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
      </div>
      <div className="flex gap-2 items-center mt-2">
        <p className="w-6 h-6 bg-[#F48047] rounded-3xl flex justify-center items-center text-white font-[500]">
          2
        </p>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
      </div>
      <div className="flex gap-2 items-center mt-2">
        <p className="w-6 h-6 bg-[#F48047] rounded-3xl flex justify-center items-center text-white font-[500]">
          3
        </p>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
      </div>
      <div className="flex gap-2 items-center mt-2">
        <p className="w-6 h-6 bg-[#F48047] rounded-3xl flex justify-center items-center text-white font-[500]">
          4
        </p>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
      </div>
      <div className="flex gap-2 items-center mt-2">
        <p className="w-6 h-6 bg-[#F48047] rounded-3xl flex justify-center items-center text-white font-[500]">
          5
        </p>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
      </div>
      <p className="font-poppins font-[400] text-[15px] mt-6">
        Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet,
        ante. Sit amet est et sapien ullamcorper pharetra. Aenean ultricies mi
        vitae est. Mauris placerat eleifend leo. Vestibulum erat wisi,
        condimentum sed, commodo vitae. Donec eu libero sit amet. Aenean
        fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci,
        sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar
        facilisis. Praesent dapibus, neque id cursus faucibus, tortor neque
        egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat.
        Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.
      </p>

      <div className="flex justify-between items-center mt-20 pt-12 border-t-2 border-[#A7A8AB]">
        <div>
          <p className="font-[500] font-poppins text-[20px]">Categories</p>
          <div className="flex gap-3 mt-2">
            <div className="">
              <p
                className="font-[600] font-Poppins text-[12px] bg-[#FAB143] px-2 py-1  rounded-sm uppercase
              max-md:text-[10px]
              max-sm:text-[8px]
              "
              >
                Breakfast
              </p>
            </div>
            <div>
              <p
                className="font-[600] font-Poppins text-[12px] bg-[#89A809] px-2 py-1  rounded-sm
              max-md:text-[10px]
              max-sm:text-[8px]
              "
              >
                2 months +
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <p className="font-[500] font-poppins text-[20px] text-end">
            Share & Print
          </p>
          <div className="flex gap-4 mt-2">
            <p className="w-8 h-8 bg-[#89A809] rounded-3xl"></p>
            <p className="w-8 h-8 bg-[#89A809] rounded-3xl"></p>
            <p className="w-8 h-8 bg-[#89A809] rounded-3xl"></p>
            <p className="w-8 h-8 bg-[#89A809] rounded-3xl"></p>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Page;
