import React, { Component,Fragment } from 'react'
import Navbar from './Navbar'
import Users from './Users'
import Axios from 'axios'
import Search from './Search'

export class App extends Component {
    constructor(props) {
        super(props);
        this.searchUsers = this.searchUsers.bind(this);
        this.clearUsers = this.clearUsers.bind(this);
        this.state = {
            loading: false,
            users: []
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

    clearUsers() {
        this.setState({users: []});
    }
  render() {
    return (
        <Fragment>
            <Navbar />
            <Search searchUsers={this.searchUsers} 
                    clearUsers={this.clearUsers} 
                    showClearButton = {this.state.users.length > 0 ? true:false}/>
            <Users users = {this.state.users} loading={this.state.loading}/>
        </Fragment>
    )
  }
}


export default App
