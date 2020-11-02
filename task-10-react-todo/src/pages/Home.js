import { useState } from 'react'
import Task from '../components/Task'
import useTasks from '../hooks/tasks'
import * as Styled from '../styled'

export const TaskList = ({ tasks, complete, remove }) =>
  tasks.map(Task, { complete, remove })

export default function Home() {
  const [tasks, { add, complete, remove }] = useTasks()
  const [title, setTitle] = useState('')

  const addTask = () => {
    add(title)
    setTitle('')
  }

  return (
    <>
      <Styled.Box flex mb>
        <Styled.TextInput
          placeholder="New task"
          value={title}
          onChange={event => setTitle(event.target.value)}
          mr
        />
        <Styled.Button onClick={addTask}>Add</Styled.Button>
      </Styled.Box>
      <TaskList {...{ tasks, complete, remove }} />
    </>
  )
}
