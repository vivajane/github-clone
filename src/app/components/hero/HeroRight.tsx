"use client";
import React from "react";
import { FaCaretDown } from "react-icons/fa";
import { MdOutlineWarehouse } from "react-icons/md";
import { useState } from "react";
import RepoComponent from "../RepoComponent";

const repos = [
  {
    id: 1,
    name: "just-travel",
    stack: "javascript",
    updated: "Updated last week",
  },
  {
    id: 2,
    name: "MedTech",
    stack: "javascript",
    updated: "Updated last week",
  },
  {
    id: 3,
    name: "Personal-Portfolio",
    stack: "javascript",
    updated: "Updated 2 week",
  },
  {
    id: 4,
    name: "cosmos",
    stack: "javascript",
    updated: "Updated 3 week",
  },
  {
    id: 5,
    name: "form",
    stack: "javascript",
    updated: "Updated 3 week",
  },
  {
    id: 6,
    name: "dashboard",
    stack: "javascript",
    updated: "Updated 3 week",
  },
];

const HeroRight = () => {
  const [showRepo, setRepo] = useState(false);
  return (
    <div className="md:pl-12 py-2 w-full">
      <div className="lg:flex hidden gap-4 items-center">
        <div className="md:w-1/2">
          <div>
            <input
              className="border w-full rounded-md px-4 py-1 border-zinc-200"
              type="search"
              name="repo"
              id="repo"
              placeholder="Find a repository..."
            />
          </div>
        </div>
        <div className="w-1/2 flex gap-2">
          <div
            className="flex border-zinc-200 border gap-2 bg-zinc-100 rounded-md px-4 
            py-1 items-center"
          >
            <h1>Type</h1>
            <FaCaretDown />
          </div>

          <div className="flex border-zinc-200 border gap-2 bg-zinc-100 rounded-md px-4 py-1 items-center">
            <h1>Language</h1>
            <FaCaretDown />
          </div>
          <div className="flex border-zinc-200 border gap-2 bg-zinc-100 rounded-md px-4 py-1 items-center">
            <h1>Sort</h1>
            <FaCaretDown />
          </div>

          <div className="flex text-white border gap-2 bg-green-700 rounded-md px-4 py-1 items-center">
            <MdOutlineWarehouse />
            <h1>New</h1>
          </div>
        </div>
      </div>
      <hr className="hidden lg:block text-zinc-300 mt-4" />
      <div className="px-2 md:px-6 py-4">
        <div className="flex lg:hidden justify-between">
          <h1>Popular repositories</h1>
          <h1 className="text-blue-500">Customize your pins</h1>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 space-y-2 py-3 flex-col gap-4">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className=" lg:shadow-none  rounded-md border lg:border-none border-zinc-400"
            >
              <RepoComponent repo={repo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroRight;
