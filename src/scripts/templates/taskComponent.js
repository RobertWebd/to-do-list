export const getTaskComponent = ({ id, title, description, date, checked }) => {
  return `<div id=${id} class='task' ${checked && `style= opacity:0.5`}>
            <input type="checkbox" class="task__complete" ${checked && `checked=${checked}`}}>
            <div class='task__header'>
              <div class="task__title">${title}</div>
              <div class="task__desciption">${description}</div>
            </div>
            <div class="task__date">${date}</div>
            <img class="task__delete" src="/to-do-list/src/icons/trashIcon.png">
          </div>`;
};
