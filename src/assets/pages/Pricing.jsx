import React from 'react'
import { SiVerizon } from "react-icons/si";
import reminder from '../img/reminder.png'
import pricinglogo from '../img/arrow-right.png'
import cardimg from '../img/pricingcardimg.png'
const Pricing = () => {
    
  return (
    <>
<div id="pricing" className="pricing px-20 py-8 bg-[#080808]">
    <div className="pricing-top flex items-center flex-col gap-4 py-14 px-20">
        <h1 className='text-white text-center font-bold text-6xl'><span className='text-[#aad9d1]'>Pricing</span> & Plans</h1>
        <p className='text-gray-400 text-xl text-center'>With lots of unique blocks, you can easily build a page <br /> without coding. Build your next landing page.</p>
        <div className="wrapper flex items-center gap-4">
            <div className="wrapper flex items-center gap-3 ">
<h1 className='text-2xl font-bold text-white'>Yearly: </h1>
<p className='text-xl bg-[#005648] text-white p-2 rounded-2xl'>Save 20%</p>
            </div>
        </div>
    </div>
    <div className="pricing-bottom flex items-center justify-center gap-14 ">
        <div className="card p-6 text-black bg-white w-auto flex items-start flex-col rounded-xl">
            <div className="wrapper flex items-center gap-3">
<img src={cardimg} className='w-[15%]'/>
<h1 className='text-[#77c0b4] text-xl font-semibold'>Individual Plan</h1>
            </div>
            <div className="wrapper mt-6 flex items-end">
                <h1 className='text-5xl font-bold'>$9.99</h1>
                <p className='text-gray-700 text-xl'>/ month</p>
            </div>
            <div className="wrapper flex items-start flex-col gap-2 mt-4">
                <div className="verified flex items-center gap-2">
                <SiVerizon className='text-[#5f958c]'/>
<h1 className='text-xl font-semibold'>Real-time collaboration</h1>
                </div>
                <div className="verified flex items-center gap-2">
                <SiVerizon className='text-[#5f958c]'/>
<h1 className='text-xl font-semibold'>AI powered organization</h1>
                </div>
                <div className="verified flex items-center gap-2">
                <SiVerizon className='text-[#5f958c]'/>
<h1 className='text-xl font-semibold'>Customizable templates</h1>
                </div>
                <div className="verified flex items-center gap-2">
                <SiVerizon className='text-[#5f958c]'/>
<h1 className='text-xl font-semibold'>5GB cloud storage</h1>
                </div>
                <div className="verified flex items-center gap-2">
                <SiVerizon className='text-[#5f958c]'/>
<h1 className='text-xl font-semibold'>Basic integrations</h1>
                </div>
            </div>
            <div className="wrapper ">
            <div className="button scale-[60%] flex items-center border border-none cursor-pointer bg-[linear-gradient(90deg,rgba(1,115,115,1)0%,rgba(170,217,209,1)100%)] transition-all ease-in-out duration-300 overflow-hidden rounded-xl py-0 pl-8">
            <h1 className='text-2xl   bg-transparent font-semibold text-black'>Get Started</h1>
            <img src={pricinglogo} className='  bg-transparent border border-[#333333] scale-[40%] text-white fill-white'/>
        </div>
            </div>
            <p className='text-center justify-center mx-auto my-0'>No credit card required</p>
        </div>
        <div className="card p-6 text-white border border-[#aad9d1] bg-black w-auto flex items-start flex-col rounded-xl">
            <div className="wrapper flex items-center gap-3">
<img src={cardimg} className='w-[15%]'/>
<h1 className='text-[#77c0b4] text-xl font-semibold'>Individual Plan</h1>
            </div>
            <div className="wrapper mt-6 flex items-end">
                <h1 className='text-5xl font-bold'>$9.99</h1>
                <p className='text-gray-700 text-xl'>/ month</p>
            </div>
            <div className="wrapper flex items-start flex-col gap-2 mt-4">
                <div className="verified flex items-center gap-2">
                <SiVerizon className='text-[#5f958c]'/>
<h1 className='text-xl font-semibold'>Real-time collaboration</h1>
                </div>
                <div className="verified flex items-center gap-2">
                <SiVerizon className='text-[#5f958c]'/>
<h1 className='text-xl font-semibold'>AI powered organization</h1>
                </div>
                <div className="verified flex items-center gap-2">
                <SiVerizon className='text-[#5f958c]'/>
<h1 className='text-xl font-semibold'>Customizable templates</h1>
                </div>
                <div className="verified flex items-center gap-2">
                <SiVerizon className='text-[#5f958c]'/>
<h1 className='text-xl font-semibold'>5GB cloud storage</h1>
                </div>
                <div className="verified flex items-center gap-2">
                <SiVerizon className='text-[#5f958c]'/>
<h1 className='text-xl font-semibold'>Basic integrations</h1>
                </div>
            </div>
            <div className="wrapper ">
            <div className="button scale-[60%] flex items-center border border-none cursor-pointer bg-[linear-gradient(90deg,rgba(1,115,115,1)0%,rgba(170,217,209,1)100%)] transition-all ease-in-out duration-300 overflow-hidden rounded-xl py-0 pl-8">
            <h1 className='text-2xl   bg-transparent font-semibold text-black'>Get Started</h1>
            <img src={pricinglogo} className='  bg-transparent border border-[#333333] scale-[40%] text-white fill-white'/>
        </div>
            </div>
            <p className='text-center justify-center mx-auto my-0'>No credit card required</p>
        </div>
        <div className="card p-6 text-black bg-white w-auto flex items-start flex-col rounded-xl">
            <div className="wrapper flex items-center gap-3">
<img src={cardimg} className='w-[15%]'/>
<h1 className='text-[#77c0b4] text-xl font-semibold'>Individual Plan</h1>
            </div>
            <div className="wrapper mt-6 flex items-end">
                <h1 className='text-5xl font-bold'>$9.99</h1>
                <p className='text-gray-700 text-xl'>/ month</p>
            </div>
            <div className="wrapper flex items-start flex-col gap-2 mt-4">
                <div className="verified flex items-center gap-2">
                <SiVerizon className='text-[#5f958c]'/>
<h1 className='text-xl font-semibold'>Real-time collaboration</h1>
                </div>
                <div className="verified flex items-center gap-2">
                <SiVerizon className='text-[#5f958c]'/>
<h1 className='text-xl font-semibold'>AI powered organization</h1>
                </div>
                <div className="verified flex items-center gap-2">
                <SiVerizon className='text-[#5f958c]'/>
<h1 className='text-xl font-semibold'>Customizable templates</h1>
                </div>
                <div className="verified flex items-center gap-2">
                <SiVerizon className='text-[#5f958c]'/>
<h1 className='text-xl font-semibold'>5GB cloud storage</h1>
                </div>
                <div className="verified flex items-center gap-2">
                <SiVerizon className='text-[#5f958c]'/>
<h1 className='text-xl font-semibold'>Basic integrations</h1>
                </div>
            </div>
            <div className="wrapper ">
            <div className="button scale-[60%] flex items-center border border-none cursor-pointer bg-[linear-gradient(90deg,rgba(1,115,115,1)0%,rgba(170,217,209,1)100%)] transition-all ease-in-out duration-300 overflow-hidden rounded-xl py-0 pl-8">
            <h1 className='text-2xl   bg-transparent font-semibold text-black'>Get Started</h1>
            <img src={pricinglogo} className='  bg-transparent border border-[#333333] scale-[40%] text-white fill-white'/>
        </div>
            </div>
            <p className='text-center justify-center mx-auto my-0'>No credit card required</p>
        </div>
    </div>
</div>
<div className="reminder bg-[#080808] py-10 border-none justify-center items-center gap-4 flex flex-col ">
    <img src={reminder} className='w-[3%] ml-[-24%]' alt="" />
    <h1 className='text-2xl font-semibold text-white text-center'>The real-time synchronization and AI- <br /> powered organization have made our <br /> workflow more efficient than ever. </h1>
    <div className="wrapper px-14 text-gray-400 flex items-center gap-4 font-semibold text-xl ">
      <h3>Sarah Johnson</h3>
      <h3>TechSavvv Solutions</h3>
    </div>
   </div>
    </>
  )
}

export default Pricing
