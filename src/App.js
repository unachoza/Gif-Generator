import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Gif from "./components/Gif"
import GifList from "./components/GifList"

// function makeCall() {
//   window.fetch("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=uaamNElL4jG37MRtb5dGkrRHt8icgto6&limit=5%22")
//     .then(res => res.json())
//     .then(res => getData(res))
// }




function onClick (){ 
  this.setState(state => ({

}


  class App extends Component {
  // let apiKey = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=uaamNElL4jG37MRtb5dGkrRHt8icgto6&limit=5%22"
  render() {
    return (
        <div>
        <h1>My React App</h1>
        {/* create the form to get the value of submission (state?) */}
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {/* Button with onclick to recieve value (state) 
        need to take value and pass it back up to App
        child to parent */}
        <button onClick ={}>Generate Gif</button>
      </div>
    );
  }
}

// React.render(<div/>, document.getElementById('app'))
