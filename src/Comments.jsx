import React from 'react';
import Comment from './comment';
const Comments = ({comments})=>{
 const commentList = comments.map(comment=>(
     <Comment comment = {comment}></Comment>
    
 ));
 return(
     <ul>
         {commentList}
     </ul>
 )

}
export default Comments;