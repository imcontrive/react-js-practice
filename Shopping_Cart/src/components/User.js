import React, { Component } from 'react';
import Login from './Login';

export default class User extends Component {
  state = {
    userInfo: {
      firstName :"",
      lastName : "",
      img: ''
    }
  }
  handleLogOut = (e) => {
    const { user } = this.props
    const { userInfo } = this.state;
    console.log(user, 'in user.js');
    console.log(userInfo, 'checking user');
    this.setState({
     user: userInfo
    })
    console.log("log out")
  }
  render() {
    const { user } = this.props;
    const { userInfo } = this.state;
    console.log(userInfo, 'in user');
    return (
      <div>
        {
          userInfo !== null ? (
            <div className="userinfo">
              <div>{user.firstName + ' '+ user.lastName}</div>
              <img src={user.img} alt=""/>
              <div><button onClick={this.handleLogOut}>Log Out</button></div>
            </div>
          ) : <Login />
        }
      </div>
    )
  }
}
