import React from 'react';
import ReactDOM from 'react-dom';

const CowEntry = ({cow}) => (
  <div className = 'cow'>
    <p className = 'name'> {cow.name} </p>
    <p className = 'description hidden'> {cow.description} </p>
  </div>
)

export default CowEntry;