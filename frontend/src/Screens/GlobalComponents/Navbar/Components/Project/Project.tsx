import React from 'react';
import ActiveMode from '../ActiveMode/ActiveMode';
import './Project.css';
import PageDesign from '../PageDesign/PageDesign';
import Navbar from '../../Navbar_Active';

function Project() {
  return (
    <div className='Project'>
      <Navbar />
      <PageDesign />
    </div>
  );
}

export default Project;
