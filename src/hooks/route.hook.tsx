import React from 'react';
import {Route, Routes} from "react-router";
import ToDoPage from "../pages/ToDoPage/ToDoPage";
import Posts from "../pages/Posts/Posts";
import OtherToDo from "../pages/OtherToDo/OtherToDo";
import Cash from "../pages/Cash/Cash";

const useRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<ToDoPage /> } />
            <Route path="/posts" element={<Posts /> } />
            <Route path="/todo:id" element={<OtherToDo />} />
            <Route path="/cash" element={<Cash />} />
        </Routes>
    );
};


export default useRoutes;