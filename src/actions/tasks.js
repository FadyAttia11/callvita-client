import axios from 'axios'

//action generators
//FETCH_TASKS
export const fetchTasks = () => async (dispatch, getState) => {
    const tasks = await axios.get("http://localhost:5000/api/tasks")
                    .then(response => response.data)
    tasks.map((task) => dispatch(addTask({ id: task.id, title: task.title, description: task.description }))) 
}

export const saveTasks = (task) => async (dispatch, getState) => {
    const addedTask = await axios.post("http://localhost:5000/api/tasks", task)
                    .then(response => response.data)
    dispatch(addTask(addedTask))
}

export const updateTasks = (id, updates) => async (dispatch, getState) => {
    const updatedTask = await axios.put(`http://localhost:5000/api/tasks/${id}`, updates)
                    .then(response => response.data)
    dispatch(editTask(updatedTask))
}

export const deleteTasks = (id) => async (dispatch, getState) => {
    const removedTask = await axios.delete(`http://localhost:5000/api/tasks/${id}`)
                    .then(response => response.data)
    dispatch(removeTask({ id: removedTask.id }))
}


//ADD_TASK
export const addTask = (
    {
        id = 0,
        title = '',
        description = ''
    } = {}
) => ({
    type: 'ADD_TASK',
    task: {
        id,
        title,
        description
    }
})


//REMOVE_TASK
export const removeTask = ({ id } = {}) => ({
    type: 'REMOVE_TASK',
    id
})



//EDIT_TASK
export const editTask = (updatedTask) => ({
    type: 'EDIT_TASK',
    updatedTask
})


