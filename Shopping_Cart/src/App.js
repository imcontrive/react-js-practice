import React, { Component } from 'react';
import LeftSidebar from './components/LeftSidebar';
import './App.css';
import Products from './components/Products';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: []
    }
  }
  componentDidMount = () => {
    fetch("https://react-shopping-cart-67954.firebaseio.com/products.json")
    .then(res => res.json())
    .then(({products} )=> 
      this.setState({
        items : products
      })
    )}

  render() {
    return (
      <>
        <LeftSidebar />
        < Products items={this.state.items}/>
      </>
    )
  }
}

export default App;
