import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from './Header';
import { LeftNav } from './LeftNav';

import '../css/app.css';
import imageUrls from '../imageUrls.json';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <div className="appBody" >
            <LeftNav />
            <div className="contentArea" >
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
