import React, {useState, useEffect} from 'react'
import { Navigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import './style.less'
import firebaseService from '../../firebaseService'
import { Button } from '../../components/button'
import { TodoContent } from './todoContent'
import { HomeLink } from '../../components/homeLink'

export const Todo = () => {
  const {id} = useParams()
  const [todo, setTodo] = useState({})
  const [isDeleted, setIsDeleted] = useState(false)

  useEffect(() => {
    firebaseService.getOne(id, setTodo)
  }, [id])

  const removeTask = async () => {
    await firebaseService.removeTask(id)
    setIsDeleted(true)
  }

  if (isDeleted) return <Navigate to='/'/>
  
  return (
    <div id='todo'>
      <HomeLink/>
      {todo.message &&
        <p>{todo.message}</p>
      }
      {todo.title && <>
        <h3>{todo.title}</h3>
        <TodoContent todo={todo}/>
        <Button onClick={removeTask}>Remove task</Button>
      </>}
    </div>
  )
}