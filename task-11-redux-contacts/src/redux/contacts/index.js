import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { save, sortContacts, initState } from './utils'

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initState({
    sort: 'ASC',
    fav: false,
    favs: [],
    items: [],
    originalItems: [],
  }),
  reducers: {
    set(state, action) {
      state.originalItems = action.payload
      state.items = sortContacts(action.payload)
      save(state)
    },

    sort(state, action) {
      if (state.sort === action.payload) return
      state.sort = action.payload
      state.items = sortContacts(state.items, action.payload)
      save(state)
    },

    search(state, action) {
      const sought = action.payload.toLowerCase()
      const usersArr = state.fav
        ? sortContacts(state.favs)
        : sortContacts(state.originalItems, state.sort)

      state.items = usersArr.filter(
        item =>
          item.firstName.toLowerCase().includes(sought) ||
          item.lastName.toLowerCase().includes(sought)
      )
    },

    toFav(state, action) {
      const index = state.favs.findIndex(fav => fav.id === action.payload.id)

      if (index > -1) {
        state.favs.splice(index, 1)
        if (state.fav) state.items.splice(index, 1)
      } else state.favs.push(action.payload)

      save(state)
    },

    showFavs(state, action) {
      state.fav = action.payload

      if (action.payload) state.items = state.favs
      else state.items = sortContacts(state.originalItems, state.sort)

      save(state)
    },

    update(state, action) {
      const index = state.originalItems.findIndex(item => item.id === action.payload.id)

      if (index > -1) {
        state.originalItems.splice(index, 1, action.payload)

        const itemIndex = state.items.findIndex(item => item.id === action.payload.id)

        if (itemIndex > -1) state.items[itemIndex] = action.payload
      }

      save(state)
      alert('Saved')
    }
  },
})

export const { set, sort, search, toFav, showFavs, update } = contactsSlice.actions

export const fetchContacts = () => dispatch => {
  if (!localStorage.getItem('contacts'))
    axios
      .get('https://my-json-server.typicode.com/RomanChasovitin/demo-api/users')
      .then(res => dispatch(set(res.data.data)))
      .catch(console.error)
}

export default contactsSlice.reducer
