import { useState } from 'react'
import './App.css'
import Home from "./pages/home/Home";
import Mac from "./pages/mac/Mac";
import Wheretobuy from "./pages/wtb/Wheretobuy";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/> 
      <Route path="/mac" element={<Mac />}/> 
      <Route path="/Wheretobuy" element={<Wheretobuy />}/> 
    </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
