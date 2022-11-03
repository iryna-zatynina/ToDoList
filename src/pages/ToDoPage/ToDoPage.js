import './ToDoPage.scss';
import ToDoList from '../../components/ToDoList/ToDoList';
import AppContext from "../../context/AppContext";
import {useCallback, useEffect, useState} from "react";
import AddToDo from "../../components/AddToDo/AddToDo";
import nextId from "react-id-generator";
import axios from "axios";
import Loader from "../../components/Loader/Loader";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getTodosAction} from "../../store/todosReducer";


function ToDoPage() {

    const dispatch = useDispatch()
    const todos = useSelector(state => state.todosReducer.todos)

    const setTodos = useCallback((todos) => {
        dispatch(getTodosAction(todos))
    }, [dispatch])

    useEffect(() => {
        setLoader(true)
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then((response) => {
                setLoader(false)
                setTodos(response.data)
            })
    }, [setTodos])

    const [toDoName, setToDoName] = useState('')
    const [loader, setLoader] = useState(false)



    const styles = {
        h1: {
            marginBottom: "5px",
        }
    }

    return (
        // <AppContext.Provider value={{toDoes, changeCompletedToDoElement, deleteToDoElement}}>
        <>
            <div className="ToDoPage">
                <span className="link"><Link to={"/posts"}>Перейти на сторінку постів</Link></span>

                <h1 style={styles.h1}>Список задач:</h1>
                <p style={{marginBottom: "30px", color: "red"}}>Обовʼязково до виконання!</p>

                {todos.length ? <ToDoList/> : <p>У вас немає активних завдань!</p>}
                <AddToDo toDoName={toDoName} setToDoName={setToDoName} />
            </div>
            {loader && <Loader />}
        </>
        // </AppContext.Provider>
    );
}


export default ToDoPage;
