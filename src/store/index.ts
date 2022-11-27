import {combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {cashReducer} from "./cashReducer";
import {todosReducer} from "./todos/todosReducer";
import {TodosState} from "./todos/types";

export interface StoreTypes {
    todosReducer: TodosState
}

const rootReducer = combineReducers({
    cashReducer, todosReducer
})
export const store = createStore(rootReducer, composeWithDevTools())

