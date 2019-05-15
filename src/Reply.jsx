import React from 'react';
const Reply = (props) =>{
    return (
<div class="reply">
        <div class = "commenter">{this.props.comment.name}</div>
        <div class="commentdate">{this.props.comment.timestamp}</div>
        <div class="commentdetails">{this.props.comment.detail}</div>
        
       

      </div>

    );
}
export default Reply;