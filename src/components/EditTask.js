import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import queryString from 'query-string'
import { updateTasks } from '../actions/tasks';

const EditTask = (props) => {

    const [id, setId] = useState(0)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const history = useHistory()

    useEffect(() => {
        const taskInfo = queryString.parse(props.location.search);
        setId(taskInfo.id)
        setTitle(taskInfo.title)
        setDescription(taskInfo.description)
    }, [])

    const handleEditingTask = (e) => {
        e.preventDefault()

        props.dispatch(updateTasks(id, { title, description }))
        history.push("/alltasks")
    }

    return (
        <div>
            <div className="jumbotron text-center">
                <h1>Edit Specific Task</h1>
                <Link to="/alltasks" className="mt-3">Back To All Tasks Page</Link>
            </div>
            <div className="container">
                <h1>Edit Task</h1>
                <form onSubmit={(e) => handleEditingTask(e)}>
                    <label htmlFor="title">Task Title</label>
                    <input 
                        type="text" 
                        id="title" 
                        placeholder="Edit Task Title" 
                        className="form-control mb-4"
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                    />

                    <label htmlFor="description">Task Description</label>
                    <input 
                        type="text" 
                        id="description" 
                        placeholder="Edit Task Description"
                        className="form-control mb-4" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                    />

                    <input type="submit" value="Edit This Task" className="btn btn-info" />
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        tasks: state
    }
}

export default connect(mapStateToProps)(EditTask) 