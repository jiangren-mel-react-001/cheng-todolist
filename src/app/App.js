import React, { Component } from 'react';
import './App.css';
import TodoContainer from './todo/todo-container';

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import { Route, Link } from "react-router-dom";

import { todos } from './todo/reducers';

const history = createHistory()
const middleware = routerMiddleware(history)

const todoApp = combineReducers({
  todos,
  router: routerReducer
})
const store = createStore(todoApp, applyMiddleware(middleware))

const About = () => (
  <h1>about</h1>
)
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        { /* ConnectedRouter will use the store from Provider automatically */}
        <ConnectedRouter history={history}>
          <div>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/todo">TodoList</Link>
              </li>
            </ul>
            <hr />

            <Route exact path="/" component={TodoContainer} />
            <Route path="/about" component={About} />
            <Route path="/todo" component={TodoContainer} />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
