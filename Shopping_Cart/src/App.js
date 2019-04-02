import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: null
    }
  }
  componentDidMount = () => {
    fetch(`https://react-shopping-cart-67954.firebaseio.com/products.json`).
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
