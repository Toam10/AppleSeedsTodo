import React from 'react';
import './Project.css';
import Navbar from '../GlobalComponents/Navbar/Navbar_Active';
import Backlog from './Backlog/Backlog';

function Project() {
  return (
    <div className='Project'>
      <Navbar />
      <Backlog />
    </div>
  );
}

export default Project;
