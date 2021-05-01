import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteTasks } from '../actions/tasks';

const Task = (props) => {

    const deleteTask = () => {
        props.dispatch(deleteTasks(props.id))
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <Link to={{ pathname: "/edittask", search: `?id=${props.id}&title=${props.title}&description=${props.description}`}} params={{ title: "hello" }}>Edit This Task</Link>
            <button onClick={deleteTask}>Delete This Task</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        tasks: state
    }
}

export default connect(mapStateToProps)(Task) 