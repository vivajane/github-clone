"use client";
import Image from "next/image";
import React from "react";
import passport from "../../../../public/images/passport.jpg";
import { TbBrandGravatar } from "react-icons/tb";
import { useState } from "react";
import { GiShadowFollower } from "react-icons/gi";
import { FaLinkedin } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";

const HeroLeft = () => {
  const [avatarChange, setAvatarChange] = useState(false);
  const [checkStack, setCheckStack] = useState(false);
  return (
    <div className="pl-2">
      <div className="pt-8 pb-4 hidden md:block relative w-full ">
        <img
          onMouseEnter={() => setAvatarChange(true)}
          onMouseLeave={() => setAvatarChange(false)}
          className="rounded-full w-72 aspect-square"
          src={passport.src}
          alt="passport"
        />
        {avatarChange && (
          <div className=" absolute w-30 bg-black text-white top-full right-20  shadow-md mt-2 rounded-md px-2 py-2 text-sm">
            Change avatar
          </div>
        )}
        <div
          onMouseEnter={() => setCheckStack(true)}
          onMouseLeave={() => setCheckStack(false)}
          className="relative"
        >
          <div className="absolute border flex gap-4 border-zinc-500 bottom-10 right-0 w-12 h-12 bg-white rounded-full">
            <TbBrandGravatar
              size={30}
              className="text-zinc-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
            {checkStack && (
              <div className=" absolute bg-white  text-blue-500 font-bold right-0 w-full  shadow-md mt-2 rounded-md px-2 py-2 text-sm">
                A Frontend Developer{" "}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <h1 className="text-2xl pt-3 font-semibold w-80">
          Ojiteli Kosisochukwu
        </h1>
        <p className="text-xl text-zinc-500">
          vivajane <span>· she/her</span>
        </p>
      </div>
      {/* for small screens */}
      <div className="flex md:hidden">
        <div className="py-8 flex gap-4 sm:gap-8 relative">
          <img
            onMouseEnter={() => setAvatarChange(true)}
            onMouseLeave={() => setAvatarChange(false)}
            className="rounded-full w-16 h-16 sm:w-18 sm:aspect-square"
            src={passport.src}
            alt="passport"
          />
          {avatarChange && (
            <div className=" absolute w-30 bg-black text-white top-full right-20  shadow-md mt-2 rounded-md px-2 py-2 text-sm">
              Change avatar
            </div>
          )}

          {/* jjjjk/ */}
          <div className="lg:hidden block">
            <h1 className="sm:text-2xl text-xl pt-3 font-semibold md:w-80">
              Ojiteli Kosisochukwu
            </h1>
            <p className="text-xl text-zinc-500">
              vivajane <span>· she/her</span>
            </p>
          </div>
        </div>
      </div>
      <div className="hidden md:block lg:hidden">
        <h1 className="text-2xl font-semibold w-80">
          Ojiteli Kosisochukwu
        </h1>
        <p className="text-xl text-zinc-500">
          vivajane <span>· she/her</span>
        </p>
      </div>
      <div className="flex md:hidden gap-2 bg-zinc-50 text-zinc-600 border py-[2px] border-zinc-300 rounded-md px-4 items-center">
        <span>
          <TbBrandGravatar size={20} />
        </span>
        <p className="text-zinc-600 font-semibold ">A Frontend Developer</p>
      </div>

      <p className="lg:w-72 w-full md:py-2 py-4 leading-6 text-zinc-700">
        A Frontend developer experienced in HTML, CSS, React and Next.js with
        keen interest in developing visually appealing websites
      </p>
      <div className="">
        <button className="bg-zinc-100 border font-semibold border-zinc-300 text-zinc-800 w-full py-2 px-12 rounded-md">
          Edit Profile
        </button>
      </div>
      <div className="space-y-3  pt-3">
        <div className="flex gap-2 hover:text-blue-500 text-zinc-600 items-center">
          <GiShadowFollower />
          <p className="hover:text-blue-500">
            <span className="text-zinc-800 font-semibold">7</span> Followers
          </p>
          <p className="hover:text-blue-500">
            .<span className="text-zinc-800 font-semibold">6</span> Following
          </p>
        </div>
        <div>
          <div className="flex gap-2 text-zinc-600 items-center">
            <FaLinkedin size={20} />
            <a
              className="hover:text-blue-500 hover:underline"
              href="https://www.linkedin.com/in/vivianojiteli/"
            >
              in.com/in/vivianojiteli/
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroLeft;
