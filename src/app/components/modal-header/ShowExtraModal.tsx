"use client";
import React from "react";
import { GoProjectTemplate } from "react-icons/go";
import { GoPackage } from "react-icons/go";
import { CiStar } from "react-icons/ci";
import Link from "next/link";
import { useState } from "react";

const ShowExtraModal = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="absolute top-full mt-2 right-0 w-56 space-y-4 bg-white border border-zinc-200 shadow-md rounded-md px-4 py-4 text-sm z-50">
      <div
        onMouseEnter={() => setShow(true)}
        className={` ${
          show ? "hover:bg-zinc-200 hover:rounded px-3 hover:py-1" : ""
        }  flex items-center gap-2`}
      >
        <GoProjectTemplate size={20} />
        <Link href="/projects">Projects</Link>
      </div>
      <div
        onMouseEnter={() => setShow(true)}
        className={` ${
          show ? "hover:bg-zinc-200 hover:rounded px-3 hover:py-1" : ""
        }  flex items-center gap-2`}
      >
        <GoPackage size={20} />
        <Link href="/packages">Packages</Link>
      </div>
      <div
        onMouseEnter={() => setShow(true)}
        className={` ${
          show ? "hover:bg-zinc-200 hover:rounded px-3 hover:py-1" : ""
        }  flex items-center gap-2`}
      >
        <CiStar size={20} />
        <Link href="/stars">Stars</Link>
      </div>
    </div>
  );
};

export default ShowExtraModal;
