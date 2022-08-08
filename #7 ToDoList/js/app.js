let todoInput // place(input) where user types tasks
let errorInfo // info about lack of task; need to type text
let addBtn // ADD button - adds new elements to list
let ulList // task list, ul tags

let popup // popup
let popupInfo //text in popup, when added empty text
let todoToEdit // edited Todo
let popupInput // input in popup
let popupAddBtn // accept button in popup
let popupCloseBtn // cancel button in popup
// let newTodo // newly added LI, new task

const main = () => {
	prepareDOMEelements()
	prepareDOMevents()
}

const prepareDOMEelements = () => {
	// collecting all elements

	todoInput = document.querySelector('.todo-input')
	errorInfo = document.querySelector('.error-info')
	addBtn = document.querySelector('.btn-add')
	ulList = document.querySelector('.todolist ul')

	popup = document.querySelector('.popup')
	popupInfo = document.querySelector('.popup-info')
	popupInput = document.querySelector('.popup-input')
	popupAddBtn = document.querySelector('.accept')
	popupCloseBtn = document.querySelector('.cancel')
}

const prepareDOMevents = () => {
	// adding listener
	addBtn.addEventListener('click', addNewTodo)
	ulList.addEventListener('click', checkClick)
	popupCloseBtn.addEventListener('click', closePopup)
	popupAddBtn.addEventListener('click', changeTodoText)
	todoInput.addEventListener('keyup', enterKeyCheck)
}

/* nfn
1. create new element (li)
2. adding new element to the ul list
3. function starting on click the button ADD
4.captures input content and moves it to the new li
5. function cannot add empty content to the list
*/

const addNewTodo = () => {
	if (todoInput.value !== '') {
		const newTodo = document.createElement('li')
		newTodo.textContent = todoInput.value
		createToolsArea(newTodo)

		ulList.append(newTodo)

		todoInput.value = ''
		errorInfo.textContent = ''
	} else {
		errorInfo.textContent = 'Type task to do!'
	}
}

const createToolsArea = newTask => {
	const toolsPanel = document.createElement('div')
	toolsPanel.classList.add('tools')
	newTask.append(toolsPanel)

	const completeBtn = document.createElement('button')
	completeBtn.classList.add('complete')
	completeBtn.innerHTML = '<i class="fas fa-check"></i>'

	const editBtn = document.createElement('button')
	editBtn.classList.add('edit')
	editBtn.textContent = 'EDIT'

	const deleteBtn = document.createElement('button')
	deleteBtn.classList.add('delete')
	deleteBtn.innerHTML = '<i class="fas fa-times"></i>'

	toolsPanel.append(completeBtn, editBtn, deleteBtn)
}

const checkClick = e => {
	if (e.target.matches('.complete')) {
		e.target.closest('li').classList.toggle('completed')
		e.target.classList.toggle('completed')
	} else if (e.target.matches('.edit')) {
		editTodo(e)
	} else if (e.target.matches('.delete')) {
		deleteTodo(e)
	}
}

const editTodo = e => {
	todoToEdit = e.target.closest('li')

	popupInput.value = todoToEdit.firstChild.textContent
	popup.style.display = 'flex'
}
const closePopup = () => {
	popup.style.display = 'none'
	popupInfo.textContent = ''
}

const changeTodoText = () => {
	if (popupInput.value !== '') {
		todoToEdit.firstChild.textContent = popupInput.value
		popup.style.display = 'none'
		popupInfo.textContent = ''
	} else {
		popupInfo.textContent = 'You need to type something!'
	}
}

const deleteTodo = e => {
	e.target.closest('li').remove()

	const allTodos = ulList.querySelectorAll('li')

	if (allTodos.length === 0) {
		errorInfo.textContent = 'No Task on the list'
	}
}

const enterKeyCheck = e => {
	if(e.key === 'Enter') {
		addNewTodo()
	}
}

document.addEventListener('DOMContentLoaded', main)
