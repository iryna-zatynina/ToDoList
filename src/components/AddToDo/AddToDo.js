import React from 'react';
import "./AddToDo.scss"
import PropTypes from "prop-types";
import ToDoElement from "../ToDoElement/ToDoElement";

const AddToDo = ({setToDoName, toDoName, createNewToDo}) => {

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