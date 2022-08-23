import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import Header from './components/header';
import Home from './containers/home';
import About from './containers/about';
import Skills from './containers/skills';
import Portfolio from './containers/portfolio';
import Contact from './containers/contact';
import Footer from './components/footer';


function App() {
  return (
    <div className='App'>
    <Header/>
    <Routes>
      <Route index path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/skills' element={<Skills/>}/>  
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
    </div>
  )
}

export default App;
