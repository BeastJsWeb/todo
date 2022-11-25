import { 
  collection, doc, addDoc, deleteDoc, onSnapshot, updateDoc
} from "firebase/firestore"; 
import { db, storage } from "."
import { uploadBytes, ref, listAll, getDownloadURL } from "firebase/storage"

export default class firebaseService {
  static getTodos(callback) {
    try {
      onSnapshot(collection(db, "todos"), snapshot => {
        const res = snapshot.docs.map(doc => ({
          id: doc.id, 
          ...doc.data()
        }))
        callback(res)
      })
    } catch(e) {
      console.log(e)
    }
  }

  static getOne(id, callback) {
    try {
      onSnapshot(doc(db, "todos", id), doc => 
        callback({
          id: doc.id, 
          ...doc.data()
        })
      )
    } catch(e) {
      console.log(e)
    }
  }

  static async addTask(body) {
    await addDoc(collection(db, "todos"), body)
  }

  static async removeTask(id) {
    try {
      await deleteDoc(doc(db, "todos", id))
    } catch(e) {
      console.log(e)
    }
  }

  static async editTask(id, body) {
    try {
      const todosRef = doc(db, "todos", id);
      await updateDoc(todosRef, body)
    } catch(e) {
      console.log(e)
    }
  }

  static getAllFiles(id, callback) {
    try {
      listAll(ref(storage, `files/${id}/`))
      .then(res => {
        res.items.map(item => 
          getDownloadURL(item)
          .then(url => {
            callback(prev => {
              const duplicateUrl = prev.find(file => file === url)
              if (!prev.length) return [url]
              if (duplicateUrl) return [...prev]
              return [...prev, url]
            })
          })
        )
      })
    } catch(e) {
      console.log(e)
    }
  }

  static addFiles(file, id, callback) {
    try {
      if (!file.name) return
      const storageRef = ref(storage, `files/${id}/${file.name}`)
      uploadBytes(storageRef, file)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
        .then(url => callback(prev => [...prev, url]))
      })
    } catch(e) {
      console.log(e)
    }
  }
}