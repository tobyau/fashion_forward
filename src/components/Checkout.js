import React, { Component } from "react";
import ContactForm from './ContactForm';
import Payment from './Payment';
import OrderSummary from './OrderSummary';

import ConfettiPage from './Confetti';

class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      section: false,
      section_button_text: "Next Section",
      confirmation: false,
    }
  }
  
  handleClick = () => {
    if(this.state.section === false) {
      this.setState({
        section: true,
        section_button_text: "Confirm"
      })
    }
    else {
      this.setState({
        section_button_text: "Successfully Ordered!",
        confirmation: true
      })
    }
  }
  
  render() {
    
    const toggleConfetti = () => {
      if(this.state.confirmation === true) {
        return (
          <ConfettiPage />
        );
      }
    }
    
    const handleSections = () => {
      if(this.state.section === true) {
        return (<Payment />)
      }
      else {
        return <ContactForm />
      }
    }
    
    return(
      <div>
        <p className="section-indicator">Shipping Address > Payment > Confirm</p>
        <div className="form-container row">
          <div className="col-8">
            <div className="checkout-section">
              <div>{handleSections()}</div>
            </div>
            <button type="button" className="btn btn-primary btn-lg btn-block next-section-button" onClick={this.handleClick}>{this.state.section_button_text}</button>
          </div>
          <div className="col-4">
            <OrderSummary />
          </div>
        </div>
        {toggleConfetti()}
      </div>
    );
  }
}

export default Checkout; 