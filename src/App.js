import React, {Component} from 'react';
import './App.css';
import Gif from "./components/Gif"
import GifList from "./components/GifList"



/* build a search form
submit button that handles search event 
the event is querying the API 
rendering API data 
*/



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gifResult: {}
    }

    this.makeCall = this.makeCall.bind(this);
  }
  // let apiKey = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=uaamNElL4jG37MRtb5dGkrRHt8icgto6&limit=5%22"
  makeCall(input) {
    window.fetch(`http://api.giphy.com/v1/gifs/search?q=${input}&api_key=uaamNElL4jG37MRtb5dGkrRHt8icgto6&limit=5%22`)
      .then(res => res.json())
      .then(res => { 
        this.setState({gifResult: res.data[0]})
        console.log(res.data[0])
      })

  }

  onClick() {
    this.setState(state => ({
  
    }))
  }

  func(value) {
    return (
      <div className={ value } />
    )
  }
  

  render() {


    return ( 
      <div className="main">
      <h1>Find Your GIF</h1>
      <Gif makeCall={ this.makeCall } />
      <GifList gifResult = {this.state.gifResult}/>

      </div>
    );
  }
}

export default App;