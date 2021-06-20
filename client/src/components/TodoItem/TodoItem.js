import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../../store/actions';
import Moment from 'react-moment';
import './TodoItem.css';

const TodoItem = props => {
    const [isDone, setIsDone] = useState(props.status);
    const dispatch = useDispatch();

    const remove = event => {
        event.preventDefault();
        dispatch(deleteTodo(props.id));
    }

    
    const changeStatus = event => {
        event.preventDefault();
        dispatch(updateTodo(props.id));
        setIsDone(!isDone);
    }

    let dynamicClass = 'todo-item-main';
        if (isDone) {
            dynamicClass = 'todo-item-main done-class';
        }

    return (
        <div className={dynamicClass}>
            <div className={'todo-item-content'}>
                <p>{props.title}</p>
                <small>{props.text}</small>
                <small>Written On: <Moment date={props.date} format="DD-MM-YYYY" /></small>
            </div>
            <div className={'todo-item-controller'}>
                <i onClick={changeStatus} className="fas fa-check-circle fa-2x"></i>
                <i onClick={remove} className="fas fa-eraser fa-2x"></i>
            </div>
        </div>
    )
}

export default TodoItem;