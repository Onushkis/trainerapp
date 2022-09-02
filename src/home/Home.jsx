import React from 'react'
import { FaBatteryFull, FaSignal } from 'react-icons/fa'
import { HiRss } from 'react-icons/hi'
import { FiX } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="p-8">
      <div className="flex justify-between items-center">
        <div className="font-bold text-[#000000] text-[24px]">9:21</div>
        <div className="flex space-x-2 font-bold text-[#000000] text-[24px] ">
          <FaSignal />
          <HiRss />
          <FaBatteryFull />
        </div>
      </div>
      <div className="flex flex-row-reverse mt-6 text-[36px] font-bold text-[#9E9E9E]">
        {' '}
        <FiX />
      </div>
      <div className="text-[36px]  font-poppins  mt-16 space-y-6 ">
        <h1>Home</h1>
        <h1 role="button" onClick={()=>navigate('search')}>
          Search
        </h1>
        <h1>My Schedule</h1>
        <h1>Home</h1>
        <h1>Log out</h1>
      </div>
    </div>
  )
}

export default Home
