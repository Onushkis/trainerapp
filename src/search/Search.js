import React from 'react'
import { FaBatteryFull, FaSignal} from "react-icons/fa";
import { HiRss } from "react-icons/hi";
import { HiMenuAlt3} from "react-icons/hi";
import { HiArrowSmLeft} from "react-icons/hi";
import weights1 from '../Assets/weights1.jpg'
import spinning1 from '../Assets/spinning1.jpg'
import aerobics1 from '../Assets/aerobics1.jpg'
import sara from '../Assets/sara.jpg'
import michael from '../Assets/michael.jpg'
import davina from '../Assets/davina.jpg'



const Search = () => {
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
        <div className='flex items-center justify-between'> 
        <div class="flex flex-row-reverse mt-6 text-[46px] font-bold text-[#9E9E9E] "> <HiArrowSmLeft /></div>

        <h1 className=' text-[#000000] font-semibold text-[30px] mr-[28px] ' > Search</h1>
        </div>
        <div class="flex flex-row-reverse mt-6 text-[46px] font-bold text-[#9E9E9E] "> <HiMenuAlt3 /></div>
        </div>

       <h1>Search input</h1>

        <div className='mt-10 h-2/6 '>
            <h1 className='mt-16 flex justify-items-start font-bold text-[#000000] text-[24px] gap-4 font-poppins '>Classes for you</h1>

            <div className='flex mt-8 gap-2 h-4/6 w-full '>

           <div className='relative rounded-2xl overflow-hidden h-full w-2/5 flex-none '>
           <img src={spinning1} className=" rounded-2xl object-cover  h-full w-full rounded-br-none"/>
            <div className='absolute bottom-0 bg-[#F1C40E] w-full p-1 text-left rounded-tr-[40px]'>
              <div className='ml-4 font-bold text-[#000000] text-[16px] font-poppins '> 
          <h1>Daily Go Pro</h1>
          <h1>Raiting</h1>
          </div>
        </div>
           </div>
            {/* <img src={spinning1}  className=" rounded-2xl object-cover h-full  w-2/5  rounded-br-none"/> */}
            <div className='relative rounded-2xl overflow-hidden h-full w-2/5 flex-none'>
           <img src={weights1} className=" rounded-2xl object-cover  h-full w-full rounded-br-none"/>
            <div className='absolute bottom-0 bg-[#F1C40E] w-full p-1 text-left rounded-tr-[40px]'>
              <div className='ml-4 font-bold text-[#000000] text-[16px] font-poppins '> 
          <h1>Yoga Master </h1>
          <h1>Raiting</h1>
          </div>
        </div>
           </div>
          
            {/* <img src={aerobics1}  className=" rounded-2xl object-cover  h-full  w-2/5 rounded-br-none"/> */}
            <div className='relative rounded-2xl overflow-hidden h-full w-2/5 flex-none'>
           <img src={aerobics1} className=" rounded-2xl object-cover  h-full w-full rounded-br-none"/>
            <div className='absolute bottom-0 bg-[#F1C40E] w-full p-1 text-left rounded-tr-[40px]'>
              <div className='ml-4 font-bold text-[#000000] text-[16px] font-poppins '> 
          <h1 >Bend kic</h1>
          <h1>Raiting</h1>
          </div>
        </div>
           </div>

            </div>
           </div>
           <div className='mt-10 h-2/6 '>
            <h1 className='mt-16 flex justify-items-start font-bold text-[#000000] text-[24px] font-poppins '>Popular Trainers</h1>
            <div className='h-full w-2/5 flex-none mb-6 mt-12 flex justify-between items-center'>
           <img src={davina} className=" rounded-lg object-cover  h-full w-full rounded-br-none "/>
           <h1>Davina Jones</h1>
           </div>
           <div className=' h-full w-2/5 mb-6 flex justify-between items-center'>
           <img src={michael} className=" rounded-lg object-cover  h-full w-full rounded-br-none"/>
           <h1>Michael Blake</h1>
           </div>
           <div className='h-full w-2/5 flex-none mb-8 flex justify-between items-center ml-4 font-bold text-[#000000] text-[24px] font-poppins'>
           <img src={sara} className=" rounded-lg  object-cover  h-full w-full rounded-br-none"/>
           <h1 >Sarah Connor</h1>
           </div>
            </div>
        </div>
  )
}

export default Search