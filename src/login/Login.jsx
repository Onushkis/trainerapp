import React, { useEffect, useState } from 'react'
import { FaBatteryFull, FaSignal } from 'react-icons/fa'
import { HiRss } from 'react-icons/hi'
import axios from 'axios'
import { useNavigate } from 'react-router'

const Login = () => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()
    const redirectToHomePage = () => {
        navigate('/wellcome')
    }

useEffect(()=>{
    // todo : implement proper middlewares to handle auth
    // if the user is logged in redirect him to home page 
    const userData = window.localStorage.getItem('user')
    if(userData) redirectToHomePage()
}
    ,[])

    const loginHandler = async(e) =>{
     e.preventDefault();
    try {
        const response = await axios.post('http://localhost:4000/auth/token' , {username , password})
    // not secure , todo : fix it later
    window.localStorage.setItem('user' , JSON.stringify(response.data))
    setTimeout(()=>{
        redirectToHomePage()
    },1000)
    } catch (error) {
        // 
    }
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
    <h1 className="font-bold text-[#F1C40E] text-[56px] text-left mt-10">Believe Yourself</h1>
     <h2 className="font-bold text-[#000000] text-[24px] text-left mt-6">Train like a pro</h2>

     <main className='mt-20'>
        <h1 className="font-semibold text-[#000000] text-[24px] text-left mt-6">Log in with your credentials</h1>
        <div className='mt-4 '> 
       
        {/* form components  */}
        <form onSubmit={(e)=> loginHandler(e)}>
        <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" id="username" className="block p-4   pl-14 w-full text-[22px]  text-gray-900 bg-gray-50  border border-gray-300 rounded-full dark:placeholder-gray-400 dark:focus:ring-[#9771f3] dark:focus:border-[#9771f3]" placeholder="Enter your email..." required 
        
        />
           <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" id="password" className="block p-4 pl-14 w-full mt-6 mb-6 text-[22px]  text-gray-900 bg-gray-50  border border-gray-300 rounded-full dark:placeholder-gray-400  dark:focus:ring-[#9771f3] dark:focus:border-[#9771f3]" placeholder="Enter your password... " required 
        
        />
         <button type="submit" className="block p-4 pl-14 w-full text-[24px] text-center font-bold  text-[#000000] bg-[#F1C40E]  border-none focus:border-blue-500  rounded-full   dark:focus:ring-[#9771f3] dark:focus:border-[#9771f3] hover:bg-[#dddbd4] focus:outline-none focus:ring focus:ring-[#9771f3]" > LOGIN</button>
       
        </form>
        
        
        </div>
        
     </main>
    </div>

  )
}

export default Login
