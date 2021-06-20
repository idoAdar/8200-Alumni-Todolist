import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAll } from './store/actions';

import Title from './components/Title/Title';
import NewTodoForm from './components/NewTodoForm/NewTodoForm';
import TodoItem from './components/TodoItem/TodoItem';
import './App.css';

const App = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
  }, []);

  return (
    <div className={'app-main'}>
        <Title />
        <NewTodoForm />
        <hr />
        <div>
          {todos.length > 0 ? todos.map(todo => {
            return <TodoItem key={todo._id}
            id={todo._id} 
            title={todo.title}
            text={todo.text}
            status={todo.isDone}
            date={todo.date}/>
          }) : <p style={{ textAlign: 'center' }}>Please enter some of your tasks</p>}
        </div>
    </div>
  );
}

export default App;
