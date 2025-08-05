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
    <div className="px-2">
      <div className="py-8 relative w-80 h-80 px-4 ">
        <img
          onMouseEnter={() => setAvatarChange(true)}
          onMouseLeave={() => setAvatarChange(false)}
          className="rounded-full w-72 h-72"
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
              <div className=" absoluteh bg-white  text-blue-500 font-bold top-fullk right-0 w-full  shadow-md mt-2 rounded-md px-2 py-2 text-sm">
                A Frontend Developer{" "}
              </div>
            )}
          </div>
        </div>
      </div>
      <h1 className="text-2xl pt-3 font-semibold w-80">Ojiteli Kosisochukwu</h1>
      <p className="text-xl text-zinc-500">
        vivajane <span>· she/her</span>
      </p>
      <p className=" w-72 py-2 leading-6 text-zinc-700">A Frontend developer experienced in HTML, CSS, React and Next.js with keen interest in developing visually appealing websites</p>
      <div className="">
        <button className="bg-zinc-100 border font-semibold border-zinc-300 text-zinc-800 w-full py-2 px-12 rounded-md">Edit Profile</button>
      </div>
      <div className="space-y-3 pt-3">
        <div className="flex gap-2 text-zinc-600 items-center">
          <GiShadowFollower/>
          <p><span className="text-zinc-800 font-semibold">7</span> Followers</p>
          <p>.<span className="text-zinc-800 font-semibold">6</span> Following</p>
        
        </div>
        <div>
          <div className="flex gap-2 text-zinc-600 items-center">
            <FaLinkedin size={20} />
            <a href="https://www.linkedin.com/in/vivianojiteli/">in.com/in/vivianojiteli/</a>
          </div>
         
        </div>
       
      </div>

    </div>
  );
};

export default HeroLeft;
