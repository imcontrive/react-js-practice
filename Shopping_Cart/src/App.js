import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import User from './components/User';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: {
        firstName : "Ankit",
        lastName : "Sinha",
        img: `https://pbs.twimg.com/profile_images/1019277956286304256/DBOt4zgP_400x400.jpg`
      }
    }
  }

 
  render() {
    const { user } = this.state;
    return (
      <>
      <Login />
      </>
    )
  }
}

export default App;
