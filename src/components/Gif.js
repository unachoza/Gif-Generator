import React, {Component} from 'react'

 class Gif extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
        this.captureData = this.captureData.bind(this);
    }
    captureData (e){
        this.setState({ text: e.target.value }) 
    }

    render() {
        
        return (
            <div>
                <input placeholder = "type a feeling"onChange={this.captureData} type="text"/>
                <button onClick={() => this.props.makeCall(this.state.text) }>Submit</button>
            </div>
        )
    }
}


export default Gif;