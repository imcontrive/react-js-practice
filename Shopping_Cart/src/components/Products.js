import React, { Component } from 'react'

export default class Products extends Component {
  render() {
    function twoDigits(num){
      return num.toFixed(2);
    }
    const {items} = this.props;
    // console.log(items);
    return (
      <div className="Products-wrapper">
       {
         items.map(data =>
          
          <>
          <div>
          {/* {data.availableSizes.map( d => console.log(d,"dfghjk"))} */}
          <h4>{data.title}</h4>
          <h5>{data.currencyFormat}{data.price}</h5>
          <h6>or{data.installments}X{twoDigits(data.price/data.installments)}</h6>
          </div>
          {/* <p>{data.description}</p> */}
          <button className="addToCart">Add To Cart</button>
          </>
         )
       }
      </div>
    )
  }
}
