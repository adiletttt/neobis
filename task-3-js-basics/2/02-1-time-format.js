const date = new Date()

const h = date.toLocaleTimeString('en-US').match(/^(\d+)/)[1]
const m = date.toLocaleTimeString('en-US').match(/:(\d+)/)[1]
const s = date.toLocaleTimeString('en-US').match(/(\d+) /)[1]
const f = date.toLocaleTimeString().split(' ')[1]
const day = date.toLocaleString('en-US', { weekday: 'long' }) 

const time = `${h} ${f} : ${m} : ${s}`

console.log(`Today is : ${day}.\nCurrent time is : ${time}`)
