import React from 'react'
import { Button } from '../../../components/button'
import { Form } from '../../../components/form'
import { Input } from '../../../components/input'
/**
 * 
 * @param {() => void} onSubmit 
 * async function add new task
 * @param {() => void} title
 * hook useInput
 * @param {() => void} last_date
 * hook useInput
 */
export const TodoForm = ({onSubmit, title, last_date}) => {
  return (
    <Form onSubmit={onSubmit}>
      <div>Add new task</div>
      <Input 
        {...title}
        placeholder='Title...'
      />
      <Input {...last_date} type='date'/>
      <Button>Add</Button>
    </Form>
  )
}
