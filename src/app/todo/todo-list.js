import React from 'react';

export function TodoList(props) {
    const itemList = props.items.map((aItem, index) => (<li key={index}>{aItem}</li>))
    return (
        <ul>
            {itemList}
        </ul>
    );
};
