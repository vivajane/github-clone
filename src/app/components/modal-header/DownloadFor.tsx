import React from 'react'
import { VscVscode } from "react-icons/vsc";
import { SiXcode } from "react-icons/si";
import { SiJetbrains } from "react-icons/si";
import { SiNeovim } from "react-icons/si";
import { GrCli } from "react-icons/gr";

type Props={
  setShowDownloadFor: () => void

}
const DownloadFor = ({setShowDownloadFor}:Props) => {
  return (
    <div className='bg-white border rounded shadow px-4 py-4 w-50 text-sm right-full space-y-3 mt-30 text-zinc-600 text-border-500  border-zinc-200 '>
      <div className='flex gap-2  items-center'>
        <VscVscode size={20} className='text-blue-400'/>
        <h1>Visual Studio Code</h1>
      </div>
      <div className='flex gap-2  items-center'>
        <VscVscode size={20} className='text-purple-400'/>
        <h1>Visual Studio</h1>
      </div>
      <div className='flex gap-2  items-center'>
        <SiXcode size={20} className='text-blue-400'/>
        <h1>X Code</h1>
      </div>
      <div className='flex gap-2  items-center'>
        <SiJetbrains size={20} className=''/>
        <h1>JetBrains</h1>
      </div>
      <div className='flex gap-2  items-center'>
        <SiNeovim size={20} className=''/>
        <h1>Neovim</h1>
      </div>
      <hr />
       <div className='flex gap-2  items-center'>
        <GrCli size={20} className=''/>
        <h1>CLI</h1>
      </div>
    </div>
  )
}

export default DownloadFor
