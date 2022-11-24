import React, { Component,Fragment } from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Navbar from './Navbar'
import Users from './Users'
import Axios from 'axios'
import Search from './Search'
import Alert from './Alert'
import About from './About';
import UserDetails from './UserDetails';

export class App extends Component {
    constructor(props) {
        super(props);
        this.searchUsers = this.searchUsers.bind(this);
        this.clearUsers = this.clearUsers.bind(this);
        this.setAlert = this.setAlert.bind(this);
        this.clearAlert = this.clearAlert.bind(this);
        this.getUser = this.getUser.bind(this);
        this.getUserRepos = this.getUserRepos.bind(this);
        this.state = {
            loading: false,
            users: [],
            user: {},
            repos: [],
            alert: null
        }
    }
    componentDidMount() {
        this.setState({loading: true});
        setTimeout(() => {
            Axios
        .get('https://api.github.com/users')
        .then(response => this.setState({users: response.data, loading:false}));
        }, 1000);
        
    }
    searchUsers(keyword) {
        this.setState({loading: true});
        setTimeout(() => {
            Axios
        .get(`https://api.github.com/search/users?q=${keyword}`)
        .then(response => this.setState({users: response.data.items, loading:false}));
        }, 1000);
    }

    getUser(username) {
        this.setState({loading: true});
        setTimeout(() => {
            Axios
        .get(`https://api.github.com/users/${username}`)
        .then(response => this.setState({user: response.data, loading:false}));
        }, 1000);
    }

    getUserRepos(username) {
        this.setState({loading: true});
        setTimeout(() => {
            Axios
        .get(`https://api.github.com/users/${username}/repos`)
        .then(response => this.setState({repos: response.data, loading:false}));
        }, 1000);
    }

    clearUsers() {
        this.setState({users: []});
    }

    setAlert(msg, type){
        this.setState({alert: {msg, type}});
        setTimeout(() => {
            this.setState({alert: null});
        }, 3000)
    }

    clearAlert(){
        this.setState({alert: null});
    }
    render() {
        return (
            <BrowserRouter>
                <Navbar />
                <Alert alert = {this.state.alert} clearAlert={this.clearAlert}/>
                <Switch>
                    <Route exact path="/" render={
                        props => (
                            <>
                                <Search searchUsers={this.searchUsers} 
                                        clearUsers={this.clearUsers} 
                                        showClearButton = {this.state.users.length > 0 ? true:false}
                                        setAlert={this.setAlert}/>
                                <Users users = {this.state.users} loading={this.state.loading}/>
                            </>
                        )
                    } />

                    <Route path="/about" component={About} />
                    <Route path="/users/:login" render={props => (
                        <UserDetails {...props} 
                        getUser= {this.getUser} 
                        user={this.state.user} 
                        loading={this.state.loading}
                        getUserRepos={this.getUserRepos}
                        repos = {this.state.repos}/>
                        )}/>

                </Switch>
            </BrowserRouter>
        )
  }
}


export default App

