import React, { Component } from 'react'

export default class CartItems extends Component {
  
  render() {
    console.log(this.props);
    return (
      <div>
        {/* filtered list */}
        <div className="isFilter">
          <h2>Sizes:</h2>
          <div className="size-items">
            <span>XS</span>
            <span>S</span>
            <span>M</span>
            <span>ML</span>
            <span>L</span>
            <span>XL</span>
            <span>XXL</span>
            <p>Leave a star on Github if this repository was useful :)</p>
             <div className="btn">
              <button>⭐Star</button>
              <button className="btn2">500</button>
             </div>
          </div>
        </div>
      </div>
    )
  }
}
