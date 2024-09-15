import { useState } from 'react'
import "./index.css"
import Home from './Pages/Home';
import Gallery from './Pages/Gallery';
import Breed from './Pages/Breed';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';



function App() {

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/breed' element={<Breed/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
