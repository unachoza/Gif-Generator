  import React, {Component} from 'react'

  class GifList extends Component {
        constructor (props){
        super(props) 

        this.hasGifResult = this.hasGifResult.bind(this);
        
        }
        componentDidMount(){
            
        }
        hasGifResult(){
            if(this.props.gifResult){
                this.props.changeLoading()
                }
            }
            
        componentDidUpdate(prevProps,prevState){
            if(prevProps.gifResult.embed_url !== this.props.gifResult.embed_url){
                this.hasGifResult()
            setTimeout(()=> {
                this.props.changeLoading()
            },1500)
            }
        }
 
    
    render(){
        const img = this.props.gifResult.embed_url ? this.props.gifResult.embed_url : ""
        let loadingMessage;
        //when 'loadingmessage' changes,
        if(this.props.isLoading){
            loadingMessage = (<h1>Please wait while we fetch your gif ... </h1>)
        } else {
            loadingMessage = (<iframe src={img}/>)
        }
        
        return(
            <div>
                {loadingMessage}
            </div>
        )
    }
      }
  
export default GifList;