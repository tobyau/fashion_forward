import React, { Component } from "react";

class OrderSummary extends Component {
  constructor() {
    super();
    this.state = {}
  }
  
  render() {
    return(
      <div>
          <h5>Order Summary</h5>
          <div className="summary-container">
            <div className="order-container">
              <img src={require(`../imgs/tops/1.png`)} alt="" className="order-item-img"/>
            </div>
          </div>
      </div>
    );
  }
}

export default OrderSummary; 