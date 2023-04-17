import React from 'react';
import {Link, Outlet, NavLink} from 'react-router-dom'

const Articles = () => {
    return (
        <div>
            <Outlet></Outlet>
            <ul>
                <ArticleItem id={1}/>
                <ArticleItem id={2}/>
                <ArticleItem id={3}/>
            </ul>
        </div>
    );
};

const ArticleItem = ({id}) => {
    const activeStye = {
        color : 'green',
        fontSize : 21,
    }
    return (
        <li>
            <NavLink 
                to={`/articles/${id}`}
                style={({isActive}) => (isActive ? activeStye : undefined)}
            > 게시글 {id} </NavLink>
        </li>
    )
}

export default Articles;