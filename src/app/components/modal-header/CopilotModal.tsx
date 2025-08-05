"use client";
import React, { useState } from "react";
import { FaRegMessage } from "react-icons/fa6";
import { FaLongArrowAltUp } from "react-icons/fa";
import { TbMessageUser } from "react-icons/tb";
import { AiOutlineDownload } from "react-icons/ai";
import { RiCopilotFill } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";
import DownloadFor from "./DownloadFor";


const CopilotModal = ({ setShowPilot }: { setShowPilot: () => void }) => {
  const [showDownloadFor, setShowDownloadFor] = useState(false);

  const hideDownloadForHandler = () => {
    setShowDownloadFor(false);
  };
  return (
    <div className="relative ">
      <div className="absolute top-full space-y-3 mt-2 right-0 w-56 bg-white border border-zinc-200 shadow-md rounded-md px-4 py-4 text-sm">
        <h1 className="text-zinc-500 font-bold">New conversation in</h1>
        <div className="flex text-zinc-700 justify-between mt-2">
          <div className="flex gap-2 text-zinc-600 items-center">
            <FaRegMessage size={17} className="" />
            <h1>Assistive</h1>
          </div>
          {/* <div className="border flex text-zinc-600 items-center gap-2 px-1 rounded border-zince-500">
            <div>
              <FaLongArrowAltUp size={18} />
            </div>
            <h1>C</h1>
          </div> */}
        </div>
        <div className="flex gap-2 text-zinc-600 items-center">
          <TbMessageUser size={20} />
          <h1>Spaces</h1>
        </div>
        {/* <hr className="py-2 text-zinc-300 mt-2" /> */}
        <div className=" text-zinc-200 w-full py-1 border-b"></div>
        <div className="relative ">
          <div
            onClick={() => setShowDownloadFor((prev) => !prev)}
            className="flex cursor-pointer  text-zinc-600 pt-2 justify-between items-center"
          >
            <div className="flex gap-2 items-center">
              <AiOutlineDownload size={18} className="" />
              <h1>Download For</h1>
            </div>
            <div>
              <MdKeyboardArrowRight size={18} />
            </div>
          </div>
        </div>
        <div className="flex text-zinc-600 justify-between items-center">
          <div className="flex gap-2 text-zinc-600 items-center">
            <RiCopilotFill size={18} />
            <h1>Your Copilot</h1>
          </div>
          <h1 className="text-zinc-400 border font-bold border-zinc-400 px-1 rounded-full">
            free
          </h1>
        </div>
      </div>
      {showDownloadFor && (
        <div className="absolute left-full top-0 ml-2 z-50">
          <DownloadFor setShowDownloadFor={hideDownloadForHandler} />
        </div>
      )}
    </div>
  );
};

export default CopilotModal;
