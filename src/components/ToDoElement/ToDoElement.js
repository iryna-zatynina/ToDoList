import React, {useContext, useEffect, useState} from "react";
import "./ToDoElement.scss";
import PropTypes from "prop-types";
import {MdRemoveCircleOutline} from "react-icons/md";
import {BsFillPencilFill} from "react-icons/bs";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {changeCompletedTodoAction, deleteTodoAction} from "../../store/todosReducer";


const ToDoElement = ({toDo}) => {

    const dispatch = useDispatch()
    const todos = useSelector(state => state.todosReducer.todos)

    const [toggleInput, setToggleInput] = useState(false);
    const [input, setInput] = useState(toDo.title);

    const deleteToDoElement = (id) => {
        dispatch(deleteTodoAction(id))
    }
    const changeCompletedToDoElement = (id) => {
        const toDoList = todos.map((toDo) => {
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

ToDoElement.propTypes = {
    toDo: PropTypes.shape({
        title: PropTypes.string,
        id: PropTypes.number,
        completed: PropTypes.bool,
    }).isRequired
}

export default ToDoElement;