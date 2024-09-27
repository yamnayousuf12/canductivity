import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import Footer from './components/Footer';
import './App.css';
// import Readiness from './components/Readiness'; // Create this component
// import Opportunities from './components/Opportunities'; // Create this component
// import Success from './components/Success'; // Create this component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        {/* <Route path="/readiness" element={<Readiness />} /> */}
        {/* <Route path="/opportunities" element={<Opportunities />} /> */}
        {/* <Route path="/success" element={<Success />} /> */}
     
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

