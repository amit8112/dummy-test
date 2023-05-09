import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import Header from './components/Header';
import Home from './Pages/Home';
import Footer from './components/Footer';
import About from './Pages/About';
import Service from './Pages/Service'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        {/* <Route path='/contact' element={< />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
