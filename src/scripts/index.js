import { addTask, toggleBorder, formatDate, validateFields, getHighlightOptions, toggleBackground } from './utils.js';
import { Errors, NumberType } from './constans.js';
import { showToast } from './toast.js';
import { cacheTodos, getCachedTodos } from './todos.js';

let todos = getCachedTodos() || [];

const addElementBtn = document.getElementById('addElement');
const todoList = document.querySelector('.content__list');

const evenBtn = document.querySelector('.evenBtn');
const oddBtn = document.querySelector('.oddBtn');
const deleteFirstBtn = document.querySelector('.deleteFirstEl');
const deleteLastBtn = document.querySelector('.deleteLastEl');

const title = document.querySelector('.create__title');
const description = document.querySelector('.create__description');
const date = document.querySelector('.create__date');
const fields = [title, description, date];

todos.forEach((todo) => addTask(todo, todoList));

const highlightEvenOptions = getHighlightOptions(NumberType.Even);
const highlightOddOptions = getHighlightOptions(NumberType.Odd);

const handleHighlight = (options) => {
  const list = todoList.children;

  for (let i = options.startIndex; i < list.length; i += 2) {
    const task = list[i];
    const canToggleTask = !options.state;

    toggleBackground(task, canToggleTask);
  }

  options.state = !options.state;
};

const handleDeleteTodoByPosition = (position) => {
  if (todos.length === 0) return;

  const task = todoList[position + 'ElementChild'];
  task.classList.add('task-delete');

  setTimeout(() => task.remove(), 200);

  if (position === 'first') {
    todos.shift();
  } else {
    todos.pop();
  }

  cacheTodos(todos);
};

const handleAddTodo = () => {
  const { isValid, invalidFields } = validateFields(fields);

  toggleBorder(fields, false);

  if (isValid) {
    const todo = {
      id: Math.random(),
      title: title.value,
      description: description.value,
      date: formatDate(date.value),
    };

    todos.push(todo);
    cacheTodos(todos);
    addTask(todo, todoList);
  } else {
    toggleBorder(invalidFields);
    showToast(Errors.EmptyFields);
  }
};

const handleDeleteTodo = (e) => {
  const elem = e.target;

  if (elem.className !== 'task__delete') return;

  const task = elem.closest('.task');
  const taskId = task.getAttribute('id');

  todos = todos.filter((todo) => todo.id !== Number(taskId));
  cacheTodos(todos);

  task.classList.add('task-delete');

  setTimeout(() => task.remove(), 200);
};

const handleCheckTodo = (e) => {
  const target = e.target;

  if (target.className !== 'task__complete') return;

  const task = target.closest('.task');

  if (target.checked) {
    todoList.append(task);
    task.style.opacity = '0.5';
  } else {
    todoList.prepend(task);
    task.style.opacity = '1';
  }
};

document.addEventListener('click', handleDeleteTodo);
document.addEventListener('click', handleCheckTodo);

addElementBtn.addEventListener('click', handleAddTodo);

deleteFirstBtn.addEventListener('click', () => handleDeleteTodoByPosition('first'));
deleteLastBtn.addEventListener('click', () => handleDeleteTodoByPosition('last'));

evenBtn.addEventListener('click', () => handleHighlight(highlightEvenOptions));
oddBtn.addEventListener('click', () => handleHighlight(highlightOddOptions));
