import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FaBatteryFull, FaSignal } from 'react-icons/fa'
import { HiRss } from 'react-icons/hi'
import { HiMenuAlt3 } from 'react-icons/hi'
import { HiArrowSmLeft } from 'react-icons/hi'


const Search = () => {
  const [allClasses, setAllClasses] = useState([])

  const fetchClasses = async () => {
    const responce = await axios.get('http://localhost:4000/api/v1/classes')
    setAllClasses(responce.data)
    setSearchClasses(responce.data)
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

  const [searchClasses, setSearchClasses] = useState([])
  const [searchKey, setSearchKey] = useState("")

  const onSearchHandler =(event)=>{
setSearchKey(event.target.value)
  }

   useEffect(()=>{   
    if(!searchKey) {
      setSearchClasses(allClasses)
      return;
      }
      
    const filteredArray = allClasses.filter((el) => { 
        
      const arrOfPossibilities = [el.className.toLowerCase().substring(0,searchKey.length), el.trainer.trainerName.toLowerCase().substring(0,searchKey.length), el.classDay.toLowerCase().substring(0,searchKey.length), ...el.classDescription.split(' ').map(item=>item.toLowerCase().substring(0,searchKey.length))
    ]
        return arrOfPossibilities.includes(searchKey.toLowerCase())
      })
    setSearchClasses(filteredArray) 
   },[searchKey])
  
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
      <div className="flex justify-between items-center mt-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-row-reverse  text-[46px] font-bold text-[#9E9E9E] ">
            {' '}
            <HiArrowSmLeft />
            
          </div>

          <h1 className=" text-[#000000] font-semibold text-[30px] mr-[28px] ">
            {' '}
            Search
          </h1>
        </div>
        <div className="flex flex-row-reverse  text-[46px] font-bold text-[#9E9E9E] ">
          {' '}
          <HiMenuAlt3 />
        </div>
      </div>
<section>

    <div className="relative mt-8">
        <div className="flex absolute inset-y-0 left-0 items-center  pointer-events-none pl-6 text-[22px] ">
            <svg aria-hidden="true" className="w-7 h-7 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="search" className="block p-4 pl-14 w-full text-[22px]  text-gray-900 bg-gray-50  border border-gray-300 rounded-full dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search classes
" required 
        value={searchKey}
        onChange={(event)=> onSearchHandler(event) 
        }
        
        />
      
    </div>


</section>

      <div className="mt-10 h-2/6 ">
        <h1 className="mt-16 flex justify-items-start font-bold text-[#000000] text-[24px] gap-4 font-poppins ">
          Classes for you
        </h1>

        <div className="flex mt-8 gap-2 h-4/6 w-full overflow-x-auto">
      
        {(allClasses && allClasses.length && (!searchClasses || !searchClasses.length)) ? (<>”Your search did not give any results. Try to search for something else.”</>) : null }


          {searchClasses.map((element,index) => {
            return (
          <div key={element.id}
          className="relative rounded-2xl overflow-hidden h-full w-2/5 flex-none ">
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
      <div className='pb-8'>
        <h1 className="mt-16 flex justify-items-start font-bold text-[#000000] text-[24px] font-poppins ">
          Popular Trainers
        </h1>

        {allTrainers.map((element,index) => {
            return (
        <div 
        key={element.id}
        className="h-full w-2/5  mb-8 mt-8 flex-none flex justify-between items-center ml-4 font-bold text-[#000000] text-[24px] font-poppins">


          <img
          width={"120"}
            src={element.asset.url}
            className=" rounded-lg object-cover  aspect-square " />
          <h1 className='whitespace-nowrap ml-6'>{element.trainerName}</h1>
        </div>
         )
        })}
     
      
      </div>
    </div>
  )
}

export default Search
