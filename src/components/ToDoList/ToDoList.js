import React, {useContext, useState} from "react";
import ToDoElement from "../ToDoElement/ToDoElement";
import AppContext from "../../context/AppContext";
import {useSelector} from "react-redux";

const ToDoList = () => {

    const todos = useSelector(state => state.todosReducer.todos)

    return (
        <ul>
            {todos.map((toDo) => {
                return <ToDoElement toDo={toDo} key={toDo.id}  />
            })}
        </ul>
    )
}

export default ToDoList;