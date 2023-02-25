import React from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="bg-hero h-screen w-full bg-cover flex flex-col justify-center items-center text-white">
      <h1 className="text-6xl">YourArt</h1>
      <p className="text-center w-[70%] my-10">
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
        commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
        magnis dis parturient montes, nascetur '
      </p>
      <div className="flex justify-around items-center">
        <BsInstagram size={30} className="mx-4" />
        <AiFillFacebook size={37} className="mx-4" />
        <BsTwitter size={30} className="mx-4" />
      </div>
    </div>
  );
};

export default Hero;
