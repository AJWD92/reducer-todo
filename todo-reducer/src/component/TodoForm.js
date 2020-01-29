import React, { useState } from 'react';

const TodoForm = props => {
    const [todo, setTodo] = useState('');

    const handleChange = e => {
        setTodo(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.addNewTodo(todo);
        setTodo('');
    };

    const clearCompleted = () => {
        props.clearCompleted();
    };

    return (
        <div>
            <form style={{display: 'flex', flexDirection: 'column', marginTop: '2%', justifyContent: 'center', alignItems: 'center'}} onSubmit={handleSubmit}>
                <label className='col-form-label' htmlFor='inputDefault'></label>
                <input
                style={{width: '15vw'}}
                className='form-control'
                id='inputDefault'
                value={todo}
                placeholder='Add New Task'
                onChange={handleChange}
                />
                <button style={{margin: '1% 0', width: '12vw'}}  className='btn btn-primary'>Add Task</button>
            </form>
            <button className='btn btn-outline-secondary' onClick={clearCompleted}>Clear Completed Task</button>
        </div>
    )
};

export default TodoForm;