import React, { Component } from 'react';
import LeftSidebar from './components/LeftSidebar';
import './App.css';
import Products from './components/Products';
import Header from './components/Header';


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
      < Header/>
        <div className="main-wrapper">
          <LeftSidebar />
          < Products items={this.state.items}/>
        </div>
      </>
    )
  }
}

export default App;
