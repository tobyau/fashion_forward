import React, { Component } from 'react';

class Payment extends Component {
  constructor() {
    super();
    this.state = {}
  }
  
  render(){
    return(
      <div>
        <h5>Payment Method</h5>
        <form>
          <div className="form-group">
            <label for="exampleInputPassword1"><b>Card Number *</b></label>
            <input type="password" className="form-control" id="form-input" placeholder="xxxx-xxxx-xxxx-xxxx" />
          </div>
          <div className="container">
            <div className="row">
              <div className="form-group date-input col-sm">
                <label for="exampleInputPassword1"><b>Date</b></label>
                <input type="password" className="form-control" id="form-input" placeholder="MM/DD/YYYY" />
              </div>
              <div className="form-group col-sm">
                <label for="exampleInputPassword1"><b>CVC *</b></label>
                <input type="password" className="form-control" id="form-input" placeholder="123" />
              </div>
            </div>
          
          </div>
        </form>
      </div>
    );
  }
}

export default Payment;