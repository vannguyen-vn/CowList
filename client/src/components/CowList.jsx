import React from 'react';
import ReactDOM from 'react-dom';
import CowEntry from './CowEntry.jsx';

const CowList = ({cows, handleClick, cowSelected}) => {
  return (
    <div className='cowlist'>
      { cows.map((cow, index) => (
        <CowEntry
          cow={cow}
          key = {cow.id}
          handleClick = {handleClick}
          cowSelected = {cowSelected}
        />
      ))}
    </div>
  );
};

export default CowList;