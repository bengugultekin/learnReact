import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Navbar from './Navbar'
import Users from './Users'
import Axios from 'axios'
import Search from './Search'
import Alert from './Alert'
import About from './About';
import UserDetails from './UserDetails';
import GithubState from '../context/githubState';

const App = () => {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState(null)
    const [repos, setRepos] = useState([])

    useEffect(() => {
        setLoading(true);
        console.log("getting users");
        setTimeout(() => {
            Axios
        .get(`https://api.github.com/users`)
        .then(response => {
            setUsers(response.data);
            setLoading(false);
        });
        }, 1000);
    }, [])

    const getUser = (username) => {
        setLoading(true);
        setTimeout(() => {
            Axios
        .get(`https://api.github.com/users/${username}`)
        .then(response => {
            setUser(response.data);
            setLoading(false);
        });
        }, 1000);
    }

    const getUserRepos = (username) => {
        setLoading(true);
        setTimeout(() => {
            Axios
        .get(`https://api.github.com/users/${username}/repos`)
        .then(response => {
            setRepos(response.data);
            setLoading(false);
        });
        }, 1000);
    }

    const clearUsers = () => {
        setUsers([]);
    }

    const showAlert = (msg, type) => {
        setAlert({msg, type})
        setTimeout(() => {
            setAlert(null);
        }, 3000)
    }

    const clearAlert = () => {
        setAlert(null);
    }

    return (
        <GithubState>
            <BrowserRouter>
            <Navbar />
            <Alert alert = {alert} clearAlert={clearAlert}/>
            <Switch>
                <Route exact path="/" render={
                    props => (
                        <>
                            <Search clearUsers={clearUsers} 
                                    showClearButton = {users.length > 0 ? true:false}
                                    setAlert={showAlert}/>
                            <Users users = {users} loading={loading}/>
                        </>
                    )
                } />

                <Route path="/about" component={About} />
                <Route path="/users/:login" render={props => (
                    <UserDetails 
                    {...props} 
                    getUser= {getUser} 
                    user={user} 
                    loading={loading}
                    getUserRepos={getUserRepos}
                    repos = {repos}/>
                    )}/>

                </Switch>
            </BrowserRouter>
        </GithubState>
        
    )
    
}


export default App

