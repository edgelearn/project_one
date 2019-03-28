import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header } from './Header';
import { LeftNav } from './LeftNav';
import {Dashboard} from "./Dashboard";
import {PetRater} from "./PetRater";

import '../css/app.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <div className="appBody" >
            <LeftNav />
            <div className="contentArea" >
              <Route path="/" exact component={Dashboard} />
              <Route path="/dashboard/" component={Dashboard} />
              <Route path="/rater/" component={PetRater} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
