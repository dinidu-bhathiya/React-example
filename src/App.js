import './App.css';

import React from 'react';
import { Provider } from "react-redux";

import EditUserName from './Component/EditUserName';
import Header from './Component/Header';
import TodoList from './Component/TodoList';
import store from './store';

const App = () => {
  return(
    <Provider store={store}>
      <Header />
      <TodoList />
      <EditUserName />
    </Provider>
    
  )
}

export default App;
