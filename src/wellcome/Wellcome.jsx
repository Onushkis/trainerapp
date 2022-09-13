import React from 'react'
import { FaBatteryFull, FaSignal } from 'react-icons/fa'
import { HiRss } from 'react-icons/hi'
import { useNavigate } from 'react-router'
import welcomebg from '../Assets/welcomebg.jpg'
import welcomecenter from '../Assets/welcomecenter.jpg'


const Wellcome = () => {
  const navigate= useNavigate()
  return (
    <div className="p-8 h-screen">
    <div className="flex justify-between items-center">
      <div className="font-bold text-[#000000] text-[24px]">9:21</div>
      <div className="flex space-x-2 font-bold text-[#000000] text-[24px] ">
        <FaSignal />
        <HiRss />
        <FaBatteryFull />
      </div>
    </div>
    <img src={welcomebg} alt=""  className='aspect-square rounded-lg w-full h-96 object-cover ' />
    <div > 
    <img src={welcomecenter} alt=""  className='aspect-square rounded-lg w-full h-96 object-cover ' />
   
    <button type="button" className="block p-4 w-full mt-6 mb-8 text-[24px] text-center font-bold  text-[#000000] bg-[#F1C40E]  border-none focus:border-blue-500  rounded-full   dark:focus:ring-[#9771f3] dark:focus:border-[#9771f3] hover:bg-[#dddbd4] focus:outline-none focus:ring focus:ring-[#9771f3]" 
    onClick={()=>navigate('/popularClasses')} > start training</button>
    </div>
    </div>
    
  )
}

export default Wellcome