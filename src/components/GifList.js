  import React, {Component} from 'react'

  class GifList extends Component {
        constructor (props){
        super(props) 
        
        }
        componentDidMount(){
            console.log(this.props.gifResult)
        }
    render(){
        const img = this.props.gifResult.embed_url ? this.props.gifResult.embed_url : ""
        return(
            <div>
                <iframe src={img}/>
            </div>
        )
    }
      }
  
export default GifList;