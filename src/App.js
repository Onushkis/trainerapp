import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './home/Home.jsx'
import Search from './search/Search'
import PopularClasses from './popularClasses/PopularClasses'
import MySchedule from './mySchedule/MySchedule'
import ClassesDetail from './classesDetail/ClassesDetail.jsx'
import Login from './login/Login.jsx'
import NotFound from './NotFound'

import './App.css'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="search" element={<Search />} />

          <Route path="popularClasses" element={<PopularClasses />} />
          <Route path="mySchedule" element={<MySchedule />} />
          <Route path="classesDetail" element={<ClassesDetail />} />
          <Route path="login" element={<Login />} />


          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
