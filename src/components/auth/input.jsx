import React from 'react'

const Input = ({name, value, onChange,type}) => {

  return (
    <input type={type} value={value} name={name} onChange={onChange}   className="form-control mt-4"/>
  )
}
export default Input;
