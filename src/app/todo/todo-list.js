import React from 'react';

export function TodoList(props) {
    const itemList = props.items.map((aItem, index) => (
        <li key={index}>
            {aItem.done ? (
                <div>
                    <del>{aItem.name}</del>
                    <button onClick={() => props.onRemoveTodo(aItem)}>Delete</button>
                </div>
            ) : (
                <div>
                    {aItem.name}
                    <button onClick={() => props.onDoneTodo(aItem)}>Do it</button>
                    <button onClick={() => props.onRemoveTodo(aItem)}>Delete</button>
                </div>
            )}
        </li>
    ));
    return (
        <ul>
            {itemList}
        </ul>
    );
};
