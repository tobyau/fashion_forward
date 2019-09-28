import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import Navbar from "./components/Navbar";
import Carousel from './components/Carousel';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Carousel />
        {/* <Route exact path="/" component */}
      </div>
    </Router>
  );
}

export default App;
