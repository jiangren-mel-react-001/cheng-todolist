import React from 'react';

export function AddTodo(props) {
    return (
        <button onClick={() => props.onAddTodo('abc')}>Add</button>
    )
};