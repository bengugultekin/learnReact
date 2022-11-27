import React, { Component } from 'react'
import { Link } from 'react-router-dom';

const User = ({users}) => {
  const {login, avatar_url, html_url} = users;
    return (
        <div className="col-md-4 col-sm-6 col-lg-3">
            <div className="card mt-2">
                <img src={avatar_url} alt="" className="img-fluid" />
                <div className='card-body'>
                    <h5 className="card-title text-center">Username: {login}</h5>
                    <Link to={`/users/${login}`} className="btn btn-primary btn-sm btn-block">Show Details</Link>
                    {/* <a href={html_url} className="btn btn-primary btn-sm btn-block">Go Github</a> */}
                </div>
            </div>
        </div>
    )
}

export default User
