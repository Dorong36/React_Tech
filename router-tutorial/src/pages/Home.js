import React from 'react';
import { Link } from 'react-router-dom';

const home = () => {
    return (
        <div>
            <h1>Home</h1>
            <p>This is HomePage!!</p>
            <ul>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/profile/velopert'>Velopert's Profile</Link>
                </li>
                <li>
                    <Link to='/profile/gildong'>Gildong's Profile</Link>
                </li>
                <li>
                    <Link to='profile/void'>Profile not exist</Link>
                </li>
                <li>
                    <Link to='articles'>Articles</Link>
                </li>
            </ul>
            

        </div>
    );
};

export default home;