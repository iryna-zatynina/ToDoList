import React, {useContext, useState} from "react";
import ToDoElement from "../ToDoElement/ToDoElement";
import AppContext from "../../context/AppContext";

const ToDoList = () => {

    const {toDoes} = useContext(AppContext)

    return (
        <ul>
            {toDoes.map((toDo) => {
                return <ToDoElement toDo={toDo} key={toDo.id}  />
            })}
        </ul>
    )
}

export default ToDoList;