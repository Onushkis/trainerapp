import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate} from 'react-router';

import axios from 'axios'
import { FaBatteryFull, FaSignal} from "react-icons/fa";
import { HiRss } from "react-icons/hi";
import { HiMenuAlt3} from "react-icons/hi";
import { HiArrowSmLeft } from "react-icons/hi";
import abs1 from '../Assets/abs1.jpg'





const ClassesDetail = () => {

  const [activeClass, setActiveClass] = useState();
  const [activeTrainer, setActiveTrainer] = useState();

  const navigate = useNavigate();

  const search = useLocation().search;

const id = new URLSearchParams(search).get("id");

const fetchClassData = async (id)=>{
  if(!id) return 
  const response = await axios.get(`http://localhost:4000/api/v1/classes/${id}`)
  setActiveClass(response.data)
  fetchActiveTrainer(response.data.trainerId)
  }
  
  const fetchActiveTrainer = async (id)=>{
    if(!id) return 
    const response = await axios.get(`http://localhost:4000/api/v1/trainers/${id}`)
    setActiveTrainer(response.data)
    }


useEffect (()=>{

  if(!id){
    navigate({
          pathname: '/PopularClasses',
        });

    return;
    }
    fetchClassData(id)
   
},[]
)



  return (
    <div className=''>
      <div className='h-screen '> 
                  <div className='relative h-4/6'>
                  <img src={abs1}  className="object-cover w-full h-full "/> 
        <div className='absolute top-0 w-full p-8'>
        <div className='flex justify-between items-center mb-6'  > 
        <div className='font-bold text-[#000000] text-[24px]'>9:21</div>
        <div className='flex space-x-2 font-bold text-[#000000] text-[24px] '>
            <FaSignal/>
            <HiRss />
          < FaBatteryFull />
  
        </div>
        </div>
        <div  className=' flex  justify-between text-[46px] font-bold text-[#ffff] items-start'> 
                     <HiArrowSmLeft />
                     <HiMenuAlt3 />
                     
</div>
        </div>
<div className='absolute bottom-0 w-full p-8'>

                    
        {activeClass ? (<>

        <section className=' mt-40 text-[#F1C40E] font-bold text-[36px] ml-4'> 

<h1 className='text-left text-[36px] '>{activeClass.className}</h1>

<div className='flex mt-6 justify-between items-center' >
  <h1>Rate</h1>
  <button className='border-2 border-[#F1C40E]  w-40 rounded-full p-1 ml-20'>Rate</button>
</div>
</section >
</>) : null}

        </div>
                  </div>

                  { activeClass ? (<>

<main className='p-8'>
  <div className='text-left mt-2 '>
  <h1 className='mb-4 font-semibold text-[#000000]  text-[20px] '> {activeClass.classDay} - {activeClass.classTime} </h1>
<h1  className='mb-4 font-semibold text-[#000000]  text-[20px] '>{activeClass.classDescription}</h1>
  </div>
{activeTrainer ? (<>

  <h2 className='text-left mt-6  mb-4 font-bold text-[#000000]  text-[30px] '>Trainer</h2>
<section className='flex items-center mt-6'>
  <img src={activeTrainer.asset.url} alt="" width="100" className='aspect-square rounded-lg  object-cover ' />
<h3 className='ml-4 font-bold text-[#000000]  text-[20px] '>  {activeTrainer.trainerName}</h3>
</section>

</>):null}

<h1 className="mt-16 flex justify-items-start font-bold text-[#000000] text-[24px] font-poppins ">
</h1>

      <input type="search" id="search" className="block p-4 pl-14 w-full text-[24px] text-center font-bold  text-[#000000] bg-[#F1C40E]  border-none focus:border-blue-500  rounded-full   dark:focus:ring-[#9771f3] dark:focus:border-[#9771f3] hover:bg-[#dddbd4] focus:outline-none focus:ring focus:ring-[#9771f3]" placeholder="SIGN UP" required 
        /* value={searchKey}
        onChange={(event)=> onSearchHandler(event) 
        } */
        
        />

</main>
</>):null}

        </div>
        </div>

)
}

export default ClassesDetail


    
