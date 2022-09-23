import React, { useState, useEffect }from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router'
import { FaBatteryFull, FaSignal} from "react-icons/fa";
import { HiRss } from "react-icons/hi";
import { HiMenuAlt3} from "react-icons/hi";
import HeaderPwe from '../HeaderPwe';
import { Online } from 'react-detect-offline';
/*  import abs1 from '../Assets/abs1.jpg'
import weights1 from '../Assets/weights1.jpg'
import spinning1 from '../Assets/spinning1.jpg'
import aerobics1 from '../Assets/aerobics1.jpg' 
 */

const PopularClasses = () => {
  const [allClasses, setAllClasses] = useState([])
const [ randClass, setRandClass] = useState()
const navigate = useNavigate()
  const fetchClasses = async () => {
    const responce = await axios.get('http://localhost:4000/api/v1/classes')
    setAllClasses(responce.data)
    setRandClass(responce.data[Math.floor(Math.random()*responce.data.length)]
    )
  }
  useEffect(() => {
    fetchClasses()
  }, [])

const navigateToClassDetailsPageHandler = (id) => {
  if(!id) return 
// https://localhost:3000/classDetails?id=4
  navigate({
    pathname:'/classesDetail',
    search:`id=${id}`
  })
}

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
        <h1 className=' text-[#000000] font-semibold text-[30px]'>Popular classes</h1>
        <div className="flex flex-row-reverse mt-6 text-[46px] font-bold text-[#9E9E9E] " role="button" onClick={() => navigate({
          pathname:'/',
          search:'page=popularClasses'
        })}> <HiMenuAlt3 /></div>
        </div>

<Online >
        {randClass ? (<>
        <div className='mt-5 h-3/6  w-full relative rounded-2xl overflow-hidden' onClick={()=> navigateToClassDetailsPageHandler(randClass.id)}>

        <img src={randClass.asset.url} className=" rounded-2xl object-cover w-full h-full " /> 
        <div className='absolute bottom-0 bg-[#F1C40E] w-4/6 p-3 text-left rounded-tr-[50px] font-bold text-[#000000] text-[20px]'>
          <div className='ml-4 font-poppins '> 
          <h1 >{randClass.className}</h1>
          <h1 >Raiting</h1>
          </div>

        </div>
           </div>
          </>): null}
           <div className='mt-10 h-2/6 '>
            <h1 className='mt-16 flex justify-items-start font-bold text-[#000000] text-[24px] gap-4 font-poppins '>Classes for you</h1>

            <div className="flex mt-8 gap-2 h-4/6 w-full overflow-x-auto">

            {allClasses.map((element,index) => {
              
              return (
                <div key={element.id } onClick={()=> navigateToClassDetailsPageHandler(element.id)}
                className="relative rounded-2xl overflow-hidden h-full w-2/5 flex-none ">
            <img
              src={element.asset?.url || ''}
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
        </Online>
           <HeaderPwe />
      </div>
    )
  }
  
  export default PopularClasses
