import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import Loader from "../../components/Loader/Loader";
import "./OtherToDo.scss"

const OtherToDo = () => {
    const id = useParams().id;
    console.log(id)
    const [loader, setLoader] = useState(false)
    const [toDo, setToDo] = useState({})

    useEffect(() => {
        setLoader(true);
        axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then((response) => {
                setLoader(false)
                setToDo(response.data)
            })
    }, [id])


    return (
        <>
            <div className='OtherToDo'>
                <span className="link"><Link to={"/"}>Перейти на сторінку списку завдань</Link></span>
                <div>
                    <p className="index">Задача № {toDo.index}</p>
                    <p className="title">{toDo.title}</p>
                    <p>Статус:
                        {toDo.isCompleted ?
                            <span className="done">выполнена</span> :
                            <span className="notDone">невыполнена</span>}
                    </p>
                </div>
            </div>

            {loader && <Loader/>}
        </>

    );
};

export default OtherToDo;