import React,{Component} from 'react';
import Reply from './Reply';
 
class Comment extends Component{
constructor(props){
    super(props);
    this.state = {
      replies:[]
    }
 
}
componentDidMount(){
  this.updateReplies();
this.timer = setInterval(this.updateReplies, 5000);

}

updateReplies = ()=>{
this.setState({
  replies:this.props.comment.replies
})

}


render(){
     
    return(
        <div className="comment">
        <div className = "commenter">{this.props.comment.name}</div>
        <div className="commentdate">{this.props.comment.timestamp}</div>
        <div className="commentdetails">{this.props.comment.comment}</div>
        
     


      </div>
    );
    }





}
export default Comment;