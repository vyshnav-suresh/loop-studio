import Image from "next/image";
import * as React from "react";

export default function MyComponent(props) {
  return (
    <div className="bg-white flex  flex-col">
      <div className=" flex w-full  flex-col justify-center  max-md:max-w-full">
      <Image
                loading="lazy"
                src="/image-hero.jpg"
                width={5000}
                height={5000}
            className="absolute h-full w-full object-contain"
          />
        <div className="flex-col overflow-hidden relative flex  justify-center items-center px-16 py-12 max-md:max-w-full max-md:px-5">
       
          <div className="relative flex w-full max-w-[1181px] flex-col items-stretch mt-7 mb-12 max-md:max-w-full max-md:mb-10">
            <div className="flex w-full items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
              <Image
                loading="lazy"
                src="/logo.svg"
                width={500}
                height={500}
                className="aspect-[6] object-contain object-center w-48 overflow-hidden shrink-0 max-w-full"
              />
              <div className="justify-between items-stretch self-center flex gap-5 my-auto px-4 py-1 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                <div className="text-white text-base whitespace-nowrap">
                  About
                </div>
                <div className="text-white text-base">Careers</div>
                <div className="text-white text-base">Events</div>
                <div className="text-white text-base">Products</div>
                <div className="text-white text-base whitespace-nowrap">
                  Support
                </div>
              </div>
            </div>
            <div className="text-white text-7xl font-light max-w-full bg-zinc-300 bg-opacity-0 w-[678px] justify-center mt-32 pl-7 pr-16 py-9 border-2 border-solid border-white self-start items-start max-md:max-w-full max-md:text-4xl max-md:mt-10 max-md:px-5">
              IMMERSIVE
              <br />
              EXPERIENCES
              <br />
              THAT DELIVER
            </div>
          </div>
        </div>
      </div>
      <div className="self-center w-full max-w-[1156px] mt-80 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[61%] max-md:w-full max-md:ml-0">
          <Image
                loading="lazy"
                src="/image-interactive.jpg"
                width={5000}
                height={5000}
              className="aspect-[1.49] object-contain object-center w-full  overflow-hidden grow max-md:max-w-full"
            />
          </div>
          <div className="bg-white absolute mr-50 w-1/2 h-30"/>
          <div className="flex flex-col items-stretch z-20 w-[39%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch  mt-72 px-5 max-md:max-w-full max-md:mt-10">
              <div className="text-black text-5xl font-light max-md:max-w-full max-md:text-4xl">
                THE LEADER IN INTERACTIVE VR
              </div>
              <div className="text-zinc-400 text-base leading-6 mt-9 max-md:max-w-full">
                Founded in 2011, Loopstudios has been producing world-class
                virtual reality projects for some of the best companies around
                the globe. Our award-winning creations have transformed
                businesses through digital experiences that bind to their brand.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-center flex w-full max-w-[1179px] justify-between gap-5 mt-48 px-5 items-start max-md:max-w-full max-md:flex-wrap max-md:mt-10">
        <div className="text-black text-5xl font-light grow whitespace-nowrap max-md:text-4xl">
          OUR CREATIONS
        </div>
        <div className="text-black text-xl whitespace-nowrap border bg-zinc-300 bg-opacity-0 justify-center items-stretch mt-1.5 px-8 py-3 border-solid border-black max-md:px-5">
          SEE ALL
        </div>
      </div>
      <div className="self-center w-full max-w-[1181px] mt-7 px-5 max-md:max-w-full">
        <div className="gap-5 flex  max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
            <div className="flex-col overflow-hidden relative flex aspect-[0.5845511482254697] grow justify-center items-stretch max-md:mt-5">
            <Image
                loading="lazy"
                src="/image-deep-earth.jpg"
                width={500}
                height={5000}
                className="absolute h-full w-full  inset-0"
              />
              {/* <div className="relative bg-black bg-opacity-10  justify-center items-stretch"> */}
                {/* <div className="flex-col overflow-hidden relative flex aspect-[0.5845511482254697] w-full justify-center items-stretch"> */}
                  <div className="relative text-white text-4xl font-light bg-black bg-opacity-10 justify-center pl-8 pr-16 pt-96 pb-11 items-start max-md:pt-10 max-md:px-5">
                    DEEP EARTH
                  </div>
                {/* </div> */}
              {/* </div> */}
            </div>
          </div>
          <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex-col overflow-hidden relative flex aspect-[0.5845511482254697] grow justify-center items-stretch max-md:mt-5">
            <Image
                loading="lazy"
                src="/image-night-arcade.jpg"
                width={5000}
                height={5000}
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <div className="relative text-white text-4xl font-light w-3/4    justify-center pl-8 pr-16 pt-96 pb-11 items-start max-md:pt-10 max-md:px-5">
                NIGHT ARCADE
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex-col overflow-hidden relative flex aspect-[0.5845511482254697] grow justify-center items-stretch max-md:mt-5">
            <Image
                loading="lazy"
                src="/image-soccer-team.jpg"
                width={5000}
                height={5000}
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <div className="relative text-white text-4xl font-light bg-black bg-opacity-10 justify-center pl-9 pr-16 pt-96 pb-11 items-start max-md:pt-10 max-md:px-5">
                SOCCER TEAM VR
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex-col overflow-hidden relative flex aspect-[0.5845511482254697] grow justify-center items-stretch max-md:mt-5">
            <Image
                loading="lazy"
                src="/image-grid.jpg"
                width={5000}
                height={5000}
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <div className="relative text-white text-4xl font-light bg-black bg-opacity-10 w-3/4 pl-8 pr-16 pt-96 pb-11 items-start max-md:pt-10 max-md:px-5">
                THE GRID
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-center w-full max-w-[1180px] mt-8 px-5 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
            <div className="flex-col overflow-hidden relative flex aspect-[0.5845511482254697] grow justify-center items-stretch max-md:mt-5">
            <Image
                loading="lazy"
                src="/image-from-above.jpg"
                width={5000}
                height={5000}
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <div className="relative text-white text-4xl font-light bg-black bg-opacity-10 justify-center items-stretch pl-8 pr-12 pt-96 pb-11 max-md:pt-10 max-md:px-5">
                FORM UP ABOVE VR
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex-col overflow-hidden relative flex aspect-[0.5845511482254697] grow justify-center items-stretch max-md:mt-5">
            <Image
                loading="lazy"
                src="/image-pocket-borealis.jpg"
                width={5000}
                height={5000}
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <div className="relative text-white text-4xl font-light bg-black bg-opacity-10 justify-center items-stretch pl-8 pr-14 pt-96 pb-11 max-md:pt-10 max-md:px-5">
                POCKET BOREALIS
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex-col overflow-hidden relative flex aspect-[0.5845511482254697] grow justify-center items-stretch max-md:mt-5">
            <Image
                loading="lazy"
                src="/image-curiosity.jpg"
                width={5000}
                height={5000}
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <div className="relative text-white text-4xl font-light bg-black bg-opacity-10 justify-center items-stretch pl-8 pr-7 pt-96 pb-11 max-md:pt-10 max-md:px-5">
                THE CURIOSITY
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex-col overflow-hidden relative flex aspect-[0.5845511482254697] grow justify-center items-stretch max-md:mt-5">
            <Image
                loading="lazy"
                src="/image-fisheye.jpg"
                width={5000}
                height={5000}
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <div className="relative text-white text-4xl font-light  bg-black bg-opacity-10 justify-center pl-8 pr-16 pt-96 pb-11 items-start max-md:pt-10 max-md:px-5">
                MAKE IT FISHEYE
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black self-stretch flex w-full flex-col justify-center items-center mt-48 px-16 py-9 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="flex w-full max-w-[1180px] flex-col items-stretch max-md:max-w-full">
          <div className="flex w-full items-center justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c62ff263a0c4b85249c6672113b9c300074cab0cd8e34ac445c9ed0c2dc13d7?"
              className="aspect-[5.54] object-contain object-center w-36 fill-white overflow-hidden shrink-0 max-w-full my-auto"
            />
            <div className="items-start self-stretch flex justify-between gap-5 py-1.5 max-md:justify-center">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/74c55bb2562b8e05bd47c9d673d2802b6673f48568975ba8ace756a6bc1f5caa?"
                className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch shrink-0 max-w-full"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3508b5a9e14ee6a1211d2e5384196ed0d8353f55fff36354849147e1c90115a6?"
                className="aspect-[1.2] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full self-start"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/82b9bab3a28972023abbd243b36c90cc242234fc94f6a18e408aa037f7f572a2?"
                className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch shrink-0 max-w-full"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a230f664627e0a9dd97eda9aea3c9ca5a13c0fed859bf409bab090f943a4c9c?"
                className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch shrink-0 max-w-full"
              />
            </div>
          </div>
          <div className="flex w-full  items-stretch justify-between gap-5 mt-5 max-md:max-w-full max-md:flex-wrap">
            <div className="justify-between items-stretch flex gap-5 px-1 py-1 max-md:justify-center">
              <div className="text-white text-base whitespace-nowrap">
                About
              </div>
              <div className="text-white text-base">Careers</div>
              <div className="text-white text-base">Events</div>
              <div className="text-white text-base">Products</div>
              <div className="text-white text-base whitespace-nowrap">
                Support
              </div>
            </div>
            <div className="text-neutral-600 w-full flex justify-end text-base grow whitespace-nowrap self-end">
                <div >
              2021 Loopstudio.All right reserved
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

