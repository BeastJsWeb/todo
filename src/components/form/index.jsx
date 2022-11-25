import React from 'react'
import './style.less'

export const Form = ({children, onSubmit, props}) => {
  const handleSubmit = e => {
    e.preventDefault()
    onSubmit && onSubmit()
  }
  
  return (
    <form 
      onSubmit={handleSubmit} 
      {...props} 
      className='form'
    >
      {children}
    </form>
  )
}
