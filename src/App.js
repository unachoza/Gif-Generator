import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Gif from "./components/Gif"
import GifList from "./components/GifList"

function makeCall() {
  window.fetch("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=uaamNElL4jG37MRtb5dGkrRHt8icgto6&limit=5%22")
    .then(res => res.json())
    .then(res => getData(res))
}

function handleClick (){ 
  this.setState(state => ({

}


class App extends Component {
  // let apiKey = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=uaamNElL4jG37MRtb5dGkrRHt8icgto6&limit=5%22"
  render() {
    return (
        <div>
        <h1>My React App</h1>
        <button onClick = {}>Generate Gif</button>
      </div>
    );
  }
}

ReactDOM.render(<div/>, document.getElementById('root'))
