import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FaBatteryFull, FaSignal } from 'react-icons/fa'
import { HiRss } from 'react-icons/hi'
import { HiMenuAlt3 } from 'react-icons/hi'
import { HiArrowSmLeft } from 'react-icons/hi'
import {useNavigate} from 'react-router'


const MySchedule = () => {
const [userData,setUserData] = useState()
const [allUserData , setAllUserData] = useState()

  const navigate = useNavigate()
  const redirectToLoginPage = () => {
      navigate('/login')
  }

const fetchUserData = async () => {
  if(!userData) return
  const response = await axios.get(`http://localhost:4000/api/v1/users/${userData.userId}`)
  setAllUserData(response.data)
}
useEffect(()=>{
  if(!userData || !userData.token) return
  axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`;
  fetchUserData()

},[userData])

useEffect(()=>{
  // todo : implement proper middlewares to handle auth
  // if the user isnot logged in redirect him to login page 
  const userData = window.localStorage.getItem('user')
  if(!userData) {
    redirectToLoginPage()
    return
  }
  setUserData(JSON.parse(userData))
}
  ,[])

 

  const navigateToClassDetailsPageHandler = (id) => {
    if(!id) return 
  // https://localhost:3000/classDetails?id=4
    navigate({
      pathname:'/classesDetail',
      search:`id=${id}`
    })
  }

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

          <h1 className=" text-[#000000] font-semibold text-[30px] mr-[28px] ml-2">
            {' '}
            My Schedule
          </h1>
        </div>
        <div className="flex flex-row-reverse  text-[46px] font-bold text-[#9E9E9E] " role="button" onClick={() => navigate({
          pathname:'/',
          search:'page=mySchedule'
        })}>
          {' '}
          <HiMenuAlt3 />
        </div>
      </div>
<main className='mt-12'>
  {allUserData && allUserData.classes.length ? 
  (
    <>
    {allUserData.classes.map((singleClass,index)=>{
      return (
  <section key={index} className='border-solid border-2 border-[#D4D4D4] mb-4 p-6 rounded-[20px] text-left'  onClick={()=> navigateToClassDetailsPageHandler(singleClass.id)}> 
  <h1 className='font-bold text-[#000000] text-[24px] font-poppins mb-6'>{singleClass.className}</h1>
  <h2 className='font-semibold text-[#000000] text-[20px] font-poppins'>{singleClass.classDay} - {singleClass.classTime}
</h2>
</section>
      )
  })}
</>
  )
: (<> no classes </>)}


</main>

    </div>
  )
}

 


export default MySchedule
