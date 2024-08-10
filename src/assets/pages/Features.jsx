import React from 'react'
import cardimg from '../img/featurescardimg.png'
import reminder from '../img/reminder.png'
const Features = () => {
    
  return (
  <>
  <div id="features" className="features bg-[#080808] py-8 text-white">
    <div className="features-top flex items-center gap-4 flex-col">
        <h1 className='font-bold text-7xl text-white text-center'>Discover the Power of <br /> <span className='text-[#aad9d1]'>SmartNotes</span></h1>
<p className='text-center text-gray-400'>SmartNotes is packed with innovative features <br /> designed to revolutionize the way you take notes, <br /> collaborate with others, and stay organized.</p>
    </div>
    <div className="features-bottom my-8 gap-8  mx-20 grid grid-rows-2">
        <div className="wrapper grid gap-8 grid-cols-2">
        <div className="card hover:translate-x-[-5px] hover:translate-y-[-5px] transition-all ease-in-out duration-200 border w-auto rounded-xl border-[#AAD9D1] p-4 flex items-start gap-4 flex-col">
            <img src={cardimg} className='w-[8%]' alt="" />
        <h1 className='text-2xl font-semibold'>Customizable Templates</h1>
        <p className='text-gray-400'>Create custom templates for your recurring tasks or projects to <br /> save time and ensure consistency. Tailor SmartNotes to fit your <br /> unique workflow and preferences.</p>
       
        </div>
        <div className="card hover:translate-x-[-5px] hover:translate-y-[-5px] transition-all ease-in-out duration-200 border w-auto rounded-xl border-[#AAD9D1] p-4 flex items-start gap-4 flex-col">
            <img src={cardimg} className='w-[8%]' alt="" />
        <h1 className='text-2xl font-semibold'>Customizable Templates</h1>
        <p className='text-gray-400'>Create custom templates for your recurring tasks or projects to <br /> save time and ensure consistency. Tailor SmartNotes to fit your <br /> unique workflow and preferences.</p>
       
        </div>
        </div>
        <div className="wrapper grid grid-cols-4 gap-8">
        <div className="card hover:translate-x-[-5px] hover:translate-y-[-5px] transition-all ease-in-out duration-200 border w-auto rounded-xl border-[#AAD9D1] p-4 flex items-start gap-4 flex-col">
            <img src={cardimg} className='w-[8%]' alt="" />
        <h1 className='text-2xl font-semibold'>Customizable Templates</h1>
        <p className='text-gray-400'>Create custom templates for your recurring tasks or projects to <br /> save time and ensure consistency. Tailor SmartNotes to fit your <br /> unique workflow and preferences.</p>
       
        </div>
        <div className="card hover:translate-x-[-5px] hover:translate-y-[-5px] transition-all ease-in-out duration-200 border w-auto rounded-xl border-[#AAD9D1] p-4 flex items-start gap-4 flex-col">
            <img src={cardimg} className='w-[8%]' alt="" />
        <h1 className='text-2xl font-semibold'>Customizable Templates</h1>
        <p className='text-gray-400'>Create custom templates for your recurring tasks or projects to <br /> save time and ensure consistency. Tailor SmartNotes to fit your <br /> unique workflow and preferences.</p>
       
        </div>
        <div className="card hover:translate-x-[-5px] hover:translate-y-[-5px] transition-all ease-in-out duration-200 border w-auto rounded-xl border-[#AAD9D1] p-4 flex items-start gap-4 flex-col">
            <img src={cardimg} className='w-[8%]' alt="" />
        <h1 className='text-2xl font-semibold'>Customizable Templates</h1>
        <p className='text-gray-400'>Create custom templates for your recurring tasks or projects to <br /> save time and ensure consistency. Tailor SmartNotes to fit your <br /> unique workflow and preferences.</p>
       
        </div>
        <div className="card hover:translate-x-[-5px] hover:translate-y-[-5px] transition-all ease-in-out duration-200 border w-auto rounded-xl border-[#AAD9D1] p-4 flex items-start gap-4 flex-col">
            <img src={cardimg} className='w-[8%]' alt="" />
        <h1 className='text-2xl font-semibold'>Customizable Templates</h1>
        <p className='text-gray-400'>Create custom templates for your recurring tasks or projects to <br /> save time and ensure consistency. Tailor SmartNotes to fit your <br /> unique workflow and preferences.</p>
       
        </div>
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
   <div className="flex justify-center items-center h-screen bg-[#080808]">
      <iframe
        className="w-full max-w-6xl h-[643px] border-0"
        src="https://www.youtube.com/embed/S2kymv60ndQ?autoplay=1&controls=0&loop=1&playlist=S2kymv60ndQ&modestbranding=1&showinfo=0&mute=1"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
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

export default Features
