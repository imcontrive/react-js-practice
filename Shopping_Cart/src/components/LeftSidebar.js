import React, { Component } from 'react'

export default class LeftSidebar extends Component {
  render() {
    return (
      <div>
        <div className="isFilter">
        <h2>Sizes:</h2>
        <div className="size-items">
          <span className="circle-span">XS</span>
          <span className="circle-span">S</span>
          <span className="circle-span">M</span>
          <span className="circle-span">ML</span>
          <span className="circle-span">L</span>
          <span className="circle-span">XL</span>
          <span className="circle-span">XXL</span>
          <p>Leave a star on Github if this repository was useful :)</p>
        </div>
        </div>
      </div> 
    )
  }
}
