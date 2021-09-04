import React from 'react';
import ReactDOM from 'react-dom';

const CowEntry = ({cow, handleClick, cowSelected}) => (
  <div className = 'cow'>
    <p className = 'name' ><a href="#" onClick={() => handleClick(cow)}> {cow.name} </a></p>
    <p className = 'description hidden'> {cow.description} </p>
  </div>
)

export default CowEntry;