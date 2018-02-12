import React from 'react';
import { TodoList } from './todo-list';
import { AddTodo } from './add-todo';

import { connect } from 'react-redux'
import { addTodoAction, removeTodoAction, doneTodoAction } from './actions'

let todoContainer = (props) => (
    <div>
        <h1>Todo List</h1>
        <TodoList
            items={props.todos}
            onRemoveTodo={props.onRemoveTodo}
            onDoneTodo={props.onDoneTodo}
        />
        <AddTodo onAddTodo={props.onAddTodo} />
    </div>
);

const mapStateToProps = (state) => ({
    todos: state.todos
})

const mapDispatchToProps = {
    onAddTodo: addTodoAction,
    onRemoveTodo: removeTodoAction,
    onDoneTodo: doneTodoAction
}

todoContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(todoContainer)

export default todoContainer;