import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const Cash = () => {
    const dispatch = useDispatch()
    const cash = useSelector((state: any) => state.cashReducer.cash)

    const addCash = () => {
        dispatch({
            type: "ADD_CASH",
            payload: 10
        })
    }
    const minusCash = (): void => {
        dispatch({
            type: "MINUS_CASH",
            payload: 10
        })
    }

    return (
        <div>
            <p>{cash}</p>
            <button onClick={addCash}>Додати</button>
            <button onClick={minusCash}>Відняти</button>
        </div>
    );
};

export default Cash;