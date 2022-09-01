import React from 'react'
import { FaBatteryFull, FaSignal} from "react-icons/fa";
import { HiRss } from "react-icons/hi";
import { FiAlignRight} from "react-icons/fi";
import abs1 from '../Assets/abs1.jpg'
import weights1 from '../Assets/weights1.jpg'
import spinning1 from '../Assets/spinning1.jpg'
import aerobics1 from '../Assets/aerobics1.jpg'


const PopularClasses = () => {
  
    return (
      <div className='p-8 h-screen'> 
        <div className='flex justify-between items-center'  > 
        <div className='font-bold text-[#000000] text-[24px]'>9:21</div>
        <div className='flex space-x-2 font-bold text-[#000000] text-[24px] '>
            <FaSignal/>
            <HiRss />
          < FaBatteryFull />
  
        </div>
        </div>
        <div  className='flex justify-between items-center'> 
        <h1 className=' text-[#000000] text-[24px]'>Popular classes</h1>
        <div class="flex flex-row-reverse mt-6 text-[36px] font-bold text-[#9E9E9E]"> <FiAlignRight /></div>
        </div>

        <div className='mt-5 h-3/6  w-full relative rounded-2xl overflow-hidden' >
          
        <img src={abs1} className=" rounded-2xl object-cover w-full h-full " /> 
        <div className='absolute bottom-0 bg-[#50d71e] w-4/6 p-3 text-left rounded-tr-[50px]'>
          <h1>Lower abs workout</h1>
          <h1>Raiting</h1>

        </div>
           </div>

           <div className='mt-10 h-2/6 '>
            <h1 className='mt-16 flex justify-items-start font-bold text-[#000000] text-[24px] gap-4'>Classes for you</h1>

            <div className='flex mt-8 gap-2 h-4/6 w-full '>

           <div className='relative rounded-2xl overflow-hidden h-full w-2/5 flex-none'>
           <img src={weights1} className=" rounded-2xl object-cover  h-full w-full rounded-br-none"/>
            <div className='absolute bottom-0 bg-[#50d71e] w-full p-3 text-left rounded-tr-[40px]'>
          <h1>Lower abs workout</h1>
          <h1>Raiting</h1>

        </div>
           </div>
            {/* <img src={spinning1}  className=" rounded-2xl object-cover h-full  w-2/5  rounded-br-none"/> */}
            <div className='relative rounded-2xl overflow-hidden h-full w-2/5 flex-none'>
           <img src={spinning1} className=" rounded-2xl object-cover  h-full w-full rounded-br-none"/>
            <div className='absolute bottom-0 bg-[#50d71e] w-full p-3 text-left rounded-tr-[40px]'>
          <h1>Lower abs workout</h1>
          <h1>Raiting</h1>

        </div>
           </div>
          
            {/* <img src={aerobics1}  className=" rounded-2xl object-cover  h-full  w-2/5 rounded-br-none"/> */}
            <div className='relative rounded-2xl overflow-hidden h-full w-2/5 flex-none'>
           <img src={aerobics1} className=" rounded-2xl object-cover  h-full w-full rounded-br-none"/>
            <div className='absolute bottom-0 bg-[#50d71e] w-full p-3 text-left rounded-tr-[40px]'>
          <h1>Lower abs workout</h1>
          <h1>Raiting</h1>

        </div>
           </div>

            </div>
           </div>
      </div>
    )
  }
  
  export default PopularClasses


  
  