import React from 'react'
import Navbar from '../components/Navbar'
import heroimg from '../img/heroimg.png'
import ad1 from '../img/ad1.png'
import ad2 from '../img/ad2.png'
import ad3 from '../img/ad3.png'
import ad4 from '../img/ad4.png'
import ad5 from '../img/ad5.png'
import ad6 from '../img/ad6.png'
import ad7 from '../img/ad7.png'
import ad8 from '../img/ad8.png'
import reminder from '../img/reminder.png'
const Hero = () => {
  return (
   <>
   <Navbar/>
   <div className="hero flex items-center justify-between px-[170px] bg-[#080808] py-[120px] ">
    <div className="hero-left w-[150%] ">
      <h1 className=' font-bold text-7xl text-white'><span className='text-[#aad9d1]'>Intelligent</span> cloud- <br />
      based <br />
      <span className='text-[#aad9d1]'>note-taking</span> and <br /> collaboration tool
      </h1>
      <p className='text-white text-lg'>Experience the power of smart note-taking and transform the way you work today.</p>
    </div>
    <div className="hero-right flex items-center ">
      <img src={heroimg} className='w-[24%]' alt="" />
      <img src={heroimg} className='w-[24%]' alt="" />
      <img src={heroimg} className='w-[24%]' alt="" />
      </div>
   </div>
   <div className="ads px-20 bg-[#080808] grid grid-cols-8">
    <img src={ad1} className='w-[70%]'/>
    <img src={ad2} className='w-[70%]'/>
    <img src={ad3} className='w-[70%]'/>
    <img src={ad4} className='w-[70%]'/>
    <img src={ad5} className='w-[70%]'/>
    <img src={ad6} className='w-[70%]'/>
    <img src={ad7} className='w-[70%]'/>
    <img src={ad8} className='w-[70%]'/>
   </div>
   <div className="reminder bg-[#080808] py-20 border-none justify-center items-center gap-4 flex flex-col ">
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

export default Hero
