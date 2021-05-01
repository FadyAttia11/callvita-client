import axios from 'axios'

// Tasks Reducer
const tasksReducerDefaultState = []

export const tasksReducer = (state = tasksReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [
                ...state,
                action.task
            ]
        case 'REMOVE_TASK':
            return state.filter(({ id }) => id != action.id)
        case 'EDIT_TASK':
            return state.map((task) => {
                if(task.id === action.updatedTask.id) {
                    return {
                        ...action.updatedTask
                    }
                } else {
                    return task
                }
            })
        default:
            return state
    }
}


