import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function makeCall() {
  window.fetch("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=uaamNElL4jG37MRtb5dGkrRHt8icgto6&limit=5%22")
    .then(res => res.json())
    .then(res => getData(res))
}

class App extends Component {
  let apiKey = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=uaamNElL4jG37MRtb5dGkrRHt8icgto6&limit=5%22"
  render() {
    return (
        <div>
        <h1>My React App</h1>
      </div>
    );
  }
}

export default App;
