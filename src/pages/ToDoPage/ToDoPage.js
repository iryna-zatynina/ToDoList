import './ToDoPage.scss';
import ToDoList from '../../components/ToDoList/ToDoList';
import AppContext from "../../context/AppContext";
import {useEffect, useState} from "react";
import AddToDo from "../../components/AddToDo/AddToDo";
import nextId from "react-id-generator";
import axios from "axios";
import Loader from "../../components/Loader/Loader";
import {Link} from "react-router-dom";


function ToDoPage() {

    useEffect(() => {
        setLoader(true)
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then((response) => {
                setLoader(false)
                setToDoes(response.data)
            })
    }, [])

    const [toDoes, setToDoes] = useState([])
    const [toDoName, setToDoName] = useState('')
    const [loader, setLoader] = useState(false)

    const deleteToDoElement = (id) => {
        const toDoList = toDoes.filter((toDo) => {
            return toDo.id !== id
        })
        setToDoes(toDoList)
    }
    const changeCompletedToDoElement = (id) => {
        const toDoList = toDoes.map((toDo) => {
            if (toDo.id === id) {
                toDo.completed = !toDo.completed
            }
            return toDo;
        })
        setToDoes(toDoList)
    }

    const createNewToDo = () => {
        if (toDoName.length > 2) {
            setToDoes(toDoes.concat([
                {
                    id: nextId(),
                    title: toDoName,
                    completed: false,
                }
            ]))
            setToDoName("")
        }
    }



    const styles = {
        h1: {
            marginBottom: "5px",
        }
    }

    return (<AppContext.Provider value={{toDoes, changeCompletedToDoElement, deleteToDoElement}}>
            <div className="ToDoPage">
                <span className="link"><Link to={"/posts"}>Перейти на сторінку постів</Link></span>

                <h1 style={styles.h1}>Список задач:</h1>
                <p style={{marginBottom: "30px", color: "red"}}>Обовʼязково до виконання!</p>

                {toDoes.length ? <ToDoList/> : <p>У вас немає активних завдань!</p>}
                <AddToDo toDoName={toDoName} setToDoName={setToDoName} createNewToDo={createNewToDo} />
            </div>
            {loader && <Loader />}
        </AppContext.Provider>
    );
}


export default ToDoPage;
