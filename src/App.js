import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Contact from './Components/Contact';
import Destination from './Components/Destination';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Day6 from './Components/Day6';
import Day7 from "./Components/Day7"
import Day8 from './Components/Day8';
import Singers from './Singers';
import Albums from './Albums';



export default function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route path='/destination' element={<Destination />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/day6' element={<Day6 />}></Route>
          <Route path='/day7' element={<Day7 />}></Route>
          <Route path='/day8' element={<Day8 />}></Route>
          <Route path='/singers' element={<Singers />}></Route>
          <Route path='/albums' element={<Albums />}></Route>
        </Routes>
      </div>
    </>
  )
}
