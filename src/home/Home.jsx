import React from 'react'
import { FaBatteryFull, FaSignal } from 'react-icons/fa'
import { HiRss } from 'react-icons/hi'
import { FiX } from 'react-icons/fi'
import { useNavigate ,useLocation} from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const search = useLocation().search;
  const page = new URLSearchParams(search).get("page");
  
const navigateToLastPageIfAny = () => {
  if(!page) navigate('popularClasses')
  navigate(page)
}

// 'If its login ...

const isLoggedin = () => {
  const userDetails = window.localStorage.getItem('user')
  if(userDetails) return true
  return false
}

// 'If its log out ...

const logoutHandler =() =>{
  if(!isLoggedin()) return
  window.localStorage.removeItem('user')
  navigate('login')
}

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
      <div className="flex flex-row-reverse mt-6 text-[36px] font-bold text-[#9E9E9E]" role="button" onClick={()=>navigateToLastPageIfAny()}>
        {' '}
        <FiX />
      </div>
      <div className="text-[36px]  font-poppins  mt-16 space-y-6 ">
        <h1  role="button" onClick={()=>navigate('PopularClasses')}>Home</h1>
        <h1 role="button" onClick={()=>navigate('search')}>
          Search
        </h1>
        {isLoggedin() ? (<>
        <h1 role="button" onClick={()=>navigate('MySchedule')}>My Schedule</h1>
        <h1 role="button" onClick={()=>logoutHandler()}>Log out</h1>
        </>) : (<>
          <h1 role="button" onClick={()=>navigate('login')}>Login</h1>
        </>)}

       

      </div>
    </div>
  )
}

export default Home
