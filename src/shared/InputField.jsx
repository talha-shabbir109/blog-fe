import React from 'react';

function InputField({ type = "text", placeholder = "Enter text"}) {
  return (
    <input
      type={type}
      className='form-control text-white bg-dark email-input'
      id='inputField'
      placeholder={placeholder}
    />
  );
}

export default InputField;
