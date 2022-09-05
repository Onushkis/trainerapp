import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FaBatteryFull, FaSignal } from 'react-icons/fa'
import { HiRss } from 'react-icons/hi'
import { HiMenuAlt3 } from 'react-icons/hi'
import { HiArrowSmLeft } from 'react-icons/hi'



const MySchedule = () => {
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
    <div className="flex justify-between items-center">
      <div className="flex items-center justify-between">
        <div className="flex flex-row-reverse mt-6 text-[46px] font-bold text-[#9E9E9E] ">
          {' '}
          <HiArrowSmLeft />
        </div>
    </div>
    <div className="flex flex-row-reverse mt-6 text-[46px] font-bold text-[#9E9E9E] ">
          {' '}
          <HiMenuAlt3 />
        </div>
    </div>
<main>
  <section className='class="border-solid border-2 border-sky-500 mb-4'> 
  <h1>Yoga Flow Workout</h1>
  <h2>Monday - 19.30
</h2>
</section>
<section className='class="border-solid border-2 border-sky-500'> 
  <h1>Lower Abs Workout</h1>
  <h2>Wednesday - 17.00</h2>
</section>
</main>

    </div>
  )
}

 


export default MySchedule
