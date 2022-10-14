import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import Loader from "../../components/Loader/Loader";
import "./OtherToDo.scss"

const OtherToDo = () => {
    const id = useParams().id;
    const [index, setIndex] = useState();
    const [title, setTitle] = useState();
    const [isCompleted, setIsCompleted] = useState();
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        setLoader(true);
        axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then((response) => {
                setLoader(false)
                setIndex(response.data.id)
                setTitle(response.data.title)
                setIsCompleted(response.data.completed)
            })
    }, [])


    return (
        <>
            <div className='OtherToDo'>
                <span className="link"><Link to={"/"}>Перейти на сторінку списку завдань</Link></span>
                <div>
                    <p className="index">Задача № {index}</p>
                    <p className="title">{title}</p>
                    <p>Статус: <span className={isCompleted ? "done" : "notDone"}>{isCompleted ? "выполнена" : "невыполнена" }</span></p>
                </div>
            </div>

            {loader && <Loader />}
        </>

    );
};

export default OtherToDo;