import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { NavLink } from "react-router-dom";
import axios from 'axios';

import UserIcon from './UserIcon'

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      login: false,
      response: {}
    }
  }
  
  handleLogin = () => {
    axios.get("https://https://fashion-forward.herokuapp.com/dashboard")
      .then(res => {
        // console.log(res);
        this.setState({ 
          login: true,
          response: res
        })
      })
      .catch(err => console.error(err));
  }
  
  
  render(){
    const LoginButton = () => {
      return(
        <Button variant="contained" onClick={this.handleLogin} href="http://localhost:3001/welcome">
          Login
        </Button>
      );
    }
    
    const LoginAuth = () => {
      if(this.state.login === false) {
        return <LoginButton />
      }
      else {
        return <UserIcon props={this.state.response}/>
      }
    }
    
    return(
      <nav className="navbar-container d-flex">
        <a href="/">
          <img alt="" src="http://www.i2symbol.com/images/abc-123/f/script_capital_f_u2131_icon_256x256.png" className="brand-logo"/>
        </a>
        <div className="categories-container">
          <NavLink exact to="/tops" activeClassName="active" className="categories">Tops</NavLink>
          <NavLink exact to="/bottoms" activeClassName="active" className="categories">Bottoms</NavLink>
          <NavLink exact to="/dresses" activeClassName="active" className="categories">Dresses</NavLink>
          <NavLink exact to="/shoes" activeClassName="active" className="categories">Shoes</NavLink>
        </div>
        <div className="ml-auto">
          <NavLink exact to="/checkout" className="clickable-icon"><i className="fas fa-shopping-bag fa-2x"></i></NavLink>
          {LoginAuth()}
        </div>
      </nav>
    );
  }
}

export default Navbar; 