import React from "react";
import ToDoElement, {Todo} from "../ToDoElement/ToDoElement";
import {useSelector} from "react-redux";

const ToDoList: React.FC = () => {

    const todos = useSelector((state: any) => state.todosReducer.todos)

    return (
        <ul>
            {todos.map((toDo: Todo) => {
                return <ToDoElement toDo={toDo} key={toDo.id}  />
            })}
        </ul>
    )
}

export default ToDoList;