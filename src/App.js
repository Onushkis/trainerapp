import {BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "./home/Home";
import Search from "./search/Search";
import MySchedule from "./mySchedule/MySchedule";



import NotFound from "./NotFound";
import './App.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="search" element={<Search />}/>
      <Route path="mySchedule" element={<MySchedule />}/>




<Route path="*" element={<NotFound />} />
      </Routes>
      </BrowserRouter>
      
      
      
      
    </div>
  );
}

export default App;
