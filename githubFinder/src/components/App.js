import React, { Component,Fragment } from 'react'
import Navbar from './Navbar'
import Users from './Users'
import Axios from 'axios'

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }
    componentDidMount() {
        Axios
        .get('https://api.github.com/users')
        .then(response => this.setState({users: response.data}));
    }
  render() {
    return (
        <Fragment>
            <Navbar />
            <Users users = {this.state.users}/>
        </Fragment>
    )
  }
}


export default App
