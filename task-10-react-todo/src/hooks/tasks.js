import { useState, useEffect } from 'react'
import axios from '../axios'

export default function useTasks() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    axios.get('/todos').then(({ data }) => setTasks(data))
  }, [])

  const add = title => {
    if (title.trim())
      axios
        .post('/todos', { title })
        .then(({ data }) => setTasks([...tasks, data]))
  }

  const complete = id => event => {
    const index = tasks.findIndex(task => task.id === id)

    axios
      .put(`/todos/${id}`, { ...tasks[index], completed: event.target.checked })
      .then(({ data }) => {
        const newTasks = tasks.slice()
        const newTask = { ...newTasks[index], completed: data.completed }

        newTasks[index] = newTask

        setTasks(newTasks)
      })
  }

  const remove = id => () => {
    axios
      .delete(`/todos/${id}`)
      .then(() => setTasks(tasks.filter(task => task.id !== id)))
  }

  return [tasks, { add, complete, remove }]
}
