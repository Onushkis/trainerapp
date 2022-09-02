import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FaBatteryFull, FaSignal } from 'react-icons/fa'
import { HiRss } from 'react-icons/hi'
import { HiMenuAlt3 } from 'react-icons/hi'
import { HiArrowSmLeft } from 'react-icons/hi'
import weights1 from '../Assets/weights1.jpg'
import spinning1 from '../Assets/spinning1.jpg'
import aerobics1 from '../Assets/aerobics1.jpg'
import sara from '../Assets/sara.jpg'
import michael from '../Assets/michael.jpg'
import davina from '../Assets/davina.jpg'

const Search = () => {
  const [allClasses, setAllClasses] = useState([])

  const fetchClasses = async () => {
    const responce = await axios.get('http://localhost:4000/api/v1/classes')
    setAllClasses(responce.data)
  }
  useEffect(() => {
    fetchClasses()
  }, [])

  const [allTrainers, setAllTrainers] = useState([])

  const fetchTrainers = async () => {
    const responce = await axios.get('http://localhost:4000/api/v1/trainers')
    setAllTrainers(responce.data)
  }
  useEffect(() => {
    fetchTrainers()
  }, [])

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

          <h1 className=" text-[#000000] font-semibold text-[30px] mr-[28px] ">
            {' '}
            Search
          </h1>
        </div>
        <div className="flex flex-row-reverse mt-6 text-[46px] font-bold text-[#9E9E9E] ">
          {' '}
          <HiMenuAlt3 />
        </div>
      </div>

      <h1>Search input</h1>

      <div className="mt-10 h-2/6 ">
        <h1 className="mt-16 flex justify-items-start font-bold text-[#000000] text-[24px] gap-4 font-poppins ">
          Classes for you
        </h1>

        <div className="flex mt-8 gap-2 h-4/6 w-full overflow-x-auto">
         
          {allClasses.map((element,index) => {
            return (
          <div className="relative rounded-2xl overflow-hidden h-full w-2/5 flex-none ">
            <img
              src={element.asset.url}
              className=" rounded-2xl object-cover  h-full w-full rounded-br-none"
            />
            <div className="absolute bottom-0 bg-[#F1C40E] w-full p-1 text-left rounded-tr-[40px]">
              <div className="ml-4 font-bold text-[#000000] text-[16px] font-poppins ">
                <h1 className='truncate'>{element.className}</h1>
                <h1>Raiting</h1>
              </div>
            </div>
          </div>
          
          )
        })}
          
        </div>
      </div>
      <div className="mt-10 h-2/6 ">
        <h1 className="mt-16 flex justify-items-start font-bold text-[#000000] text-[24px] font-poppins ">
          Popular Trainers
        </h1>

        {allTrainers.map((element,index) => {
            return (
        <div className="h-full w-2/5 flex-none mb-6 mt-12 flex justify-between items-center ml-4 font-bold text-[#000000] text-[24px] font-poppins">

          <img
            src={element.asset.url}
            className=" rounded-lg object-cover   w-full  aspect-square
            "
          />
          <h1>{element.trainerName}</h1>
        </div>
         )
        })}
     
      
      </div>
    </div>
  )
}

export default Search
