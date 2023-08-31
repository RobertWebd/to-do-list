import { getTaskComponent } from './templates/taskComponent.js';
import { NumberType } from './constans.js';

export const addTask = (todo, todoList) => {
  todoList.insertAdjacentHTML('afterbegin', getTaskComponent(todo));
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

export const getHighlightOptions = (type) => ({
  startIndex: type === NumberType.Odd ? 0 : 1,
  state: false,
});

export const toggleBackground = (elem, flag = true) => {
  if (flag) {
    elem.style.backgroundColor = '#373846';
  } else {
    elem.style.backgroundColor = '';
  }
};
