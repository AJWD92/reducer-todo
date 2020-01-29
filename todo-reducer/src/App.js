import React, {useReducer} from 'react';
import TodoList from './component/TodoList';
import TodoForm from './component/TodoForm';
import {reducer, initialState} from './reducers/reducer';
import './App.css';
import 'bootswatch/dist/lux/bootstrap.min.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addNewTodo = item => {
    dispatch({
      type: "ADD_NEW_TODO",
      payload: item
    });
  };

  const toggleCompleted = id => {
    dispatch({
      type: "TOGGLE_COMPLETED",
      payload: id
    });
  };

  const clearCompleted = () => {
    dispatch({
      type: "CLEAR_COMPLETED"
    });
  };

  return (
    <div className='App'>
      <h1>Todo App</h1>
      <TodoForm clearCompleted={clearCompleted} addNewTodo={addNewTodo} />
      <TodoList todos={state.todos} toggleCompleted={toggleCompleted} />
    </div>
  )

}

export default App;