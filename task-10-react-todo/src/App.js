import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Todo from './pages/Todo'
import Home from './pages/Home'
import * as Styled from './styled'

export default function App() {
  return (
    <Router>
      <Styled.Container>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/todos/:id">
            <Todo />
          </Route>
        </Switch>
      </Styled.Container>
    </Router>
  )
}
