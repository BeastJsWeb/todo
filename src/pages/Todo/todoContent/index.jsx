import React, {useState, useEffect} from 'react'
import { Button } from '../../../components/button'
import './style.less'
import { Input } from '../../../components/input'
import { useInput, useInputFile } from '../../../hooks/useInput'
import firebaseService from '../../../firebaseService'
/**
 * task
 * @param {{
 *  id: string,
 *  title: string,
 *  done: boolean,
 *  last_date: string
 * }} todo
 */
export const TodoContent = ({todo}) => {
  const description = useInput(todo.description)
  const last_date = useInput(todo.last_date)
  const files = useInputFile({})
  const [listFiles, setListFiles] = useState([])

  const editDescription = async () => {
    await firebaseService.editTask(todo.id, {description: description.value})
  }
  const editLastDate = async () => {
    await firebaseService.editTask(todo.id, {last_date: last_date.value})
  }
  const editProgress = async () => {
    await firebaseService.editTask(todo.id, {done: todo.done ? false : true})
  }
  const addFiles = () => {
    firebaseService.addFiles(files.value, todo.id, setListFiles)
  }

  useEffect(() => {
    firebaseService.getAllFiles(todo.id, setListFiles)
  }, [todo.id])

  return (
    <ul id='todo-content'>
      <li>
        <span>
          Description: 
          <Button onClick={editDescription}>Save</Button>
        </span>
        <Input {...description}/>
      </li>
      <li>
        <span>
          Date of completion: 
          <Button onClick={editLastDate}>Save</Button>
        </span>
        <Input {...last_date} type='date'/>
      </li>
      <li> 
        <span>
          Files: 
          <Button onClick={addFiles}>Load</Button>
        </span>
        <input type='file' onChange={files.onChange} />
        {listFiles.map((item, i) =>
          <a href={item} key={i} target='blank'>file {i + 1}</a>
        )}
      </li>
      <li>
        <Button onClick={editProgress}>
          {todo.done
            ? <>Restore task progress</>
            : <>End task progress</>
          }
        </Button>
      </li>
    </ul>
  )
}
