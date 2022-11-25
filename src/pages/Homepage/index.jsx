import React, {useState, useEffect} from 'react'
import firebaseService from '../../firebaseService'
import './style.less'
import { TodoForm } from './todoForm'
import { useInput } from '../../hooks/useInput'
import { TodoList } from './todoList'
import dayjs from 'dayjs'

export const Homepage = () => {
  const dateNow = dayjs().format('YYYY-MM-DD')
  const [todos, setTodos] = useState([{loading: 'loading', id: 1}])
  const title = useInput('')
  const last_date = useInput(dateNow)

  useEffect(() => {
    firebaseService.getTodos(setTodos)
  }, [])

  const addTask = async () => {
    await firebaseService.addTask({
      title: title.value,
      last_date: last_date.value
    })
    title.setValue('')
    last_date.setValue(dateNow)
  }

  return (
    <div id='todos'>
      <TodoForm 
        title={title} 
        last_date={last_date}
        onSubmit={addTask} 
      />
      {todos.length && todos[0].loading
        ? 
        <div>Loading...</div>
        :
        <TodoList todos={todos}/>
      }
    </div>
  )
}
