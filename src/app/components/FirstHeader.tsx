"use client";
import React from "react";
import { CiMenuBurger } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { Lora } from "next/font/google";
import { CiSearch } from "react-icons/ci";
import { VscCopilot } from "react-icons/vsc";
import { FaCaretUp } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { VscIssues } from "react-icons/vsc";
import { IoIosGitPullRequest } from "react-icons/io";
import { RiNotification4Line } from "react-icons/ri";
import passport from "../../../public/images/passport.jpg";
import Image from "next/image";
import { useState } from "react";
import CopilotModal from "./modal-header/CopilotModal";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const FirstHeader = () => {
  const [showPilot, setShowPilot] = useState(false);
  const [showCoPilot, setShowCoPilot] = useState(false);
  const [openCopilot, setOpenCopilot] = useState(false);
  const [createNew, setCreateNew] = useState(false);
  const [issues, setIssues] = useState(false);
  const [pullRequests, setPullRequests] = useState(false);
  const [unRead, setUnRead] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);
  const hidePilotHandler = () => {
    setShowPilot(false);
  };

  const showPilotMouse = () => {
    setShowCoPilot(true);
  };
  const openPilotMouse = () => {
    setOpenCopilot(true);
  };
  const createNewMouse = () => {
    setCreateNew(true);
  };
  const issuesMouse = () => {
    setIssues(true);
  };
  const pullRequestsMouse = () => {
    setPullRequests(true);
  };
  const unreadMouse = () => {
    setUnRead(true);
  };
  const showSideBarFunction = () => {
    setShowSideBar(true);
  };
  const hideShowSideBar = () => {
    setShowSideBar(false);
  };

  return (
    <div className="px-6 bg-zinc-100 py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div
            onClick={showSideBarFunction}
            className="border p-1.5 rounded  border-zinc-300"
          >
            <CiMenuBurger className="cursor-pointer" size={15} />
          </div>
          <div>
            <FaGithub className="cursor-pointer" size={30} />
          </div>
          <h1 className={`font-bold ${lora.className}`}>vivajane</h1>
        </div>
        <div className="flex items-center gap-2">
          <div className="md:flex hidden cursor-pointer relative items-center gap-2">
            <input
              className="border p-1 rounded border-zinc-300"
              type="search"
              name="search"
              id="search"
              placeholder="       Type / to search"
            />

            <CiSearch
              className=" absolute  left-2 text-zinc-900 flex flex-col justify-center items-center"
              size={20}
            />
          </div>
          <div className="relative">
            <div className="md:flex hidden hover:bg-zinc-200  hover:px-2 hover:rounded cursor-pointer items-center text-zinc-600 border-zinc-300 border p-2 rounded gap-2">
              <VscCopilot
                onMouseEnter={showPilotMouse}
                onMouseLeave={() => setShowCoPilot(false)}
                className="relative"
              />
              {showCoPilot && (
                <p className="absolute w-30 bg-black text-white top-full right-0  shadow-md mt-2 rounded-md px-2 py-2 text-sm">
                  Chat wit copilot
                </p>
              )}
              <hr className=" border-zinc-500" />
              <FaCaretDown
                onClick={() => setShowPilot((prev) => !prev)}
                className="relative"
                onMouseEnter={openPilotMouse}
                onMouseLeave={() => setOpenCopilot(false)}
              />
              {openCopilot && (
                <p className="absolute w-42 bg-black text-white top-full right-full shadow-md mt-2 left-0 rounded-md px-2 py-2 text-xs">
                  Open copilot...(Alt+Shift+C)
                </p>
              )}
            </div>
            {showPilot && <CopilotModal setShowPilot={hidePilotHandler} />}
          </div>
          
          <div
            onMouseEnter={createNewMouse}
            onMouseLeave={() => setCreateNew(false)}
            className="md:flex hidden relative cursor-pointer hover:bg-zinc-200 items-center text-zinc-600 border-zinc-300 border p-2 rounded gap-2"
          >
            <IoIosAdd className="text-zinc-500" size={20} />
            <hr className="border border-zinc-300" />
            <FaCaretDown />
            {createNew && (
              <p className="absolute w-22 bg-black text-white top-full shadow-md mt-2  rounded-md px-2 py-2 text-xs">
                Create new...
              </p>
            )}
          </div>
          <div
            onMouseEnter={issuesMouse}
            onMouseLeave={() => setIssues(false)}
            className="md:flex hidden relative cursor-pointer hover:bg-zinc-200 items-center text-zinc-600 border-zinc-300 border p-2 rounded gap-2"
          >
            <VscIssues className="text-zinc-500" size={20} />
            {issues && (
              <p className="absolute w-22 bg-black text-white left-0 right-0 top-full shadow-md mt-2  rounded-md px-2 py-2 text-xs">
                Your Issues
              </p>
            )}
          </div>
          <div
            onMouseEnter={pullRequestsMouse}
            onMouseLeave={() => setPullRequests(false)}
            className="md:flex hidden relative cursor-pointer hover:bg-zinc-200 items-center text-zinc-600 border-zinc-300 border p-2 rounded gap-2"
          >
            <IoIosGitPullRequest className="text-zinc-500" size={20} />
            {pullRequests && (
              <p className="absolute w-32 left-0 bg-black text-white top-full right-0  shadow-md mt-2  rounded-md px-2 py-2 text-xs">
                Your Pull Requests
              </p>
            )}
            <div className="absolute top-0 right-0 bg-blue-500 rounded-full w-2 h-2"></div>
            {unRead && (
              <p className="absolute w-34 bg-black text-white left-0 right-0 top-full shadow-md mt-2 rounded-md px-2 py-2 text-xs">
                You have Unread notifiations
              </p>
            )}
          </div>
          <div className="block md:hidden">
            <CiSearch className="text-zinc-500" size={20} />
          </div>

          <div
            onMouseEnter={unreadMouse}
            onMouseLeave={() => setUnRead(false)}
            className="flex  cursor-pointer relative hover:bg-zinc-200 items-center text-zinc-600 border-zinc-300 border p-2 rounded gap-2"
          >
            <RiNotification4Line className="text-zinc-500" size={20} />
          </div>

          <div>
            <Image
              className="rounded-full w-10 aspect-square"
              width={27}
              height={27}
              src={passport}
              alt="passport"
            ></Image>
          </div>
        </div>
      </div>
      {/* for sidebar */}
    
    </div>
  );
};

export default FirstHeader;
