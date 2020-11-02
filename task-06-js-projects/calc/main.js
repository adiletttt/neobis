const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const prevEl = document.querySelector('[data-prev]')
const currentEl = document.querySelector('[data-current]')

let prev, current, operation

const clear = () => {
  prev = ''
  current = ''
  operation = undefined
}

const del = () => {
  current = current.toString().slice(0, -1)
}

const appendNumber = num => {
  if (num === '.' && current.includes('.')) return
  current = current.toString() + num.toString()
}

const formatNum = num => {
  const numString = num.toString()
  const integers = parseFloat(numString.split('.')[0])
  const decimals = numString.split('.')[1]
  
  let displayNum

  if (isNaN(integers)) displayNum = ''
  else displayNum = integers.toLocaleString('en', { maximumFractionDigits: 0 })

  if (decimals != null) return `${displayNum}.${decimals}`
  
  return displayNum
}

const render = () => {
  currentEl.textContent = formatNum(current)

  if (operation) prevEl.textContent = `${formatNum(prev)} ${operation}`
  else prevEl.textContent = ''
}

const compute = () => {
  let computation

  const prevOperand = parseFloat(prev)
  const currentOperand = parseFloat(current)

  if (isNaN(prev) || isNaN(current)) return

  switch (operation) {
    case '+': computation = prevOperand + currentOperand; break;
    case '-': computation = prevOperand - currentOperand; break;
    case '*': computation = prevOperand * currentOperand; break;
    case '/': computation = prevOperand / currentOperand; break;
    default: return
  }

  current = computation
  operation = undefined
  prev = ''
}

const chooseOperation = (choosedOperation) => {
  if (current === '') return

  if (prev !== '') {
    compute()
  }

  operation = choosedOperation
  prev = current
  current = ''
}

calc.addEventListener('click', ({ target: button }) => {
  if (button.tagName === 'BUTTON') {
    const { dataset } = button

    if ('number' in dataset) appendNumber(button.textContent)
    if ('operation' in dataset) chooseOperation(button.textContent)
    if ('equals' in dataset) compute()
    if ('allClear' in dataset) clear()
    if ('delete' in dataset) del()

    render()
  }
})

clear()
