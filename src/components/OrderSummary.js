import React, { Component } from "react";
import axios from "axios";

class OrderSummary extends Component {
  constructor() {
    super();
    this.state = {}
    
    this.requestService = this.requestService.bind(this);
  }


  requestService(){
    
    axios.get("")
    
  }


  render() {
    return(
      <div>
          <h5>Order Summary</h5>
          <div className="summary-container">
            <div className="order-container">
            <div class="content">
            <img src={require(`../imgs/tops/1.png`)} alt="" className="order-item-img"/>
              <h4>Product Name</h4>
              <p>Product Desciption</p>
              <p>Quantity: 1</p>
              <p>Price: $79.99</p>
            </div>
              <hr></hr>
              <div className="form-group">
               <input type="text" placeholder="PROMO CODE" className="promo-control form-control"/>
               <button onClick = {this.requestService()}>Apply</button>   
              </div>
              <div className="subtotal">
                <div className="pricing">
                  <p className="moveLeft ">Subtotal</p>
                  <p className="moveRight subtotal-strike">$79.99</p>
                </div>
                <div className="pricing">
                  <p className="moveLeft"></p>
                  <p className="moveRight savings">-$10</p>
                </div>
                <div className="pricing">
                  <p className="moveLeft">Delivery</p>
                  <p className="moveRight">$5.00</p>
                </div>
                <div className="pricing">
                  <p className="moveLeft"><b>Total</b></p>
                  <p className="moveRight"><b>$74.99</b></p>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default OrderSummary; 