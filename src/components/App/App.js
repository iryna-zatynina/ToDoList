import React from 'react';
import ToDoPage from "../../pages/ToDoPage/ToDoPage";
import "./App.scss"
import useRoutes from "../../hooks/route.hook";
import {BrowserRouter} from "react-router-dom";
import "../../i18n";

const App = () => {

    const routes = useRoutes()

    return (
        <BrowserRouter>
            {routes}
        </BrowserRouter>
    );
};

export default App;