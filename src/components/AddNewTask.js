import React, { useState } from 'react'
import { connect } from 'react-redux'
import { saveTasks } from '../actions/tasks';

const AddNewTask = (props) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmitForm = (e) => {
        e.preventDefault()
        props.dispatch(saveTasks({ title, description }))
        setTitle('')
        setDescription('')
    }

    return (
        <div className="container">
            <form onSubmit={(e) => handleSubmitForm(e)}>
                <h2>Add New Task</h2>
                <input 
                    type="text" 
                    placeholder="Task Title" 
                    className="form-control mt-3"
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                />
                <input 
                    type="text" 
                    placeholder="Task Description" 
                    className="form-control mt-3"
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                />
                <input type="submit" className="btn btn-primary mt-3" value="Add Task" />
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        tasks: state
    }
}

export default connect(mapStateToProps)(AddNewTask) 