import { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from '../axios'
import * as Styled from '../styled'

export default function Todo() {
  const { id } = useParams()
  const [title, setTitle] = useState('')
  const history = useHistory()

  useEffect(() => {
    axios.get(`/todos/${id}`).then(({ data }) => setTitle(data.title))
  }, [id])

  const updateTask = () => {
    if (title.trim())
      axios.put(`/todos/${id}`, { title }).then(() => {
        history.push('/')
      })
  }

  return (
    <Styled.Box column>
      <Styled.TextInput
        value={title}
        onChange={event => setTitle(event.target.value)}
        mb
      />
      <Styled.Box>
        <Styled.Button mr onClick={updateTask}>
          Update
        </Styled.Button>
        <Styled.Button gray onClick={() => history.goBack()}>
          Cancel
        </Styled.Button>
      </Styled.Box>
    </Styled.Box>
  )
}
