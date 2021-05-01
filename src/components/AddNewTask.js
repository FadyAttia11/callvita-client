import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { saveTasks } from '../actions/tasks';

const AddNewTask = (props) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    // useEffect(() => {
    //     console.log('props is:', props)
    // },[props])

    const handleSubmitForm = (e) => {
        e.preventDefault()
        props.dispatch(saveTasks({ title, description }))
    }

    return (
        <form onSubmit={(e) => handleSubmitForm(e)}>
            <h2>Add New Task</h2>
            <input type="text" placeholder="task title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="task description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <input type="submit" value="Add Task" />
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
        tasks: state
    }
}

export default connect(mapStateToProps)(AddNewTask) 