"use client";
import React from "react";
import { GrOverview } from "react-icons/gr";
import { RiGitRepositoryLine } from "react-icons/ri";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { GoPackage, GoProjectTemplate } from "react-icons/go";
import { CiStar } from "react-icons/ci";
import ShowExtraModal from "./modal-header/showExtraModal";

const SecondHeader = () => {
  const [showExtra, setShowExtra] = useState(false);
  const [showExtraModal, setShowExtraModal] = useState(false);

  const showExtraHandler = () => {
    setShowExtra((prev) => !prev);
  };

  const hideShowExtraHandler = () => {
    setShowExtra(false);
  };
  const pathname = usePathname();
  return (
    <div className="px-6 bg-zinc-100 pb-2 border-b-2 border-b-zinc-200">
      <div className=" flex items-center justify-between ">
        <div className="flex flex-wrap text-zinc-600 justify-left gap-6 text-sm items-center">
          <Link
            href="/overview"
            className={`${
              pathname === "/overview" && "active"
            } flex hover:bg-zinc-200 rounded px-2 py-1 gap-2 items-center`}
          >
            <GrOverview size={20} />
            <h1>Overview</h1>
          </Link>

          <div
            className={`${
              pathname === "/repositories" && "active"
            } flex gap-2 hover:bg-zinc-200 rounded p-1 items-center`}
          >
            <Link href="/repositories" className="flex gap-2 items-center">
              <RiGitRepositoryLine size={20} />
              <h1>Repositories</h1>
            </Link>

            <h1 className="bg-zinc-200 rounded-full px-2">56</h1>
          </div>
          <Link
            href="/projects"
            className={`${
              pathname === "/projects" && "active"
            } hidden md:flex hover:bg-zinc-200 rounded p-1 gap-2 items-center`}
          >
            <GoProjectTemplate size={20} />
            <h1>Projects</h1>
          </Link>
          <Link
            href="/packages"
            className={`${
              pathname === "/packages" && "active"
            }  md:flex hidden hover:bg-zinc-200 rounded p-1 gap-2 items-center`}
          >
            <GoPackage size={20} />
            <h1>Packages</h1>
          </Link>
          <div
            className={`  ${
              pathname === "/stars" && "active"
            } hover:bg-zinc-200 rounded py-1 px-1  md:flex hidden gap-2 items-center`}
          >
            <Link href="/stars" className="flex gap-2 items-center">
              <CiStar size={20} />
              <h1>Star</h1>
            </Link>
            <h1 className="bg-zinc-200 rounded-full px-2">6</h1>
          </div>
        </div>
        {/* for small screens */}
        <div className="relative">
          <div
            onClick={showExtraHandler}
            className="border-zinc-200 block md:hidden  border rounded px-2 py-2"
          >
            <BsThreeDots size={20} className="text-zinc-600 cursor-pointer" />
          </div>
          {showExtra && <ShowExtraModal />}
        </div>
      </div>
    </div>
  );
};

export default SecondHeader;
