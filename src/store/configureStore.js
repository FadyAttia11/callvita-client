import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { tasksReducer } from '../reducers/tasks'

export default () => {
    //Store Creation
    const store = createStore(tasksReducer, applyMiddleware(thunk))
    return store
}
