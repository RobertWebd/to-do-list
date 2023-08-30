import { addTask, toggleBorder, formatDate, validateFields, handleHighlightEven, handleHighlightOdd, handleDeleteElem } from './utils.js';
import { Errors } from './constans.js';
import { showToast } from './toast.js';
import { cacheTodos, getCachedTodos } from './todos.js';

let todos = getCachedTodos() || [];
const addElementBtn = document.getElementById('addElement');

todos.forEach(addTask);

addElementBtn.addEventListener('click', () => {
  const title = document.querySelector('.create__title');
  const description = document.querySelector('.create__description');
  const date = document.querySelector('.create__date');
  const fields = [title, description, date];

  toggleBorder(fields, false);

  const { isValid, invalidFields } = validateFields(fields);

  if (isValid) {
    const todo = {
      id: Math.random(),
      title: title.value,
      description: description.value,
      date: formatDate(date.value),
    };

    todos.push(todo);
    cacheTodos(todos);
    addTask(todo);
    document.querySelector('.content__list').lastElementChild.classList.add('task__show');


  } else {
    toggleBorder(invalidFields);
    showToast(Errors.EmptyFields);
  }
});

document.addEventListener('click', (e) => {
  const elem = e.target;

  if (elem.className === 'task__delete') {
    const task = elem.closest('.task');
    const taskId = task.getAttribute('id');

    todos = todos.filter((todo) => todo.id !== Number(taskId));
    cacheTodos(todos);

    task.remove();
  }
});

const btnDeleteFirst = document.querySelector('.deleteFirstEl');
const btnDeleteLast = document.querySelector('.deleteLastEl');
const evenBtn = document.querySelector('.evenBtn');
const oddBtn = document.querySelector('.oddBtn');

btnDeleteFirst.addEventListener('click', () => handleDeleteElem('first', todos));
btnDeleteLast.addEventListener('click', () => handleDeleteElem('last', todos));

evenBtn.addEventListener('click', handleHighlightEven);
oddBtn.addEventListener('click', handleHighlightOdd);
