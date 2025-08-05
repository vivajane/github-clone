"use client";
import React from "react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="md:px-42 text-zinc-600 px-20">
      <ul className="flex flex-wrap text-xs gap-5 items-center md:text-sm  py-4">
        <div className="md:flex hidden gap-2 items-center">
          <FaGithub className="cursor-pointer" size={30} />
          <h1 className="">© 2025 GitHub, Inc.</h1>
        </div>

        <li>
          <Link className="hover:underline hover:text-blue-600 " href="/terms">
            Terms
          </Link>
        </li>
        <li>
          <Link className="hover:underline hover:text-blue-600 " href="/links">
            Privacy
          </Link>
        </li>
        <li>
          <Link
            className="hover:underline hover:text-blue-600 "
            href="/security"
          >
            Security
          </Link>
        </li>
        <li>
          <Link className="hover:underline hover:text-blue-600 " href="/status">
            Status
          </Link>
        </li>
        <li>
          <Link className="hover:underline hover:text-blue-600 " href="/doc">
            Docs
          </Link>
        </li>
        <li>
          <Link
            className="hover:underline hover:text-blue-600 "
            href="/contact"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            className="hover:underline hover:text-blue-600 "
            href="/ccokies"
          >
            Manage Cookies
          </Link>
        </li>
        <li>
          <Link className="hover:underline hover:text-blue-600 " href="/info">
            Do not share my personal information
          </Link>
        </li>
      </ul>
      <div className="flex md:hidden text-center justify-center py-2 gap-2 items-center">
        <FaGithub className="cursor-pointer" size={30} />
        <h1 className="">© 2025 GitHub, Inc.</h1>
      </div>
    </div>
  );
};

export default Footer;
