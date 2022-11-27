import './ToDoPage.scss';
import ToDoList from '../../components/ToDoList/ToDoList';
import {useCallback, useEffect, useState} from "react";
import AddToDo from "../../components/AddToDo/AddToDo";
import axios from "axios";
import Loader from "../../components/Loader/Loader";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getTodosAction} from "../../store/todos/todosReducer";
import {Todo} from "../../components/ToDoElement/ToDoElement";


function ToDoPage() {

    const dispatch = useDispatch()
    const todos = useSelector((state: any) => state.todosReducer.todos)

    const setTodos = useCallback((todos: Todo[]) => {
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

    const [toDoName, setToDoName] = useState<string>('')
    const [loader, setLoader] = useState<boolean>(false)



    const styles = {
        h1: {
            marginBottom: "5px",
        }
    }

    return (
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
    );
}


export default ToDoPage;
