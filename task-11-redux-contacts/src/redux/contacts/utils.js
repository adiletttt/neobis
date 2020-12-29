export function save(state) {
  localStorage.setItem('contacts', JSON.stringify(state))
}

export function sortContacts(contacts, direction = 'ASC') {
  return contacts.slice().sort((firstItem, secondItem) => {
    const [nameLeft, nameRight] = [firstItem, secondItem].map(({ firstName }) =>
      firstName.toLowerCase()
    )

    if (direction === 'ASC')
      return nameLeft < nameRight ? -1 : nameLeft > nameRight ? 1 : 0

    return nameLeft > nameRight ? -1 : nameLeft < nameRight ? 1 : 0
  })
}

export function initState(state) {
  let initialState = state
  const contacts = localStorage.getItem('contacts')

  if (contacts) initialState = JSON.parse(contacts)

  return initialState
}
