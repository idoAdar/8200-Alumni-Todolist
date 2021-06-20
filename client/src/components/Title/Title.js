import React from 'react';

import './Title.css';

const Title = () => {
    return (
        <div className={'title-main'}>
            <h1><i className="fas fa-clipboard-list fa-lg"></i> TodoApp</h1>
            <small>- This simple todolist application built with React, Nodejs & MongoDB -</small>
        </div>
    )
}

export default Title;