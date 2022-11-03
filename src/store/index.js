import {combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {cashReducer} from "./cashReducer";
import {todosReducer} from "./todosReducer";

const rootReducer = combineReducers({
    cashReducer, todosReducer
})
export const store = createStore(rootReducer, composeWithDevTools())

