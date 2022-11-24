import React, { Component } from 'react'

export class Search extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            keyword: ''
        }
    }
    onChange(event) {
        this.setState({
            keyword: event.target.value
        })
    }
    onSubmit(event) {
        event.preventDefault();
        if(this.state.keyword === '') {
            this.props.setAlert('Lütfen bir anahtar kelime giriniz..', 'danger');
            console.log("null");

        } else {
            this.props.searchUsers(this.state.keyword);
            this.setState({keyword: ''});
            
        }
    }
    render() {
        return (
            <div className="container my-3">
                <form onSubmit={this.onSubmit}>
                    <div className="input-group">
                        <input type="text" value={this.state.keyword} onChange={this.onChange} className="form-control" />
                        <div className="input-group-append">
                            <button className="btn btn-primary btn-sm">Search</button>
                        </div>
                    </div>
                </form>
                {
                    this.props.showClearButton && 
                    <button onClick={this.props.clearUsers} className="btn btn-secondary btn-sm btn-block mt-2">Clear Results</button>
                }
            </div>
        )
  }
}

export default Search
