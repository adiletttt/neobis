import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { toFav } from '../redux/contacts'
import * as Styled from './styled'

export default function Contact({ contact }) {
  const contacts = useSelector(state => state.contacts)
  const dispatch = useDispatch()
  const history = useHistory()

  return (
    <Styled.Card key={contact.id} className="box__item">
      <img src={contact.image} alt="avatar" />

      <div className="card__inner">
        <div className="card__heading">
          <p className="card__title">
            {contact.firstName} {contact.lastName}
          </p>
          <Styled.Icon
            width="17px"
            height="15px"
            name={
              contacts.favs.find(fav => fav.id === contact.id)
                ? 'heart--filled'
                : 'heart'
            }
            active
            onClick={() => dispatch(toFav(contact))}
          />
        </div>

        <div className="card__info">
          <p className="card__detail">
            <Styled.Icon
              width="15px"
              height="15px"
              name="location"
              className="card__icon"
            />
            <span>
              {contact.city}, {contact.country}
            </span>
          </p>
          <p className="card__detail">
            <Styled.Icon
              width="15px"
              height="15px"
              name="phone"
              className="card__icon"
            />
            <span>{contact.phoneNumber}</span>
          </p>
          <p className="card__detail">
            <Styled.Icon
              width="15px"
              height="15px"
              name="web"
              className="card__icon"
            />
            <span>{contact.website}</span>
          </p>
          <p className="card__detail">
            <Styled.Icon
              width="15px"
              height="15px"
              name="mail"
              className="card__icon"
            />
            <span>{contact.email}</span>
          </p>
        </div>

        <button
          onClick={() => history.push(`/${contact.id}`)}
          className="card__button"
        >
          show
        </button>
      </div>
    </Styled.Card>
  )
}
