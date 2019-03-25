import React, { Component } from 'react';
import { PetRater } from './PetRater';
import imageUrls from '../imageUrls.json';
import '../css/app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PetRater imageUrls={imageUrls} />
      </div>
    );
  }
}

export default App;
