import React, {useCallback} from 'react';
import "./AddToDo.scss"
import PropTypes from "prop-types";
import ToDoElement from "../ToDoElement/ToDoElement";
import {useDispatch, useSelector} from "react-redux";
import nextId from "react-id-generator";
import {addTodoAction} from "../../store/todosReducer";

const AddToDo = ({setToDoName, toDoName}) => {

    const dispatch = useDispatch()
    const todos = useSelector(state => state.todosReducer.todos)

    const createNewToDo = () => {
        if (toDoName.length > 2) {
            const newTodosArr = todos.concat([
                    {
                        id: nextId(),
                        title: toDoName,
                        completed: false,
                    }
                ])
                setToDoName("")
            dispatch(addTodoAction(newTodosArr))
        }
    }
    return (

        <div className="AddToDo">
            <h4>Створити нову задачу:</h4>
            <input onChange={(e) => setToDoName(e.target.value)} value={toDoName} type="text"/>
            <button onClick={createNewToDo}>Створити</button>
        </div>
    );
};

AddToDo.propTypes = {
    toDoName: PropTypes.string.isRequired,
    setToDoName: PropTypes.func,
    createNewToDo: PropTypes.func,
}

export default AddToDo;