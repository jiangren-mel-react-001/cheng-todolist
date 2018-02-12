

export const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    done: false
                }
            ]
        case 'REMOVE_TODO':
            return state.filter(todo => todo.id !== action.id)
        case 'DONE_TODO':
            return state.map(todo =>
                (todo.id === action.id)
                    ? { ...todo, done: !todo.done }
                    : todo
            )
        default:
            return state
    }
}
