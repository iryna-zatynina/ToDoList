import './App.scss';
import ToDoList from '../ToDoList/ToDoList';
import AppContext from "../../context/AppContext";
import {useState} from "react";
import AddToDo from "../AddToDo/AddToDo";
import nextId from "react-id-generator";

function App() {

    const [toDoes, setToDoes] = useState([{
        id: 1, text: "помити машину", completed: false,
    }, {
        id: 2, text: "повчити програмування", completed: true,
    }, {
        id: 3, text: "вигуляти собаку", completed: true,
    }])

    const [toDoName, setToDoName] = useState('')


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
                    text: toDoName,
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
            <div className="App">
                <h1 style={styles.h1}>Список задач:</h1>
                <p style={{marginBottom: "30px", color: "red"}}>Обовʼязково до виконання!</p>
                <ToDoList/>
                <AddToDo toDoName={toDoName} setToDoName={setToDoName} createNewToDo={createNewToDo} />
            </div>
        </AppContext.Provider>
    );
}


export default App;
