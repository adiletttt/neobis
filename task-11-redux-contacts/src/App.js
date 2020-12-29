import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import ContactList from './pages/ContactList'
import Contact from './pages/Contact'
import { Header } from './components/styled'

export default function App() {
  return (
    <Router>
      <Header>
        <Link to="/">
          <img src="/logo.svg" alt="Contacts" />
        </Link>
      </Header>
      <Switch>
        <Route path="/" component={ContactList} exact />
        <Route path="/:id" component={Contact} />
      </Switch>
    </Router>
  )
}
