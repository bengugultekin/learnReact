import React, { Component,Fragment } from 'react'
import Navbar from './Navbar'
import Users from './Users'
import Axios from 'axios'

export class App extends Component {
    constructor(props) {
        super(props);
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
        }, 3000)
        
    }
  render() {
    return (
        <Fragment>
            <Navbar />
            <Users users = {this.state.users} loading={this.state.loading}/>
        </Fragment>
    )
  }
}


export default App
