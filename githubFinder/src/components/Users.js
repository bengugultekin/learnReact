import React, { Component } from 'react'
import User from './User'

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    login: "onurgurkangultekin",
                    id: 8975671,
                    avatar_url: "https://avatars.githubusercontent.com/u/8975671?v=4",
                    html_url: "https://github.com/onurgurkangultekin",
                    name: "Onur Gürkan GÜLTEKİN",
                    blog: "http://onurgultekin.blogspot.com.tr/",
                    followers: 10,
                  },
                  {
                    login: "bengugultekin",
                    id: 44199167,
                    avatar_url: "https://avatars.githubusercontent.com/u/44199167?v=4",
                    html_url: "https://github.com/bengugultekin",
                    name: "Bengünur Gültekin",
                    blog: "www.bengugultekin.blogspot.com",
                    followers: 9
                  },
                  {
                    login: "sadikturan",
                    id: 19492591,
                    avatar_url: "https://avatars.githubusercontent.com/u/19492591?v=4",
                    html_url: "https://github.com/sadikturan",
                    name: "Sadık Turan",
                    blog: "sadikturan.com",
                    followers: 3984
                  },
                  {
                    login: "mojombo",
                    id: 1,
                    avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
                    html_url: "https://github.com/mojombo",
                  },
                  {
                    login: "defunkt",
                    id: 2,
                    avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
                    html_url: "https://github.com/defunkt",
                  },
                  {
                    login: "pjhyett",
                    id: "3",
                    avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
                    html_url: "https://github.com/pjhyett",
                  },
                  
                  
            ]
        }
    }
  render() {
    return (
      <div className='container mt-3'>
        <div className="row">
            {this.state.users.map(user => (
                <User user={user}/>
            ))}
        </div>
      </div>
    )
  }
}

export default Users
