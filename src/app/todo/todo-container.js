import React from 'react';
import { TodoList } from './todo-list';
import { AddTodo } from './add-todo';
import { TodoModel } from './model';

export class TodoContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            todoItems: [new TodoModel('todo1')]
        }
        this.onAddTodo = this.onAddTodo.bind(this);
        this.onRemoveTodo = this.onRemoveTodo.bind(this);
        this.onDoneTodo = this.onDoneTodo.bind(this);
    }
    onAddTodo(aItem) {
        this.setState({
            todoItems: this.state.todoItems.concat(new TodoModel(aItem))
        });
    }
    onRemoveTodo(aItem) {
        this.setState({
            todoItems: this.state.todoItems.filter((value) => value !== aItem)
        });
    }
    onDoneTodo(aItem) {
        const newState = this.state.todoItems.map((value) => {
            return aItem.id === value.id ? {...value, done: true} : value;
        })
        this.setState({
            todoItems: newState
        });
    }
    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <TodoList
                    items={this.state.todoItems}
                    onRemoveTodo={this.onRemoveTodo}
                    onDoneTodo={this.onDoneTodo}
                />
                <AddTodo onAddTodo={this.onAddTodo} />
            </div>
        );
    }
}