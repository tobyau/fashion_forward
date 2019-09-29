import React, { Component } from 'react';

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {}
  }
  
  render(){
    return(
      <div>
        <h5>Contact Information</h5>
        <form>
          <div className="form-group">
            <label for="exampleInputPassword1"><b>First Name</b></label>
            <input type="password" className="form-control" id="form-input" placeholder="" />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1"><b>Last Name</b></label>
            <input type="password" className="form-control" id="form-input" placeholder="" />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1"><b>Address</b></label>
            <input type="password" className="form-control" id="form-input" placeholder="" />
          </div>
        </form>
      </div>
    );
  }
}

export default ContactForm;