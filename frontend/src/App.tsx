import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';
import PageDesign from './Screens/GlobalComponents/Navbar/Components/PageDesign/PageDesign';
import './Screens/GlobalComponents/Navbar/Navbar';
import Navbar from './Screens/GlobalComponents/Navbar/Navbar';
import PageBoard from './Screens/GlobalComponents/Navbar/Components/PageBoard/PageBoard';

function App() {
  return (
    <div className='App'>
      <Router>
      <Navbar />
      
      <Routes>

      <Route path="/" element={<PageDesign />} />
      <Route path="board/:idProject" element={<PageBoard />} />


      </Routes>
      </Router>
    </div>
  );
}

export default App;
