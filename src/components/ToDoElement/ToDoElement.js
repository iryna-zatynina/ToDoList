import React, {useContext, useEffect, useState} from "react";
import "./ToDoElement.scss";
import PropTypes from "prop-types";
import {MdRemoveCircleOutline} from "react-icons/md";
import {BsFillPencilFill} from "react-icons/bs";
import AppContext from "../../context/AppContext";
import {Link} from "react-router-dom";


const ToDoElement = ({toDo}) => {

    const {changeCompletedToDoElement, deleteToDoElement} = useContext(AppContext)
    const [toggleInput, setToggleInput] = useState(false);
    const [input, setInput] = useState(toDo.title);



    return (
        <li className="ToDoElement">
            <div>
                <input type="checkbox" defaultChecked={toDo.completed} onClick={() => changeCompletedToDoElement(toDo.id)}/>
                {toggleInput ? <input className='toggleInput' type="text" value={input} onChange={e => setInput(toDo.title = e.target.value)} /> :
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