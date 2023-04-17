import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
    const navigate = useNavigate();

    const goBack = () =>{
        navigate(-1)
    }

    const goArticles = () => {
        navigate('/articles', {replace : true})
    }

    return (
        <div>
            <header style={{background : 'lightgray', padding : 16, fontSize : 24}}>
                <button onClick={goBack}>go back</button>
                <button onClick={goArticles}>Articles</button>

            </header>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default Layout;