import React from 'react';

var Description = (props) => {

  if (props.cow === null) {
    return (
      <div>
      </div>
    );
  } else {
    return (
      <div className={'description'}>
        <p className='title'>{props.cow.name}</p>
        <p className='info'>{props.cow.description}</p>
      </div>
    );;
  }

};

export default Description;
