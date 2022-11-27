import React, {useState} from "react";
import "./ToDoElement.scss";
import {MdRemoveCircleOutline} from "react-icons/md";
import {BsFillPencilFill} from "react-icons/bs";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {changeCompletedTodoAction, deleteTodoAction} from "../../store/todos/todosReducer";
import {StoreTypes} from "../../store";

interface ToDoElementProps {
    toDo: Todo
}
export interface Todo {
    title: string,
    id: number | string,
    completed: boolean,
}

const ToDoElement = ({toDo}: ToDoElementProps) => {

    const dispatch = useDispatch()
    const todos = useSelector((state: StoreTypes) => state.todosReducer.todos)

    const [toggleInput, setToggleInput] = useState<boolean>(false);
    const [input, setInput] = useState<string>(toDo.title);

    const deleteToDoElement = (id: string | number) => {
        dispatch(deleteTodoAction(id))
    }
    const changeCompletedToDoElement = (id: string | number) => {
        const toDoList = todos.map((toDo: Todo) => {
            if (toDo.id === id) {
                toDo.completed = !toDo.completed
            }
            return toDo;
        })
        dispatch(changeCompletedTodoAction(toDoList))
    }
    const changeTodoName = (e) => {
        setInput(toDo.title = e.target.value)
    }

    return (
        <li className="ToDoElement">
            <div>
                <input type="checkbox" defaultChecked={toDo.completed} onClick={() => changeCompletedToDoElement(toDo.id)}/>
                {toggleInput ? <input className='toggleInput' type="text" value={input} onChange={changeTodoName} /> :
                    <span className={toDo.completed ? "toDoElementCompleted" : ""}>
                        <Link  className="link" to={`/todo${toDo.id}`}>{toDo.title}</Link>
                    </span>}
            </div>
            <div>
                <span className={"toDoElementRemoveIcon"} onClick={() => setToggleInput(!toggleInput)}><BsFillPencilFill /></span>
                <span className={"toDoElementRemoveIcon"} onClick={() => deleteToDoElement(toDo.id)}><MdRemoveCircleOutline /></span>
            </div>
        </li>
    )
}



export default ToDoElement;