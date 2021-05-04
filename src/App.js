import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import Routes from "./components/Routes";

import configureStore from './store/configureStore'
import { fetchTasks } from './actions/tasks'

const store = configureStore()

// console.log("our store: ", store.getState())
// store.subscribe(() => { console.log("our store: ", store.getState()) })

// store.dispatch(addTask({ title: 'new task', description: 'adding new task' }))
store.dispatch(fetchTasks())
// store.dispatch(saveTasks())

const App = () => {

  return (
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>

  );
}

export default App;
