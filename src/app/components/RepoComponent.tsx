import React from "react";
import { MdOutlineStarBorder } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";

type Repo = {
  name: string;
  stack: string;
  updated: string;
};
type Props = {
  repo: Repo;
};
const RepoComponent = ({ repo }: Props) => {
  return (
    <div className="flex justify-between">
      <div className="block space-y-4 w-full">
        <div className="flex justify-between  w-full ">
          <div className="flex gap-2 items-center">
            <h1 className="font-semibold text-xl text-blue-500">{repo.name}</h1>
            <div>
              <button className="border py-[2px] border-zinc-200 text-xs font-semi-bold  text-zinc-600  px-2 rounded-2xl">
                Public
              </button>
            </div>
          </div>
          <div className="bg-zinc-50 text-zinc-600 flex border border-zinc-200 rounded-md px-4 gap-2 items-center">
            <MdOutlineStarBorder size={20} />
            <h1 className="text-xs font-semibold">Star</h1>
            <hr className="" />
            <span className="border-l border-l-zinc-300"><FaCaretDown size={10} /></span>
          </div>
        </div>
        <div className="flex gap-2  space-y-3">
          <div className="flex gap-2  items-center">
            <div className="w-3 h-3 rounded-full border bg-amber-200 border-zinc-300"></div>
            <div className="text-xs text-zinc-600">{repo.stack}</div>
          </div>
          <h1 className="text-xs text-zinc-600">{repo.updated}</h1>
        </div>
        <hr className="py-2 text-zinc-300 mt-2 w-full" />
      </div>
    </div>
  );
};

export default RepoComponent;
