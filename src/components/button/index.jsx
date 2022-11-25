import React from 'react'
import './style.less'

export const Button = ({children, ...props}) => {
  return (
    <button 
      {...props}
      className='btn'
    >
      {children}
    </button>
  )
}
