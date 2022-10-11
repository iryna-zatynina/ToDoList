import React, {useContext} from "react";
import "./ToDoElement.scss";
import PropTypes from "prop-types";
import {MdRemoveCircleOutline} from "react-icons/md";
import AppContext from "../../context/AppContext";

const ToDoElement = ({toDo}) => {

    const {changeCompletedToDoElement, deleteToDoElement} = useContext(AppContext)

    return (
        <li className="ToDoElement">
            <div>
                <input type="checkbox" defaultChecked={toDo.completed} onClick={() => changeCompletedToDoElement(toDo.id)}/>
                <span className={toDo.completed ? "toDoElementCompleted" : ""}>{toDo.text}</span>
            </div>
            <span className={"toDoElementRemoveIcon"} onClick={() => deleteToDoElement(toDo.id)}><MdRemoveCircleOutline /></span>
        </li>
    )
}

ToDoElement.propTypes = {
    toDo: PropTypes.shape({
        text: PropTypes.string,
        id: PropTypes.number,
        completed: PropTypes.bool,
    }).isRequired
}

export default ToDoElement;