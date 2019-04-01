import React, { Component } from 'react';
import { handleLogin } from './API';
import User from './User';


export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      user: null,
      err: null,
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit = event => {
    event.preventDefault();
    const {username, password} = this.state;
    handleLogin(username, password).then(user => {
      console.log(user)
      this.setState({
        user
      })
    })
      .catch(e => {
        this.setState({
          err: "Please correct username or password"
        })
      })
  }



  render() {
    const {  user } = this.state
    console.log(user)
    return (
      
      <div className="container">
        {
          user !== null ? (
            <User user={user}/>
          ) : (
            <>
            <div className="wrapper">
              <div className="inputwrapper">
                <h4>Username</h4>
                <input type="text" name="username"   value={this.state.username} placeholder="Enter a valid username" 
                  onChange={this.handleChange}/>
                <h4>Password</h4>
                <input type="password" name="password" placeholder="Enter a valid password"  value={this.state.password}
                  onChange={this.handleChange} />
              </div>
              <div className="submitbtn" >
                <button  onClick={this.handleSubmit} id="btn" type="submit">Submit</button>
              </div>
              {
                this.state.err ? <p>{this.state.err}</p> : ""
              }
            </div>
            </>
          )
        }
     </div>
    )
  }
}
