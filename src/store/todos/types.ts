import {Todo} from "../../components/ToDoElement/ToDoElement";

export interface TodosState {
    todos: Todo[]
}

export enum TodosEnum {
    GET_TODOS = "GET_TODOS",
    DELETE_TODO = "DELETE_TODO",
    CHANGE_COMPLETED_TODO = "CHANGE_COMPLETED_TODO",
    ADD_TODO = "ADD_TODO"
}

export interface GetTodosAction {
    type: TodosEnum.GET_TODOS,
    payload: Todo[]
}

export interface DeleteTodoAction {
    type: TodosEnum.DELETE_TODO,
    payload: string | number
}

export interface ChangeCompletedTodoAction {
    type: TodosEnum.CHANGE_COMPLETED_TODO,
    payload: Todo[]
}

export interface AddTodoAction {
    type: TodosEnum.ADD_TODO,
    payload: Todo[]
}

export type TodosAction = GetTodosAction | DeleteTodoAction | ChangeCompletedTodoAction | AddTodoAction

