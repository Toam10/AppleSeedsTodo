import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import PageDesign from './Screens/GlobalComponents/Navbar/Components/PageDesign/PageDesign';
import './Screens/GlobalComponents/Navbar/Navbar_Default';
import Navbar from './Screens/GlobalComponents/Navbar/Navbar_Default';
import Project from './Screens/GlobalComponents/Navbar/Components/Project/Project';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/Project1" element={<Project />} />
        <Route path="/Project2" element={<Project />} />
        <Route path="/Project3" element={<Project />} />
        <Route path="/Project4" element={<Project />} />
        <Route path="/Project5" element={<Project />} />
      </Routes>
      <Navbar />
      <PageDesign />
    </div>
  );
}

export default App;
