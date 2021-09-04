import React from 'react';
import ReactDOM from 'react-dom';
import CowEntry from './CowEntry.jsx';

const CowList = ({cows, handleClick}) => {
  return (
    <div className='cowlist'>
      { cows.map((cow, index) => (
        <CowEntry
          cow={cow}
          key = {cow.id}
          handleClick = {handleClick}
        />
      ))}
    </div>
  );
};

export default CowList;