import React, { Component } from 'react'

export default class Products extends Component {
  render() {
    function twoDigits(num){
      return num.toFixed(2);
    }
    const {items} = this.props;
    // console.log(items);
    return (
      <div  className="Products-wrapper">
       {
         items.map(data =>
          
          <>
          <div className="products">
          <img src={`https://raw.githubusercontent.com/jeffersonRibeiro/react-shopping-cart/master/src/static/products/${data.sku}_1.jpg`}  width="100%" alt=""/>
          <h4  className="text-center title">{data.title}</h4>
          <hr></hr>
          <h5  className="text-center">{data.currencyFormat}{data.price}<span className="installments">or{data.installments}X{twoDigits(data.price/data.installments)}</span></h5>
          {/* <h6  className="text-center"></h6> */}
          <button className="text-center addToCart ">Add To Cart</button>
          </div>
          </>
         )
       }
      </div>
    )
  }
}
