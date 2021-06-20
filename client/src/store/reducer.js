import { GET_ALL, CREATE, DELETE, UPDATE } from './actionTypes';

const initState = {
    todos: [],
    isLoading: false
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case GET_ALL:
            return {
                ...state,
                todos: action.payload
            }
        case CREATE:
            return {
                ...state,
                todos: [ action.payload, ...state.todos ]
            }
        case DELETE:
            return {
                ...state,
                todos: state.todos.filter(todo => todo._id !== action.payload._id)
            }
        case UPDATE:
            const updatedTodo = action.payload;
            const todoIndex = state.todos.findIndex(todo => todo._id === updatedTodo._id);
            state.todos[todoIndex] = updatedTodo;
            return {
                ...state
            }
        default: return state;
    }
}

export default reducer;