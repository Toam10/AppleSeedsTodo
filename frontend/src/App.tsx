import React from 'react';
import './App.css';
import './Screens/GlobalComponents/Navbar/Navbar';
import Navbar from './Screens/GlobalComponents/Navbar/Navbar';
import Backlog from './Screens/Backlog/Backlog';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Backlog />
    </div>
  );
}

export default App;
