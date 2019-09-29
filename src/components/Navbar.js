import React from 'react';
import Button from '@material-ui/core/Button';

const Navbar = () => {
  return(
    <nav className="navbar-container d-flex">
      <a href="/">
        <img alt="" src="http://www.i2symbol.com/images/abc-123/f/script_capital_f_u2131_icon_256x256.png" className="brand-logo"/>
      </a>
      <div className="categories-container">
        <a className="categories" href="/tops">Tops</a>
        <a className="categories" href="/bottoms">Bottoms</a>
        <a className="categories" href="/dresses">Dresses</a>
        <a className="categories" href="/shoes">Shoes</a>
      </div>
      <div className="ml-auto">
        <a href="/" className="clickable-icon"><i className="fas fa-shopping-bag fa-2x"></i></a>
        <Button variant="contained">
          Login
        </Button>
      </div>
    </nav>
  );
}

export default Navbar; 