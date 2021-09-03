import React from 'react';
import ReactDOM from 'react-dom';
import CowEntry from './CowEntry.jsx';

const CowList = (props) => {
  return (
    <div className='cowlist'>
      { props.cows.map((cow, index) => (
        <CowEntry
          cow={cow}
          key = {cow.id}
        />
      ))}
    </div>
  );
};

export default CowList;