import React from 'react';

const Todo = props => {
    const toggleCompleted = () => {
        props.toggleCompleted(props.item.id);
    };

    return (
            <div className={`card text-white bg-primary mb-3 item${props.item.completed ? ' completed' : ''}`} style={{width: '20vw;', marginTop: '2%'}} onClick={toggleCompleted}>
                <div className='card-body'>
                    <p className='card-text'>{props.item.item} </p>
                </div>
            </div>
    )
}

export default Todo;