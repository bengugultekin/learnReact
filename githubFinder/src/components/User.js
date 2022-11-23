import React, { Component } from 'react'

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '44199167',
            name: 'Bengünur Gültekin',
            login: 'bengugultekin',
            avatar_url: "https://avatars.githubusercontent.com/u/44199167?v=4",
            html_url: "https://github.com/bengugultekin",
            followers: 9,
            blog: "www.bengugultekin.blogspot.com"
        }
    }
  render() {
    const {id, name, login, avatar_url, html_url, followers, blog} = this.state;
    return (
      <div>
        <div className='card m-2'>
            <div className="row">
                <div className="col-md-3">
                    <img src={avatar_url} alt="" className='card-img' />
                </div>
                <div className="col-md-9">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">Followers: {followers}</p>
                        <p className="card-text">Blog: {blog}</p>
                        <a href={html_url} className='btn btn-primary btn-sm'>Go Profile</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default User