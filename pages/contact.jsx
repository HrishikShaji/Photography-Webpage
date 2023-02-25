import React from "react";

const contact = () => {
  return (
    <div className="md:h-screen h-full p-20 md:p-0 w-full bg-black flex flex-col md:flex-row md:justify-around justify-center  items-center">
      <div className="text-white text-center md:text-left">
        <h1 className="text-6xl ">Contact</h1>
        <div className="my-10">
          <h2>YorArt</h2>
          <h2>Kochi,Kerala</h2>
          <h2>India</h2>
        </div>
        <div className="my-10">
          <h1>yourart@gmail.com</h1>
          <h1>0123456789</h1>
        </div>
        <p className="hidden md:block">
          © 2023 by YourArt. Powered and secured by YourArt
        </p>
      </div>
      <form>
        <ul className="text-center">
          <li>
            <input
              type="text"
              placeholder="First Name . . ."
              className="placeholder-white bg-black p-10 border-b-4 mx-2 text-white"
            />
            <input
              type="text"
              placeholder="Last Name . . ."
              className="placeholder-white bg-black p-10 border-b-4 mx-2 text-white"
            />
          </li>
          <li>
            <input
              type="email"
              placeholder="Email . . ."
              className="placeholder-white bg-black p-10 border-b-4 mx-2 text-white"
            />
            <input
              type="text"
              placeholder="Phone . . ."
              className="placeholder-white bg-black p-10 border-b-4 mx-2 text-white"
            />
          </li>
          <li>
            <textarea
              placeholder="Leave us a message . . ."
              className="placeholder-white bg-black p-10 border-b-4 mx-2 text-white w-full"
            />
          </li>
          <li className="flex justify-center items-center">
            <button className="text-white mt-10 p-3 border-4">Submit</button>
          </li>
        </ul>
      </form>
      <p className="text-white mt-10 md:hidden">
        © 2023 by YourArt. Powered and secured by YourArt
      </p>
    </div>
  );
};

export default contact;
