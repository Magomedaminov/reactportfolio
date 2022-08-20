import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import Header from './components/header/Header';
import Home from './components/home/Home';
import Education from './components/education/Education';
import Portfolio from './components/portfolio/Portfolio';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <div className='App'>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/education' element={<Education/>}/>  
        <Route exact path='/portfolio' element={<Portfolio/>}/>
      </Routes>
      <Footer/>
      </div>
    </Router>
  )
}

export default App;
