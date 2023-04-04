import './TodoTemplate.scss';
import React from 'react';

const TodoTemplate = ({children}) => {
    return (
        <div className='TodoTemplate'>
            <div className='app-title'>Todo List</div>
            <div className='content'>{children}</div>
        </div>
    );
};

export default TodoTemplate;