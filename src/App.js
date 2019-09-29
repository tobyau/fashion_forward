import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import Navbar from "./components/Navbar";
import Carousel from './components/Carousel';
import ProductPage from './components/ProductPage';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Carousel} />
        <Route exact path="/(tops|bottoms|dresses|shoes)" component={ProductPage} />
      </div>
    </Router>
  );
}

export default App;
