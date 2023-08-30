export const getToastComponent = (error, id) => {
  return `<div id='toast-${id}' class="toast__wrapper">
      <div class="toast__content">
        <img class="content__icon"  src="/src/icons/remove.png">
        <div class="content__text text">
          <div class="text__header">Error</div>
          <div class="text__subText">${error}</div>
        </div>
        <div class="content__closeButton">
          <svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="0" x2="10" y2="10" stroke="#ffffff" stroke-width="1"/>
            <line x1="0" y1="10" x2="10" y2="0" stroke="#ffffff" stroke-width="1"/>
          </svg>
        </div>
      </div>
    </div>`;
};
