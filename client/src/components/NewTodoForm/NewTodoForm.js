import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTodo } from '../../store/actions';

import './NewTodoForm.css';

const NewTodoForm = () => {
    const [state, setState] = useState({
        title: '',
        text: ''
    });
    const { title, text } = state;

    const [errState, setErrState] = useState({
        titleErr: '',
        textErr: ''
    });

    const dispatch = useDispatch();

    const updateState = event => {
        setState(prevState => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
    }

    const validator = () => {
        let titleErr = null;
        let textErr = null;

        if (title.trim() === '') titleErr = 'Please make sure to fill Title field';
        if (text.trim() === '') textErr = 'Please make sure to fill Text field';

        if (titleErr || textErr) {
            setErrState(prevState => {
                return {
                    ...prevState,
                    titleErr,
                    textErr
                }
            })
            return false;
        }
        return true;
    };

    const send = event => {
        event.preventDefault();
        const isValid = validator();
        if (isValid) {
            dispatch(createTodo(state));
            setState({
                title: '',
                text: ''
            })
        }
    }

    return (
        <div className={'newtodo-main'}>
            <form onSubmit={send}>
                <h3><i className="far fa-calendar-plus"></i> Create New Task</h3>
                <input type={'text'} onChange={updateState} value={state.title} placeholder={'Title...'} name={'title'} maxLength={30}/>
                <input type={'text'} onChange={updateState} value={state.text} placeholder={'Text...'} name={'text'} maxLength={50}/>
                <button type={'submit'}>Create</button>
                <small>{errState.titleErr || errState.textErr}</small>
            </form>
        </div>
    )
}

export default NewTodoForm;