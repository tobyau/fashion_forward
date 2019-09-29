import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Navbar from "./components/Navbar";
import Carousel from './components/Carousel';
import ProductPage from './components/ProductPage';
import Checkout from './components/Checkout';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Carousel} />
        <Route exact path="/(tops|bottoms|dresses|shoes)" component={ProductPage} />
        <Route exact path="/checkout" component={Checkout} />
      </div>
    </Router>
  );
}

export default App;
