import React, { Component } from 'react'

class UserDetails extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login);
    }
    render() {
        return (
        <div>
            <h1>{this.props.match.params.login}</h1>
        </div>
        )
    }
}

export default UserDetails
