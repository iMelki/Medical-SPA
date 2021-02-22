import React from 'react';

const InputValue = ({ name, rangeFrom, rangeTo , onInputChange}) => {
  return (
    <div className='pa2'>
      {name} ({rangeFrom}-{rangeTo}) : 
      <input
        className='pa3 ba b--green bg-lightest-blue'
        id={name}
        type='number'
        min={rangeFrom}
        max={rangeTo}
        onChange={onInputChange}
        //placeholder=''
      />
    </div>
  );
}

export default InputValue;