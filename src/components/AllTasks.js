import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import AddNewTask from './AddNewTask'
import Task from './Task'

const AllTasks = (props) => {

    return (
        <div>
            <h1>AllTasks Page</h1>
            <AddNewTask />
            <Link to="/">Back To Home Page</Link>
            {props.tasks.map((task) => <Task key={task.id} {...task} />)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        tasks: state
    }
}

export default connect(mapStateToProps)(AllTasks) 