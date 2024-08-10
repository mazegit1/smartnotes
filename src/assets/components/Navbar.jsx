import React from 'react'
import headerlogo from '../img/notes.png'
import headerlogo2 from '../img/arrow-right.png'
const Navbar = () => {
  return (
    <>
    <div className="header z-10 fixed border-b border-b-[#aad9d1] w-[100%] bg-[#080808] text-white flex items-center justify-between px-[70px] py-[10px]">
        <a href="/" className="transition-all ease-in-out duration-300 hover:border-b hover:border-b-white pb-3 active:text-[#a3a3a3] header-left flex items-center gap-2">
            <img src={headerlogo} />
            <h1 className='font-bold text-3xl'>SmartNotes</h1>
        </a>
        <div className="header-middle flex items-center gap-12">
            <a href="#features" className='transition-all ease-in-out duration-300 hover:border-b hover:border-b-white active:text-[#a3a3a3] text-2xl font-medium'>Features</a>
            <a href="#pricing" className='transition-all ease-in-out duration-300 hover:border-b hover:border-b-white active:text-[#a3a3a3] text-2xl font-medium'>Pricing</a>
            <a href="#support" className='transition-all ease-in-out duration-300 hover:border-b hover:border-b-white active:text-[#a3a3a3] text-2xl font-medium'>Support</a>
        </div>
        <div className="header-right scale-[70%] flex items-center border border-none cursor-pointer bg-[linear-gradient(90deg,rgba(1,115,115,1)0%,rgba(170,217,209,1)100%)] transition-all ease-in-out duration-300 overflow-hidden rounded-xl py-0 pl-8">
            <h1 className='text-2xl   bg-transparent font-semibold text-black'>Get Started</h1>
            <img src={headerlogo2} className='  bg-transparent border border-[#333333] scale-[40%] text-white fill-white'/>
        </div>
    </div>
    </>
  )
}

export default Navbar
