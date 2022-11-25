import React from 'react'
import ReactDOM from 'react-dom/client'
import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage"
import './index.less'
import {App} from './App'

const app = initializeApp({
  apiKey: "AIzaSyBZ9wAbfPpnpovbyLgIA9Gx3qy1JbxxjLg",
  authDomain: "react-todo-55ad1.firebaseapp.com",
  projectId: "react-todo-55ad1",
  storageBucket: "react-todo-55ad1.appspot.com",
  messagingSenderId: "262844274248",
  appId: "1:262844274248:web:f9e30110ceccad6f446a7d"
})
export const db = getFirestore(app)
export const storage = getStorage(app)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)
