import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import PageDesign from './Screens/GlobalComponents/Navbar/Components/PageDesign/PageDesign';
import './Screens/GlobalComponents/Navbar/Navbar';
import Navbar from './Screens/GlobalComponents/Navbar/Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <PageDesign />
    </div>
  );
}

export default App;
