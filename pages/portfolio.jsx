import React from "react";
import Image from "next/image";
import { img6, img7, img8 } from "@/public/assets/images";

const portfolio = () => {
  return (
    <div className="bg-black md:h-screen h-full p-20  w-full flex flex-col justify-center items-center">
      <h1 className="text-white mb-10 text-3xl">Recent Works</h1>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="md:mx-5 mb-5 overflow-hidden relative group flex justify-center items-center">
          <Image
            src={img6}
            height={1000}
            width={1000}
            alt="images"
            className="w-[400px] h-[300px] md:h-[500px] object-cover group-hover:scale-105 duration-300"
          />
          <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center bg-black opacity-0  group-hover:opacity-30 duration-500"></div>
          <h1 className="absolute text-white z-20 text-3xl">Image 1</h1>
        </div>
        <div className="md:mx-5 mb-5 overflow-hidden relative group flex justify-center items-center">
          <Image
            src={img7}
            height={1000}
            width={1000}
            alt="images"
            className="w-[400px] h-[300px] md:h-[500px] object-cover group-hover:scale-105 duration-300"
          />
          <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center bg-black opacity-0  group-hover:opacity-30 duration-500"></div>
          <h1 className="absolute text-white z-20 text-3xl">Image 2</h1>
        </div>
        <div className="md:mx-5 mb-5 overflow-hidden relative group flex justify-center items-center">
          <Image
            src={img8}
            height={1000}
            width={1000}
            alt="images"
            className="w-[400px] h-[300px] md:h-[500px] object-cover group-hover:scale-105 duration-300"
          />
          <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center bg-black opacity-0  group-hover:opacity-30 duration-500"></div>
          <h1 className="absolute text-white z-20 text-3xl">Image 3</h1>
        </div>
      </div>
    </div>
  );
};

export default portfolio;
