import React from 'react';
import "./AddToDo.scss";
import {useDispatch, useSelector} from "react-redux";
import nextId from "react-id-generator";
import {addTodoAction} from "../../store/todos/todosReducer";

interface AddToDoProp {
    setToDoName: (prevState: string) => void,
    toDoName: string
}
const AddToDo = ({setToDoName, toDoName}: AddToDoProp) => {

    const dispatch = useDispatch()
    const todos = useSelector((state: any) => state.todosReducer.todos)

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

export default AddToDo;