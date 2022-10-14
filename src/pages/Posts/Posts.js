import React from 'react';
import {Link} from "react-router-dom";
import "./Posts.scss"

const Posts = () => {
    return (
        <div className="Posts">
            <span className="link"><Link to={"/"}>Перейти на сторінку списку завдань</Link></span>
            <h1>Posts</h1>
        </div>
    );
};

export default Posts;