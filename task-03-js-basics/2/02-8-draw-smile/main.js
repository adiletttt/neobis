const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

canvas.height = window.innerHeight
canvas.width = window.innerWidth

let mouseDown = false

const start = event => {
  mouseDown = true
  draw(event)
}

const end = () => {
  mouseDown = false
  ctx.beginPath()
}

const draw = ({ clientX: x, clientY: y }) => {
  if (!mouseDown) return 

  ctx.lineWidth = 15
  ctx.lineCap = 'round'
  ctx.lineTo(x, y)
  ctx.stroke()
}

canvas.addEventListener('mousedown', start)
canvas.addEventListener('mouseup', end)
canvas.addEventListener('mousemove', draw)
