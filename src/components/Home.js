import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {


    // useEffect(() => {
    //     const getAllTasks = async () => {
    //         const tasks = await axios
    //           .get("/api/tasks")
    //           .then((response) => response.data);
    //           setTasks(tasks);
    //       };
    //       getAllTasks();
    // }, [])

    // useEffect(() => {
    //     console.log(tasks);
    // }, [tasks])



    

    return (
        <div>
            <h1>Home Page</h1>
            <Link to="alltasks">All Tasks</Link>
        </div>
    )
}

export default Home