import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import './App.scss';

import ParticleBackground from './components/particles/particleBackground';
import Header from './components/header';
import Home from './containers/home';
import About from './containers/about';
import Skills from './containers/skills';
import Portfolio from './containers/portfolio';
import Contact from './containers/contact';
import Footer from './components/footer';


function App() {

  const location = useLocation();

  const renderParticleJsInHomePage = location.pathname === "/";


  return (
    <div className='App'>
      {renderParticleJsInHomePage && (
        <ParticleBackground/>
      )}
      
      <Header/>
      <div className='App__main-page-content'>
        <Routes>
          <Route index path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/skills' element={<Skills/>}/>  
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
      {/* <Footer/> */}
    </div>
  )
}

export default App;
