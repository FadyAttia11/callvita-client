import React, { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import Routes from "./components/Routes";
import Navbar from "./components/Navbar";

import configureStore from './store/configureStore'
import { addTask, fetchTasks } from './actions/tasks'
import { saveTasks } from './reducers/tasks';

const store = configureStore()

// console.log("our store: ", store.getState())
store.subscribe(() => { console.log("our store: ", store.getState()) })

// store.dispatch(addTask({ title: 'trying', description: 'hard' }))
store.dispatch(fetchTasks())
// store.dispatch(saveTasks())

const App = () => {

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes />
      </Router>
    </Provider>

  );
}

export default App;
