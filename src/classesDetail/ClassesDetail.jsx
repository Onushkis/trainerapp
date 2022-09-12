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
  const [allUserData , setAllUserData] = useState()
const [userData,setUserData] = useState()
const [isUserEnrolledInClass, setIsUserEnrolledInClass] = useState(false) 
const [isLoading , setIsLoading] = useState(false)
  const navigate = useNavigate();

  const search = useLocation().search;

const id = new URLSearchParams(search).get("id");

const fetchClassData = async (id)=>{
  if(!id) return 
  setIsLoading(true)
  const response = await axios.get(`http://localhost:4000/api/v1/classes/${id}`)
  setIsLoading(false)
  setActiveClass(response.data)
  fetchActiveTrainer(response.data.trainerId)
  }


  const fetchActiveTrainer = async (id)=>{
    if(!id) return 
    setIsLoading(true)
    const response = await axios.get(`http://localhost:4000/api/v1/trainers/${id}`)
    setIsLoading(false)
    setActiveTrainer(response.data)
    }

    const fetchUserData = async () => {
      if(!userData) return
      setIsLoading(true)
      const response = await axios.get(`http://localhost:4000/api/v1/users/${userData.userId}`)
      setIsLoading(false)
      setAllUserData(response.data)
      

    }
    useEffect(()=>{
      if(!userData || !userData.token) return
      axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`;
      fetchUserData()
    
    },[userData])

  
    useEffect(()=>{
      isTheUserAlreadyEnrolledInClass()
    }, [allUserData])


    useEffect (()=>{
    
      if(!id){
        navigate({
              pathname: '/PopularClasses',
            });
    
        return;
        }
        fetchClassData(id)

   
const userDataFromStorage = window.localStorage.getItem('user')
if(userDataFromStorage) setUserData(JSON.parse(userDataFromStorage))

},[]
)

// If a user is not logged in, the button does not appear.
const isUserLoggedin = () => {
  // if we have user data in storage then the user is logged in 
  if(userData){
    return true
  }else {
    // if we dont have the user data in the storage then the user is not logged it 
  return  false
} 

}


const signupHandler = async (e) =>{
e.preventDefault()
// It should not be possible to sign up for the same team several times.
  if(isUserEnrolledInClass){
    // if the user is already enrolled, he should leave the class when he click on the button
    setIsLoading(true)
    const response = await axios.delete(`http://localhost:4000/api/v1/users/${userData.userId}/classes/${activeClass.id}`)
    setIsLoading(false)
    setIsUserEnrolledInClass(false)
  }else {
    // if the user is not enrolled in, he should enroll in the class
    setIsLoading(true)
    const response = await axios.post(`http://localhost:4000/api/v1/users/${userData.userId}/classes/${activeClass.id}`)
    setIsLoading(false)
    console.log('response',response)
    setIsUserEnrolledInClass(true)
  } 
}

// If a user is already enrolled in this team, the text "Leave" appears on the button.
const isTheUserAlreadyEnrolledInClass = () => {
  if(!isUserLoggedin) return 
if(allUserData && allUserData.classes && allUserData.classes.length) {
  //  we are going to filter the user classes to see if there is any class with the same id as our current active class, if there is any then the user is enrolled in .. if there is not any with the same id then the user is not enrollend in.
  // 0 / 1
 const isUserAlreadyEnrolled = allUserData.classes.filter((el ) => el.id === activeClass.id).length 
//   0 => false , 1 => true : !!0 :^false , !!1 :^true
 setIsUserEnrolledInClass(!!isUserAlreadyEnrolled)
}
}

// All "classes" have a maximum number of participants. It should not be possible to sign up for a team whose max is reached.
const isTeamMaximumReached = () => {
  // if the class has number of users equal to max participants then it is not allowed for any other user to join
return activeClass.users.length >= activeClass.maxParticipants
 }

const canUserSignUpForClass = () => {
// It should not be possible to sign up More than one team of per day.

}


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
                     <div   role="button" onClick={() => navigate({
          pathname:'/',
          search:'page=classesDetail'
        })}><HiMenuAlt3 /></div>
                     
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
{isUserLoggedin() ? (
      <button onClick={(e) => signupHandler(e)}  type="button"  className={`block p-4 w-full text-[24px] text-center font-bold  text-[#000000] bg-[#F1C40E]  border-none focus:border-blue-500  rounded-full   dark:focus:ring-[#9771f3] dark:focus:border-[#9771f3] hover:bg-[#dddbd4] focus:outline-none focus:ring focus:ring-[#9771f3]`}
      disabled={isTeamMaximumReached() || isLoading}
        >
         {isUserEnrolledInClass ? (<>leave</>) : (<>SIGN UP</>) }
        </button>
) :null}
</main>
</>):null}

        </div>
        </div>

)
}

export default ClassesDetail


    
