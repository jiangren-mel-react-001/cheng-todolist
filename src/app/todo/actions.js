let nextTodoId = 0

export const addTodoAction = (name) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  name
})

export const doneTodoAction = (id) => ({
  type: 'DONE_TODO',
  id
})

export const removeTodoAction = (id) => ({
  type: 'REMOVE_TODO',
  id
})
