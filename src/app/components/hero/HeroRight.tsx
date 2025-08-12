"use client";
import React, { useContext } from "react";
import { FaCaretDown } from "react-icons/fa";
import { MdOutlineWarehouse } from "react-icons/md";
import RepoComponent from "../RepoComponent";
import { useState, useEffect } from "react";
import { AppContext } from "../Context";


// const repos = [
//   {
//     id: 1,
//     name: "just-travel",
//     stack: "javascript",
//     updated: "Updated last week",
//     link: "/just-travel",
//   },
//   {
//     id: 2,
//     name: "MedTech",
//     stack: "javascript",
//     updated: "Updated last week",
//     link: "/medtech",
//   },
//   {
//     id: 3,
//     name: "Personal-Portfolio",
//     stack: "javascript",
//     updated: "Updated 2 week",
//     link: "/personal-portfolio",
//   },
//   {
//     id: 4,
//     name: "cosmos",
//     stack: "javascript",
//     updated: "Updated 3 week",
//     link: "/cosmos",
//   },
//   {
//     id: 5,
//     name: "form",
//     stack: "javascript",
//     updated: "Updated 3 week",
//     link: "/form",
//   },
//   {
//     id: 6,
//     name: "dashboard",
//     stack: "javascript",
//     updated: "Updated 3 week",
//     link: "/dashboard",
//   },
// ];


const HeroRight = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("Context is null");
  }
  const { search, setSearch, repos, setRepos } = context;
  const seeSearch = () => {
    let reposClone = repos.slice()

    reposClone = reposClone.filter((repo) => repo.name?.toUpperCase().includes(search.toUpperCase()))
    setRepos(reposClone)

  }



  useEffect(() => {
    seeSearch()
  }, [search])






  return (
    <div className="lg:px-10 md:px-6 px-4    py-2 w-full">
      <div className="sm:flex block  gap-4 items-center">
        <div className="w-full gap-4 lg:flex hidden">
          <div className="md:w-1/2 w-full">
            <div>
              <input
                className="border w-full rounded-md px-4 py-1 border-zinc-200"
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                name="repo"
                id="repo"
                placeholder="Find a repository..."
              />
            </div>
          </div>

          <div className="w-1/2 flex text-sm sm:text-base py-2 sm:py-0 gap-2">
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

            <div className="sm:flex hidden text-white border gap-2 bg-green-700 rounded-md px-4 py-1 items-center">
              <MdOutlineWarehouse />
              <h1>New</h1>
            </div>
          </div>
        </div>
        {/* smaller */}
        <div className="w-full space-y-2 lg:hidden block">
          <div className="md:flex block gap-4 justify-between">
            <div className="block py-3 w-full md:hidden">
              <div className="flex text-white justify-center  border gap-2 bg-green-700 rounded-md px-4 py-1 items-center">
                <MdOutlineWarehouse />
                <h1>New</h1>
              </div>
            </div>
            <div className="w-full">
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
            <div className="md:flex hidden text-white border gap-2 bg-green-700 rounded-md px-4 py-1 items-center">
              <MdOutlineWarehouse />
              <h1>New</h1>
            </div>
          </div>

          <div className="w-1/2 flex flex-wrap text-sm sm:text-base py-2 sm:py-0 gap-2">
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

            <div className="hidden">
              <div className="sm:flex text-white border gap-2 bg-green-700 rounded-md px-4 py-1 items-center">
                <MdOutlineWarehouse />
                <h1>New</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="hidden lg:block text-zinc-300 mt-4" />
      <div className="px-2 md:pr-6 py-4">
        <div className="grid lg:grid-cols-1 grid-cols-1 space-y-2 py-3 flex-col gap-4">
          {repos && repos?.map((repo) => (
            <div key={repo.id} className=" ">
              <RepoComponent repo={repo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroRight;
