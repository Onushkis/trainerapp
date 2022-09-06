import React from 'react'
import { FaBatteryFull, FaSignal } from 'react-icons/fa'
import { HiRss } from 'react-icons/hi'
import welcomebg from '../Assets/welcomebg.jpg'

const Wellcome = () => {
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
    </div>
  )
}

export default Wellcome