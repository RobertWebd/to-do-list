export const cacheTodos = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

export const getCachedTodos = () => {
  const cachedTodos = localStorage.getItem('todos');

  if (cachedTodos) {
    return JSON.parse(cachedTodos);
  }
};
