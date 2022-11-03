const defaultState = {
    todos: []
}

const GET_TODOS = "GET_TODOS"
const DELETE_TODO = "DELETE_TODO"
const CHANGE_COMPLETED_TODO = "CHANGE_COMPLETED_TODO"
const ADD_TODO = "ADD_TODO"
const CHANGE_TODO_NAME = "CHANGE_TODO_NAME"

export const todosReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_TODOS:
            return {...state, todos: action.payload}
        case DELETE_TODO:
            return {...state, todos: state.todos.filter((toDo) => {
                    return toDo.id !== action.payload
                })}
        case CHANGE_COMPLETED_TODO:
            return {...state, todos: action.payload}
        case ADD_TODO:
            return {...state, todos: action.payload}
        case CHANGE_TODO_NAME:
            return {...state, todos: action.payload}
        default:
            return state
    }
}

export const getTodosAction = (payload) => ({type: GET_TODOS, payload})
export const deleteTodoAction = (payload) => ({type: DELETE_TODO, payload})
export const changeCompletedTodoAction = (payload) => ({type: CHANGE_COMPLETED_TODO, payload})
export const addTodoAction = (payload) => ({type: ADD_TODO, payload})
export const changeTodoNameAction = (payload) => ({type: CHANGE_TODO_NAME, payload})