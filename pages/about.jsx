import React from "react";
import Image from "next/image";
import { profile, logo1 } from "@/public/assets/images";

const about = () => {
  return (
    <div className="bg-black md:h-screen h-full w-full flex flex-col-reverse md:flex-row justify-center items-center p-20">
      <div className="text-white p-10">
        <h1 className="text-3xl my-10">Biography</h1>
        <p className="text-center sm:text-left">
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
          vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat
          vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra
          quis,d fringilla mauris sit amet nibh. Donec sodales sagittis magna.
          Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,'
        </p>
        <div className="mt-10">
          <h1 className="text-3xl text-white mb-10">My Clients</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <Image
              src={logo1}
              height={1000}
              width={1000}
              alt="image"
              className="h-[70px] w-[70px] object-cover"
            />
            <Image
              src={logo1}
              height={1000}
              width={1000}
              alt="image"
              className="h-[70px] w-[70px] object-cover"
            />
            <Image
              src={logo1}
              height={1000}
              width={1000}
              alt="image"
              className="h-[70px] w-[70px] object-cover"
            />
            <Image
              src={logo1}
              height={1000}
              width={1000}
              alt="image"
              className="h-[70px] w-[70px] object-cover"
            />
            <Image
              src={logo1}
              height={1000}
              width={1000}
              alt="image"
              className="h-[70px] w-[70px] object-cover"
            />
            <Image
              src={logo1}
              height={1000}
              width={1000}
              alt="image"
              className="h-[70px] w-[70px] object-cover"
            />
          </div>
        </div>
      </div>
      <Image
        src={profile}
        height={1000}
        width={1000}
        alt="image"
        className="h-[80%] w-full object-cover"
      />
    </div>
  );
};

export default about;
