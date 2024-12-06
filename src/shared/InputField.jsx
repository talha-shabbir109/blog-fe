import React from 'react';

function InputField({ type = null, id = null, placeholder = null, onChange = null, name = null }) {
  return (
    <input
      type={type}
      className='form-control text-white bg-dark email-input'
      id={id}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
    />
  );
}

export default InputField;
