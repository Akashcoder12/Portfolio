import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Footer from './components/Footer';


export default function App() {
  return (
  
     <BrowserRouter>
      <Navbar/>
       <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='/About' element={<About/>}></Route>
         <Route path='/Projects' element={<Projects/>}></Route>
         <Route path='/Skills' element={<Skills/>}></Route>
         <Route path='/Contact' element={<Contact/>}></Route>
       </Routes>

       <Footer/>
     </BrowserRouter> 
    
  )
}
