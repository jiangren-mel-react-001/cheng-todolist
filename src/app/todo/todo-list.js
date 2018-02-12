import React from 'react';
import PropType from 'prop-types';

export function TodoList(props) {
    const itemList = props.items.map((aItem, index) => (
        <li key={index}>
            {aItem.done ? (
                <div>
                    <del>{aItem.name}</del>
                    <button onClick={() => props.onRemoveTodo(aItem.id)}>Delete</button>
                </div>
            ) : (
                <div>
                    {aItem.name}
                    <button onClick={() => props.onDoneTodo(aItem.id)}>Do it</button>
                    <button onClick={() => props.onRemoveTodo(aItem.id)}>Delete</button>
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

TodoList.propTypes = {
    items: PropType.array.isRequired,
    onRemoveTodo: PropType.func.isRequired,
    onDoneTodo: PropType.func.isRequired
}