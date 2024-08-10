import React from 'react'
import logo from '../img/arrow-right2.png'
import headerlogo from '../img/notes.png'
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
    <div className="footer flex items-center flex-col gap-10 bg-[#080808] pt-28">
       <div className="footer-top flex items-center gap-96 px-12">
       <div className="footer-left flex items-start gap-8 flex-col ">
       <a href="/" className="transition-all ease-in-out duration-300 hover:border-b hover:border-b-white pb-3 active:text-[#a3a3a3] header-left flex items-center gap-2 w-fit">
            <img src={headerlogo} />
            <h1 className='font-bold text-3xl text-white'>SmartNotes</h1>
        </a>
        <a href='https://www.instagram.com/xelil_ovw/' className="link px-8 py-2 rounded-lg bg-white flex items-center justify-between w-fit">
            <h1 className='text-black font-semibold text-2xl'>My Instagram Profile</h1>
            <img src={logo} className='w-[10%] bg-white' alt="" />
        </a>
            </div>
            <div className="footer-right grid grid-cols-4 gap-14">
                <div className="footer-card flex flex-col items-start gap-2">
                    <a href='/' className='text-3xl font-bold text-white hover:text-[#aad9d1]'>Product</a>
                    <a href="#about" className='text-gray-400 text-xl font-semibold hover:text-[#aad9d1]'>About</a>
                    <a href="#features" className='text-gray-400 text-xl font-semibold hover:text-[#aad9d1]'>Features</a>
                    <a href="#pricing" className='text-gray-400 text-xl font-semibold hover:text-[#aad9d1]'>Pricing</a>
                    <a href="#support" className='text-gray-400 text-xl font-semibold hover:text-[#aad9d1]'>Support</a>
                </div>
                <div className="footer-card flex flex-col items-start gap-2">
                    <a href='/' className='text-3xl font-bold text-white hover:text-[#aad9d1]'>Company</a>
                    <a href="/" className='text-gray-400 text-xl font-semibold hover:text-[#aad9d1]'>Our Story</a>
                    <a href="/" className='text-gray-400 text-xl font-semibold hover:text-[#aad9d1]'>Team</a>
                    <a href="/" className='text-gray-400 text-xl font-semibold hover:text-[#aad9d1]'>Careers</a>
                    <a href="/" className='text-gray-400 text-xl font-semibold hover:text-[#aad9d1]'>Contact Us</a>
                </div>
                <div className="footer-card flex flex-col items-start gap-2">
                    <a href='/' className='text-3xl font-bold text-white hover:text-[#aad9d1]'>Resources</a>
                    <a href="/" className='text-gray-400 text-xl font-semibold hover:text-[#aad9d1]'>Blog</a>
                    <a href="/" className='text-gray-400 text-xl font-semibold hover:text-[#aad9d1]'>Case Studies</a>
                    <a href="/" className='text-gray-400 text-xl font-semibold hover:text-[#aad9d1]'>Templates</a>
                    <a href="/" className='text-gray-400 text-xl font-semibold hover:text-[#aad9d1]'>Help Center</a>
                </div>
                <div className="footer-card flex flex-col items-start gap-2">
                    <a href='/' className='text-3xl font-bold text-white hover:text-[#aad9d1]'>Legal</a>
                    <a href="/" className='text-gray-400 text-xl font-semibold hover:text-[#aad9d1]'>Terms of Service</a>
                    <a href="/" className='text-gray-400 text-xl font-semibold hover:text-[#aad9d1]'>Privacy Policy</a>
                    <a href="/" className='text-gray-400 text-xl font-semibold hover:text-[#aad9d1]'>Acceptable Use</a>
                    <a href="/" className='text-gray-400 text-xl font-semibold hover:text-[#aad9d1]'>Refund Policy</a>
                </div>
            </div>
       </div>
       <div className="footer-bottom bg-[#aad9d1] text-black flex items-center gap-[50%] py-12 justify-center px-20 w-[100%]">
        <div className="left">
            <h1 className='text-black text-4xl font-semibold'>@2024 SmartNotesI. All Rights Reserved. @mazegit</h1>
        </div>
        <div className="right flex items-center gap-4">
<a href="https://www.instagram.com/xelil_ovw/">        <FaInstagram className='text-black scale-[400%]'/>
</a>
        </div>
       </div>
    </div>
    </>
  )
}

export default Footer
