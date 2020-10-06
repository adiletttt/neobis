const burger = document.querySelector('.burger')
const nav = document.querySelector('.nav')
const overlay = document.querySelector('.overlay')

burger.addEventListener('click', () => {
  overlay.classList.toggle('overlay--active')
  nav.classList.toggle('nav--active')
  burger.classList.toggle('burger--active')
})
