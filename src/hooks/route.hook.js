import React from 'react';
import {Route, Routes} from "react-router";
import ToDoPage from "../pages/ToDoPage/ToDoPage";
import Posts from "../pages/Posts/Posts";
import OtherToDo from "../pages/OtherToDo/OtherToDo";

const useRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<ToDoPage /> } />
            <Route path="/posts" element={<Posts /> } />
            <Route path="/todo:id" element={<OtherToDo />} />
        </Routes>
    );
};


export default useRoutes;