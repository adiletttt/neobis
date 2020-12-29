import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { sort, search, showFavs } from '../redux/contacts'
import Contact from '../components/Contact'
import * as Styled from '../components/styled'

export default function ContactList() {
  const contacts = useSelector(state => state.contacts)
  const dispatch = useDispatch()
  const [searchInput, setSearchInput] = useState('')

  const handleSearchInputChange = event => {
    const { value } = event.target

    setSearchInput(value)
    dispatch(search(value))
  }

  return (
    <>
      <Styled.Container>
        <Styled.Box flex justify-between mb-md>
          <Styled.Input
            type="text"
            onChange={handleSearchInputChange}
            value={searchInput}
            placeholder="type to search..."
            mb-sm
            mr-sm
          />

          <div>
            <Styled.Icon
              name="heart--filled"
              active={contacts.fav}
              onClick={() => {
                setSearchInput('')
                dispatch(showFavs(!contacts.fav))
              }}
              mr-sm
            />
            <Styled.Icon
              active={contacts.sort === 'ASC'}
              name="sort-asc"
              onClick={() => {
                dispatch(sort('ASC'))
              }}
              mr-sm
            />
            <Styled.Icon
              active={contacts.sort === 'DESC'}
              name="sort-desc"
              onClick={() => dispatch(sort('DESC'))}
            />
          </div>
        </Styled.Box>

        <Styled.Box grid>
          {contacts.items.map(contact => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </Styled.Box>
      </Styled.Container>
    </>
  )
}
