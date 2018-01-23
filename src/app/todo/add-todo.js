import React from 'react';

export function AddTodo(props) {
    const handleClick = () => {
        props.onAddTodo('aasdf');
    };
    return (
        <button onClick={handleClick}>Add</button>
    )
};