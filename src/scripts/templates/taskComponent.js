export const getTaskComponent = ({ id, title, description, date }) => {
  return `<div id=${id} class="task">
            <input type="checkbox" class="task__copmlete">
            <div class='task__header'>
              <div class="task__title">${title}</div>
              <div class="task__desciption">${description}</div>
            </div>
            <div class="task__date">${date}</div>
            <img class="task__delete" src="/src/icons/trashIcon.png">
          </div>`;
};
