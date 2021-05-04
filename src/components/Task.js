import React, { useContext } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteTasks } from '../actions/tasks';
import SearchedTasksApi from "../context/SearchedTasksApi";

const Task = (props) => {

    const SearchedTasks = useContext(SearchedTasksApi);

    const deleteTask = () => {
        props.dispatch(deleteTasks(props.id))
        if(props.search === "true") {
            SearchedTasks.setSearchedTasks((prevTasks) => prevTasks.filter(task => task.id !== props.id))
        }
    }

    return (
        <div className="card col-5 m-3">
            <div className="card-body">
                <h3 className="card-title">Title: {props.title}</h3>
                <p className="card-text">Description: {props.description}</p>
            </div>
            <div className="card-footer">
                <Link to={{ pathname: "/edittask", search: `?id=${props.id}&title=${props.title}&description=${props.description}`}} className="btn btn-info">Edit This Task</Link>
                <button onClick={deleteTask} className="btn btn-danger ml-5">Delete This Task</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        tasks: state
    }
}

export default connect(mapStateToProps)(Task) 