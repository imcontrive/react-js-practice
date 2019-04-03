import React, { Component } from 'react';
import './App.css';
import CartItems from './components/CartItems';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: null
    }
  }
  componentDidMount = () => {
    fetch("https://react-shopping-cart-67954.firebaseio.com/products.json")
    .then(res => res.json())
    .then(data => 
      this.setState({
        items : data
      })
    )}
  
  render() {
    return (
      <CartItems items={this.state.items} />
    )
  }
}

export default App;
