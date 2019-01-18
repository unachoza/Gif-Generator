import React, {Component} from 'react';
// import './App.css';
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
      gifResult: {},
      isLoading: false,
      gifIndex: 0,
    }

    this.makeCall = this.makeCall.bind(this);
    this.changeLoading = this.changeLoading.bind(this);
    this.nextGif = this.nextGif.bind(this)
  }
  // let apiKey = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=uaamNElL4jG37MRtb5dGkrRHt8icgto6&limit=5%22"
  makeCall(input) {
    window.fetch(`http://api.giphy.com/v1/gifs/search?q=${input}&api_key=uaamNElL4jG37MRtb5dGkrRHt8icgto6&limit=5%22`)
      .then(res => res.json())
      .then(res => { 
        this.setState({gifResult: res.data[this.state.gifIndex]})
        console.log(res.data[0])
      })

  }
  nextGif (){
    this.setState((prevState)=> ({
      gifIndex: prevState.gifIndex + 1
    }))

  }
  changeLoading(){
    if(this.state.isLoading){
      this.setState({isLoading: false})
    } else {
      this.setState({isLoading: true})
    }
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
      <h1>Find Your GIF !</h1>
      <Gif 
      makeCall={ this.makeCall } 
      nextGif={this.nextGif}

      />
      <GifList 
        changeLoading = {this.changeLoading}
        isLoading= {this.state.isLoading} 
        gifResult = {this.state.gifResult}/>

      </div>
    );
  }
}

export default App;