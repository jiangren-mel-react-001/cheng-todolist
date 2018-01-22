import React from 'react';
import { TodoList } from './todo-list';
import { AddTodo } from './add-todo';

export class TodoContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            todoItems: []
        }
        this.onAddTodo = this.onAddTodo.bind(this);
        this.onRemoveTodo = this.onRemoveTodo.bind(this);
    }
    onAddTodo(aItem) {
        this.setState({
            todoItems: this.state.todoItems.concat(aItem)
        })
    }
    onRemoveTodo(aItem) {

    }
    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <TodoList items={this.state.todoItems} onRemoveTodo={this.onRemoveTodo} />
                <AddTodo onAddTodo={this.onAddTodo} />
            </div>
        );
    }
}