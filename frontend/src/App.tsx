import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import PageDesign from './Screens/Welcome-page/PageDesign/PageDesign';
import './Screens/GlobalComponents/Navbar/Navbar_Default';
// import Navbar from './Screens/GlobalComponents/Navbar/Navbar_Default';
import Navbar from './Screens/GlobalComponents/Navbar/Navbar_Active';
import Project from './Screens/Project/Project';
import Backlog from './Screens/Project/Backlog/Backlog';

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
      <Backlog />
      {/* <PageDesign /> */}
    </div>
  );
}

export default App;
