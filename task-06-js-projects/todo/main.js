let tab = 'all'
let tasks = [
  { title: 'HTML/CSS', completed: false },
  { title: 'JS', completed: false },
  { title: 'TailwindCSS ❤️', completed: false }
]

const taskComponent = ({ title, completed }, idx) =>
  `<li class="border-b p-2 flex justify-between items-center" data-idx="${ idx }">
        <span class="${ completed ? 'line-through' : ''}">${ title }</span>

        <div class="flex">
          <button class="text-yellow-900 bg-yellow-500 p-1 mr-2 rounded" data-attr="edit">
            <svg class="w-6 h-6 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
          </button>

          <button class="text-green-200 bg-green-600 p-1 mr-2 rounded" data-attr="check">
            <svg class="w-6 h-6 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </button>

          <button class="text-red-200 bg-red-600 p-1 rounded" data-attr="delete">
            <svg class="w-6 h-6 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
          </button>
        </div>
      </li>`

const editableTaskComponent = ({ title, completed }, idx) =>
  `<li data-idx="${idx}">
        <div class="p-2 border-b flex items-center">
          <input value="${ title }" class="border rounded mr-auto py-1 px-2">
          <button class="bg-green-500 p-1 rounded mr-2 text-green-200" data-attr="save">
            <svg class="w-4 h-4 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
          </button>
          <button class="bg-red-600 p-1 rounded text-red-200" data-attr="cancel">
            <svg class="w-4 h-4 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
      </li>`

const render = (tasksList = tasks) => 
  list.innerHTML = tasksList.map((task, index) => {
    if (task.edit) return editableTaskComponent(task, index)
    return taskComponent(task, index)
  }).join('')

render()

list.addEventListener('click', event => {
  if (event.target.tagName === 'BUTTON') {
    const idx = event.target.parentElement.parentElement.dataset.idx

    switch (event.target.dataset.attr) {
      case 'edit': {
        tasks[idx].edit = true
        render()
      }; break;

      case 'check': {
        const completed = tasks[idx].completed
        tasks[idx].completed = !completed
        render()
      }; break;

      case 'delete': {
        tasks.splice(idx, 1)
        render()
      }; break;

      case 'save': {
        const newValue = event.target.parentElement.firstElementChild.value.trim()

        if (newValue) {
          tasks[idx].title = newValue
          tasks[idx].edit = false
          render()
        }
      }; break;

      case 'cancel': {
        tasks[idx].edit = false
        render()
      }; break;

      default: throw new Error('Something went wrong');
    }

    resetTabs()
  }
})

searchInput.addEventListener('input', event => {
  const input = event.target.value.trim().toLowerCase()

  if (input) {
    const filtredTasks = tasks.filter(task => task.title.toLowerCase().includes(input))
    render(filtredTasks)
  } else render()

  resetTabs()
})

addButton.addEventListener('click', () => {
  const input = newTaskInput.value.trim()

  if (input) {
    tasks.push({ title: input, completed: false})
    newTaskInput.value = ''
    render()
    resetTabs()
  }
})

const cleanTabs = () => {
  const buttons = document.querySelectorAll('.tab-button') 

  buttons.forEach(button => {
    button.classList.remove('border-b-2')
    button.classList.remove('border-indigo-500')
    button.classList.remove('text-indigo-700')
  })
}

const resetTabs = () => {
  cleanTabs()

  const button = document.querySelector('[data-attr="all"]') 

  button.classList.add('border-b-2')
  button.classList.add('border-indigo-500')
  button.classList.add('text-indigo-700')
}

tabs.addEventListener('click', event => {
  if (event.target.tagName === 'BUTTON') {
    switch (event.target.dataset.attr) {
      case 'all': {
        render()
      }; break;

      case 'completed': {
        const filtredTasks = tasks.filter(task => task.completed)
        render(filtredTasks)
      }; break;

      default: throw new Error('Something went wrong');
    }

    cleanTabs()

    event.target.classList.toggle('border-b-2')
    event.target.classList.toggle('border-indigo-500')
    event.target.classList.toggle('text-indigo-700')
  }
})

