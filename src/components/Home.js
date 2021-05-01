import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Task from './Task'
import SearchedTasksApi from '../context/SearchedTasksApi'

const Home = () => {

    const [keyword, setKeyword] = useState('')
    const [searchedTasks, setSearchedTasks] = useState([])

    const handleSearchingTasks = async (e) => {
        e.preventDefault()
        const SearchedTasks = await axios.get(`http://localhost:5000/api/tasks/${keyword}`)
                            .then(response => response.data)
        setSearchedTasks(SearchedTasks)
    }

    const renderSearchedTasks = () => (
        searchedTasks.map((task) => <Task key={task.id} {...task} search="true" />)
    )
    

    return (
        <SearchedTasksApi.Provider value={{ searchedTasks, setSearchedTasks }}>
            <div className="jumbotron text-center">
                <h1>Callvita Task Management Home Page</h1>
                <Link to="alltasks" className="btn btn-primary mt-3">View All Tasks</Link>
            </div>
            
            
            <div className="container">
                <h3>Search Available Tasks</h3>
                <p>You Will Get The Task if the keyword you are searching with is on the title or the description of the task</p>
                <form onSubmit={(e) => handleSearchingTasks(e)}>
                    <input 
                        type="text" 
                        placholder="Write Search Keyword" 
                        className="form-control"
                        value={keyword} 
                        onChange={(e) => setKeyword(e.target.value)} 
                    />
                    <input type="submit" value="Search Now" className="btn btn-info mt-3" />
                </form>
                <div className="row">
                    {renderSearchedTasks()}
                </div>
            </div>
            </SearchedTasksApi.Provider>
    )
}

export default Home