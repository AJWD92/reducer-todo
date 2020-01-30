import React, {useReducer} from 'react';

// Components
import TodoList from './component/TodoList';
import TodoForm from './component/TodoForm';

// reducers
import {reducer, initialState} from './reducers/reducer';

// styling
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
      <h1 style={{marginTop: '2%'}}>Todo App</h1>
      <TodoForm clearCompleted={clearCompleted} addNewTodo={addNewTodo} />
      <TodoList todos={state.todos} toggleCompleted={toggleCompleted} />
    </div>
  )

}

export default App;