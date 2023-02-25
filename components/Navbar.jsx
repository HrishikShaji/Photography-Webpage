import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";

const Navbar = ({ color }) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div
      className={
        color
          ? "text-white bg-black  h-[80px] w-full z-40 fixed flex justify-between items-center p-10"
          : "text-white  h-[80px] w-full z-40 fixed flex justify-between items-center p-10"
      }
    >
      <h1 className="text-3xl">
        <a href="/">YourArt</a>
      </h1>
      <AiOutlineMenu
        className="sm:hidden cursor-pointer"
        onClick={handleToggle}
      />

      <ul className="hidden sm:flex justify-around items-center">
        <a href="/portfolio" className="mx-3">
          Portfolio
        </a>
        <a href="/about" className="mx-3">
          About
        </a>
        <a href="/album" className="mx-3">
          Albums
        </a>
        <a href="/contact" className="mx-3">
          Contact
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
