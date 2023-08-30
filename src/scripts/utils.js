import { getTaskComponent } from './templates/taskComponent.js';
import { cacheTodos, getCachedTodos } from './todos.js';

const todoList = document.querySelector('.content__list');

export const addTask = (todo) => {
  todoList.insertAdjacentHTML('beforeend', getTaskComponent(todo));
};

export const toggleBorder = (elems, toggle = true) => {
  elems.forEach((elem) => {
    if (toggle) {
      elem.style.border = '1px solid rgb(153, 0, 1)';
    } else {
      elem.style.border = '1px solid white';
    }
  });
};

export const formatDate = (date) => date.split('-').reverse().join('.');

export const validateFields = (fields) => {
  const invalidFields = fields.filter((field) => field.value === '');

  return {
    isValid: invalidFields.length === 0,
    invalidFields,
  };
};

const elemsList = todoList.children;

let isEvenHighlighted = false;
let isOddHighlighted = false;

const toggleBackground = (elem, flag = true) => {
  if (flag) {
    elem.style.backgroundColor = '#373846';
  } else {
    elem.style.backgroundColor = '';
  }
};

export const handleHighlightEven = () => {
  Array.from(elemsList).forEach((task, index) => {
    if (index % 2 !== 0) {
      if (isEvenHighlighted) {
        toggleBackground(task, false);
      } else {
        toggleBackground(task);
      }
    }
  });
  isEvenHighlighted = !isEvenHighlighted;
};

export const handleHighlightOdd = () => {
  Array.from(elemsList).forEach((task, index) => {
    if (index % 2 === 0) {
      if (isOddHighlighted) {
        toggleBackground(task, false);
      } else {
        toggleBackground(task);
      }
    }
  });
  isOddHighlighted = !isOddHighlighted;
};

export const handleDeleteElem = (position, elem) => {
  if (elem.length !== 0) {
    if (position === 'first') {
      elem.shift();
      todoList.firstElementChild.remove();
    } else {
      elem.pop();
      todoList.lastElementChild.remove();
    }
    cacheTodos(elem);
  }
};
