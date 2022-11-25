import React from 'react'
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'
import './style.less'
/**
 * tasks array
 * @param {[
 *  id: string,
 *  title: string,
 *  done: boolean,
 *  last_date: string
 * ]} todos 
 */
export const TodoList = ({todos}) => {
  const dateNow = dayjs().format('YYYY-MM-DD')
  const taskIsDone = (todo) => todo.done ? 'todo-done' : taskIsExpired(todo)
  const taskIsExpired = (todo) => todo.last_date >= dateNow ? '' : 'todo-expired'

  return (
    <ul id='todo-list'>
      {todos.map(todo =>
        <li 
          key={todo.id}
          className={taskIsDone(todo)}
        >
          <Link to={`todo/${todo.id}`}>
            {todo.title}
            {todo.done
              ? <span>completed</span>
              : <span>
                  {todo.last_date >= dateNow ? 'active' : 'expired'}
                </span>
            }
          </Link>
        </li> 
      )}
    </ul>
  )
}
