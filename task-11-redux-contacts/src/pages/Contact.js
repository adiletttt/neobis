import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toFav, update } from '../redux/contacts'
import * as Styled from '../components/styled'

export default function Contact({ match }) {
  const dispatch = useDispatch()
  const contacts = useSelector(state => state.contacts)
  const contact = contacts.originalItems.find(
    contact => contact.id === +match.params.id
  )
  const [form, setForm] = useState([
    {
      label: 'First Name',
      value: contact.firstName,
      id: 'firstName'
    },
    {
      label: 'Last Name',
      value: contact.lastName,
      id: 'lastName'
    },
    {
      label: 'City',
      value: contact.city,
      id: 'city'
    },
    {
      label: 'Country',
      value: contact.country,
      id: 'country'
    },
    {
      label: 'Phone Number',
      value: contact.phoneNumber,
      id: 'phoneNumber'
    },
    {
      label: 'Email',
      value: contact.email,
      id: 'email'
    },
    {
      label: 'Website',
      value: contact.website,
      id: 'website'
    },
  ])

  const formHandler = index => event => {
    const newForm = form.slice()
    newForm[index].value = event.target.value
    setForm(newForm)
  }

  const submit = event => {
    event.preventDefault()

    const newItem = form.reduce((result, item) => {
      result[item.id] = item.value
      return result
    }, {})

    newItem.id = contact.id
    newItem.image = contact.image

    dispatch(update(newItem))
  }

  return (
    <Styled.Contact>
      <div className="contact__heading">
        <img src={contact.image} alt="avatar" width="228" height="146" />
        <Styled.Icon
          name="heart--filled"
          width="70px"
          height="64px"
          active={contacts.favs.find(({ id }) => id === contact.id)}
          onClick={() => dispatch(toFav(contact))}
        />
      </div>

      <Styled.Form onSubmit={submit}>
        {form.map(({ label, value }, index) => {
          return (
            <label key={label} className="field">
              <span>{label}:</span>
              <input value={value} type={label === 'Email' ? 'email' : 'text'} onChange={formHandler(index)} />
            </label>
          )
        })}

        <div className="field">
          <button type="submit">Save Contact</button>
        </div>
      </Styled.Form>
    </Styled.Contact>
  )
}
