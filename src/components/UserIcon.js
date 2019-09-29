import React, { Component } from 'react';

class UserIcon extends Component {
  render() {
    return(
      <div className="dropdown show">
        <a className="btn btn-secondary dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {this.props.fname + this.props.lname}
          {console.log(this.props)}
        </a>

        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <a className="dropdown-item" href="/">Profile</a>
          <a className="dropdown-item" href="/">Logout</a>
        </div>
      </div>
    );
  }
}

export default UserIcon;