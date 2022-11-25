import React from 'react'
import {
  RouterProvider, 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements
} from 'react-router-dom'
import { Homepage } from './pages/Homepage/index'
import { Todo } from './pages/Todo'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/'>
    <Route index element={<Homepage/>}/>
    <Route path='todo/:id' element={<Todo/>} />
  </Route>
))

export const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

