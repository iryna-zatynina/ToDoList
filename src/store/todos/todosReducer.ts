import {TodosAction, TodosEnum, TodosState} from "./types";

const defaultState: TodosState = {
    todos: []
}

export const todosReducer = (state = defaultState, action: TodosAction): TodosState => {
    switch (action.type) {
        case TodosEnum.GET_TODOS:
            return {...state, todos: action.payload}
        case TodosEnum.DELETE_TODO:
            return {...state, todos: state.todos.filter((toDo) => {
                    return toDo.id !== action.payload
                })}
        case TodosEnum.CHANGE_COMPLETED_TODO:
            return {...state, todos: action.payload}
        case TodosEnum.ADD_TODO:
            return {...state, todos: action.payload}
        default:
            return state
    }
}

export const getTodosAction = (payload) => ({type: TodosEnum.GET_TODOS, payload})
export const deleteTodoAction = (payload) => ({type: TodosEnum.DELETE_TODO, payload})
export const changeCompletedTodoAction = (payload) => ({type: TodosEnum.CHANGE_COMPLETED_TODO, payload})
export const addTodoAction = (payload) => ({type: TodosEnum.ADD_TODO, payload})