import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './home/Home.jsx'
import Search from './search/Search'
import PopularClasses from './popularClasses/PopularClasses'
import MySchedule from './mySchedule/MySchedule'
import ClassesDetail from './classesDetail/ClassesDetail.jsx'
import Login from './login/Login.jsx'
import Wellcome from './wellcome/Wellcome.jsx'
import NotFound from './NotFound'
import { Offline, Online } from "react-detect-offline";
import OfflinePage from './OfflinePage.jsx'

import './App.css'
function App() {

  // check if the token isn't expired
  // that is not the best way to do it
  useEffect(() => {
    const userData = window.localStorage.getItem('user')

    if(userData){
      const tokenExpirationDate = new Date(JSON.parse(userData).validUntil)

      if(tokenExpirationDate <= new Date()){
      window.localStorage.removeItem('user')
    }
    }

  }, [])

  return (
    <div className="App">
      <Online>
      <BrowserRouter>
        <Routes>
          <Route path="wellcome" element={<Wellcome />} />

          <Route path="/" element={<Home />} />
          <Route path="search" element={<Search />} />

          <Route path="popularClasses" element={<PopularClasses />} />
          <Route path="mySchedule" element={<MySchedule />} />
          <Route path="classesDetail" element={<ClassesDetail />} />

          {/* todo :^add middlewares for handling authantication */}
          <Route path="login" element={<Login />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </Online>
    <Offline>
      <OfflinePage />
    </Offline>
        <> 
      </>
    </div>
  )
}
export default App
