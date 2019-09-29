import React, { Component } from "react";
import ContactForm from './ContactForm';
import OrderSummary from './OrderSummary';

class Checkout extends Component {
  constructor() {
    super();
    this.state = {}
  }
  
  render() {
    return(
      <div className="form-container row">
        <div className="col-8">
          <ContactForm />
        </div>
        <div className="col-4">
          <OrderSummary />
        </div>
      </div>
    );
  }
}

export default Checkout; 