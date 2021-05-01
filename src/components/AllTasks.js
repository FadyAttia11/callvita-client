import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import AddNewTask from './AddNewTask'
import Task from './Task'

const AllTasks = (props) => {

    return (
        <div>
            <div className="jumbotron text-center">
                <h1>See All Tasks Here</h1>
                <Link to="/" className="mt-3">Back To Home Page</Link>
            </div>

            <AddNewTask />
            
            <div className="container mt-5">
            <h2>All Tasks</h2>
            <div className="row">
                {props.tasks.map((task) => <Task key={task.id} {...task} />)}
            </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        tasks: state
    }
}

export default connect(mapStateToProps)(AllTasks) 