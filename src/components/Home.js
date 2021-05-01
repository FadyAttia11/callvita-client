import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Task from './Task'

const Home = () => {

    const [keyword, setKeyword] = useState('')
    const [searchedTasks, setSearchedTasks] = useState([])


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


    const handleSearchingTasks = async (e) => {
        e.preventDefault()
        const SearchedTasks = await axios.get(`http://localhost:5000/api/tasks/${keyword}`)
                            .then(response => response.data)
        setSearchedTasks(SearchedTasks)
    }

    const renderSearchedTasks = () => (
        searchedTasks.map((task) => <Task key={task.id} {...task} />)
    )
    

    return (
        <div>
            <h1>Home Page</h1>
            <Link to="alltasks">View All Tasks</Link>
            <h3>Search Available Tasks</h3>
            <p>You Will Get The Task if the keyword you are searching with is on the title or the description of the task</p>
            <form onSubmit={(e) => handleSearchingTasks(e)}>
                <input 
                    type="text" 
                    placholder="Write Search Keyword" 
                    value={keyword} 
                    onChange={(e) => setKeyword(e.target.value)} 
                />
                <input type="submit" value="Search Now" />
            </form>
            {renderSearchedTasks()}
        </div>
    )
}

export default Home