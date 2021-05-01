import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import AddNewTask from './AddNewTask'
import Task from './Task'

const AllTasks = (props) => {

    // useEffect(() => {
    //     console.log("props are: ", props.tasks)
    // }, [props])

    // useEffect(() => {
    //     console.log(tasks);
    // }, [tasks])

    // const displayTasks = () => (
    //     tasks.map((task, i) => (
    //         <div key={i}>
    //             <h2>{task.title}</h2>
    //             <p>{task.description}</p>
    //             <button onClick={() => deleteTask(task.id)}>Delete Task</button>
    //         </div>
    //     ))
    // )

    // const deleteTask = async (id) => {
    //     const remainingTasks = await axios.delete(`/api/tasks?id=${id}`).then((response) => response.data);
    //     setTasks(remainingTasks)
    // }

    return (
        <div>
            <h1>AllTasks Page</h1>
            <AddNewTask />
            <Link to="/">Back To Home Page</Link>
            {props.tasks.map((task) => <Task key={task.id} {...task} />)}
            {/* {displayTasks()} */}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        tasks: state
    }
}

export default connect(mapStateToProps)(AllTasks) 