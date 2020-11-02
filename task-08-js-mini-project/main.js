const main = document.querySelector('main')
const cartCountEl = document.querySelector('#cartCount')
const cartButton = document.querySelector('#cartButton')
const modal = document.querySelector('#modal')
const modalInner = document.querySelector('#modalInner')
let allProds = []

const productComponent = ({ id, name, price, img }) =>
  `<div class="border flex flex-col rounded mx-auto w-full max-w-xs sm:max-w-full">
      <img class="object-cover border-b h-64" src="${ img }">
      <h3 class="m-3 text-lg font-semibold mb-auto">${ name }</h3>
      <p class="mx-3">${ price }$</p>
      <button class="flex m-3 bg-gray-300 justify-between p-2 px-4 rounded" data-btn-id="${ id }">
        <span>Add to cart</span>
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
      </button>
    </div>`

const cartProductComponent = ({ id, price, name, img, cnt }) => 
  `<div class="flex items-center mb-1 border-b">
      <img class="rounded object-cover border-b h-20 w-20" src="${ img }">
      <div class="m-2 mr-auto">
        <h3 class="mb-3 text-lg font-semibold">${ name }</h3>
        <p>${ price }$</p>
        <span>count: <b>${ cnt }</b></span>
      </div>
      <button class="flex bg-red-300 text-red-900 justify-between p-2 px-4 rounded" data-btn-remove-id="${ id }">
        Remove
      </button>
    </div>`

const addToCart = id => {
  const cart = localStorage.getItem('cart')
  let cartProds = []

  if (cart) {
    cartProds = JSON.parse(cart)
    const index = cartProds.findIndex(prod => +prod.id === +id)

    if (index >= 0) cartProds[index].cnt++
    else cartProds.push({ id, cnt: 1 })

  } else cartProds.push({ id, cnt: 1 })
  

  localStorage.setItem('cart', JSON.stringify(cartProds, 2, null))

  updateCart()
}

const removeFromCart = id => {
  const cart = localStorage.getItem('cart')
  let cartProds = []

  if (cart) {
    cartProds = JSON.parse(cart)
    const index = cartProds.findIndex(prod => +prod.id === + id)

    if (index >= 0) {
      if (cartProds[index].cnt > 1) {
        cartProds[index].cnt--
      } else {
        cartProds = cartProds.filter(prod => +prod.id !== +id)
      }

      localStorage.setItem('cart', JSON.stringify(cartProds, 2, null))
      updateCart()
    }  
  }
}

const updateCart = () => {
  const cart = localStorage.getItem('cart')
  let cartProds = []
  let displayProds = []

  if (cart) cartProds = JSON.parse(cart)

  cartCountEl.textContent = cartProds.reduce((cnt, prod) => {
    const displayProd = allProds.find(dataProd => +dataProd.id === +prod.id) 
    displayProds.push(cartProductComponent({ ...displayProd, cnt: prod.cnt }))

    cnt += prod.cnt
    return cnt
  }, 0)

  modalInner.innerHTML = displayProds.join('')
  updateRemoveListeners()
}

const updateRemoveListeners = () => {
  document
    .querySelectorAll('[data-btn-remove-id]')
    .forEach(button => {
      button.addEventListener('click', event => {
        const id = event.currentTarget.getAttribute('data-btn-remove-id')
        removeFromCart(id)
      })
    })
}

fetch('https://my-json-server.typicode.com/adiletttt/neobis/masks')
  .then(res => res.json())
  .then(data => {
    allProds = data
    const productsMarkup = data.map(productComponent).join('')
    main.innerHTML += productsMarkup

    document
      .querySelectorAll('[data-btn-id]')
      .forEach(button =>
        button.addEventListener('click', event => {
          const id = event.currentTarget.getAttribute('data-btn-id')
          addToCart(id)
        }))

    const cart = localStorage.getItem('cart')

    if (cart) {
      cartProds = JSON
        .parse(cart)
        .map(({ id, cnt }) =>
          ({ ...data.find(dataProd => +dataProd.id === +id), cnt}))

      const cartProdsMarkup = cartProds.map(cartProductComponent).join('')
      modalInner.innerHTML = cartProdsMarkup

      updateRemoveListeners()
    }

    updateCart()
  })

cartButton.addEventListener('click', () => modal.classList.remove('hidden'))

modal.addEventListener('click', ({ target }) => {
  if (target.id === 'modal') target.classList.add('hidden')
})


