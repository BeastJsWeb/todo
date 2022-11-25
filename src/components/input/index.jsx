import React from 'react'
import {DebounceInput} from 'react-debounce-input'
import './style.less'

export const Input = ({value, onChange, placeholder, type}) => {
  return (
    <DebounceInput
      className='input'
      value={value} 
      onChange={onChange}
      placeholder={placeholder}
      required
      maxLength={30}
      type={type}
      debounceTimeout={300}
    />
  )
}
