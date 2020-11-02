import { Link } from 'react-router-dom'
import * as Styled from '../styled'

export default function Task({ id, title, completed = false }) {
  return (
    <Styled.TaskBox key={id}>
      <Link to={`/todos/${id}`}>
        <Styled.Title mr>{title}</Styled.Title>
      </Link>
      <Styled.Button red ml-auto mr onClick={this.remove(id)}>
        Remove
      </Styled.Button>
      <Styled.Checkbox
        type="checkbox"
        checked={completed}
        onChange={this.complete(id)}
      />
    </Styled.TaskBox>
  )
}
