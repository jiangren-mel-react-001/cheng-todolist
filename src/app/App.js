import React, { Component } from 'react';
import './App.css';
import TodoContainer from './todo/todo-container';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { combineReducers } from 'redux'

import { todos } from './todo/reducers';

const todoApp = combineReducers({
  todos
})
const store = createStore(todoApp)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TodoContainer />
      </Provider>
    );
  }
}

export default App;
