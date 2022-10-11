import React from 'react';
import "./AddToDo.scss"

const AddToDo = ({setToDoName, toDoName, createNewToDo}) => {

    return (

        <div className="AddToDo">
            <h4>Створити нову задачу:</h4>
            <input onChange={(e) => setToDoName(e.target.value)} value={toDoName} type="text"/>
            <button onClick={createNewToDo}>Створити</button>
        </div>
    );
};

export default AddToDo;