import React,{Component} from 'react';
import Article from './Article';
import Comment from './comment';
import {getArticleDetails,postLikes,getLikes,postComment} from './services';
import './App.css';


class Articles extends Component{
  constructor(props){
      super(props);
      this.state = {
          showArticles:true,
          
          articleDetails:{
              
          },
          likes:0,
          liked:false,
          commentername:"",
          comment:"",
          buttondisabled:true

          

      }
      this.handleArticleClick = this.handleArticleClick.bind(this);
      this.handleLikeClick = this.handleLikeClick.bind(this);
      this.getCommentername = this.getCommentername.bind(this);
      this.getComment = this.getComment.bind(this);
      this.addComment = this.addComment.bind(this);
     
     
  }
  componentDidMount(){
    
      this.timer = setInterval(this.getInitialLikes, 5000);
    
  
  }
  
  handleArticleClick = (title) =>{
      
      
    getArticleDetails(title).then(result=>{
      this.setState({
      showArticles:false,
      articleDetails:result,
      likes:result.likes
      
      })
    });
  }
  handleLikeClick =(title,liked)=>{
      postLikes(title,liked).then(result=>{
      
        this.setState({
          likes: result,
          liked: !this.state.liked
        });
      });
      
  }
  getInitialLikes =()=>{
    if(!this.state.showArticles){
      getLikes(this.state.articleDetails.title).then(result=>{
        this.setState({
          likes:result
        });
     
     
        });
    }
  

  };
  getCommentername = (event) =>{
     event.preventDefault();
     this.setState({
       commentername:event.target.value
     });

  };
  getComment = (event)=>{
   event.preventDefault();
   this.setState({
    comment:event.target.value
   });
   if(event.target.value===''){
    this.setState({
      buttondisabled:true
    })
   }
   else{
    this.setState({
      buttondisabled:false,
      
    })
   }
  
  };

  addComment = (event) =>{
    event.preventDefault();
   const name = this.state.commentername;
   const comment = this.state.comment;
   const title = this.state.articleDetails.title;
   postComment(name,comment,title);
   this.setState({
    commentername:'',
    comment:'',
    buttondisabled:true
  });
   console.log("name is" + this.state.commentername);

  };


  render(){
    const articleList = this.props.blogposts.map(
        article=>(
            <li key = {article.title}>
               
               <Article article={article} addClick = {this.handleArticleClick}></Article>
            </li>
        )
        
        );
       
        if(this.state.showArticles){
            return(
              
              <div>
                <ul className="articles">
                {articleList}
              </ul>
              <div className="newsletteretall">
    <div className="newsletterdiv">
    <p className = "newslettertitle"><strong>Newsletter</strong></p>
    <form>
      <input className = "newsletterinput" name="Email" placeholder="Enter Email"></input>
      <button className="subscribebutton">Subscribe</button>
    </form>
    </div>
  <div className="popular-post">
    <p className = "poppost-title">Popular Posts</p>
    <div className="post">
      <img className ="popular-post-image"src="https://wallpaperstream.com/wallpapers/full/spring-nature/Colorful-Park-Spring-Nature-HD-Wallpaper.jpg"></img>
      <p className="postheading">Vel aliquam quis, nulla pede mi commodo no tristique nam hac luctus torquen</p>
    </div>

  
   
    
    <div className="post">
      <img className ="popular-post-image"src="https://wallpaperstream.com/wallpapers/full/spring-nature/Colorful-Park-Spring-Nature-HD-Wallpaper.jpg"></img>
      <p className="postheading">Vel aliquam quis, nulla pede mi commodo no tristique nam hac luctus torquen</p>
    </div>


   
    
    <div className="post">
      <img className ="popular-post-image"src="https://wallpaperstream.com/wallpapers/full/spring-nature/Colorful-Park-Spring-Nature-HD-Wallpaper.jpg"></img>
      <p className="postheading">Vel aliquam quis, nulla pede mi commodo no tristique nam hac luctus torquen</p>
    </div>


   
   
    
</div>
 
  </div>
              </div>
            );
        }
        let liked;
        let buttonclass = "likebuttongreen";
        let likeorlikes;
        if(this.state.likes>1||this.state.likes ===0){
          likeorlikes = "likes";
        }
        else{
          likeorlikes = "like";
        }
        
        if(this.state.liked){
          liked = "Unlike";
          buttonclass = "likebuttonblue";
          
        }
        else{
          liked = "Like";
          buttonclass = "likebuttongreen";

        }
       
        const commentList = this.state.articleDetails.comments.map(
          comment=>(
           <li key = {comment.name}>
             <Comment comment = {comment}></Comment>
 
           </li>
 
           )
 
         );

    return(
        <div className = "articledetaildiv">
        
	<div className="blogimagediv">
  
	<img className ="blogimage" src="https://cdn.wonderfulengineering.com/wp-content/uploads/2016/01/nature-wallpapers-38.jpg" alt="secondimage"></img>
</div>

  <div class = "articleparagraphdiv">
  <p className = "articleheading"><h1>{this.state.articleDetails.title}</h1></p>
  <div class="authorandtime">
      <div class="author">
        Mark Dice
      </div>
      <div class="time">
        {this.state.articleDetails.timestamp}
      </div>
    </div>
     <p className="articledetailparagraph">{this.state.articleDetails.blogpost}</p>
     <p className="articledetailparagraph" >{this.state.articleDetails.blogpost}</p>
     <p className="articledetailparagraph">{this.state.articleDetails.blogpost}</p>
     <p className="articledetailparagraph">{this.state.articleDetails.blogpost}</p>
     <p className="articledetailparagraph">{this.state.articleDetails.blogpost}</p>
     <p className="articledetailparagraph" >{this.state.articleDetails.blogpost}</p>
     <div className="likesdiv">
	<p className ="nooflikes">{this.state.likes} {likeorlikes}</p>
        <button className={buttonclass} onClick={()=>this.handleLikeClick(this.state.articleDetails.title,this.state.liked)}>
          {liked}</button>
        
      </div>
     <ul className = "comments">
     <p>{commentList.length} comments</p>
       {commentList}
     </ul>
     <div>
      <h5>Leave a Reply</h5>
      <div class="newcommentdiv">
    <form class= "newcommentform" action = "/comments" method = "POST" onSubmit={this.addComment}>
      <input class = "newcommentinput" name = "name" placeholder = "ENTER NAME" onChange ={this.getCommentername} value={this.state.commentername}></input>
      <textarea class =  "commentarea"name = "comment" placeholder = "MESSAGE" onChange = {this.getComment} value={this.state.comment}></textarea>
      <button class ="commentbutton" type="submit" disabled = {this.state.buttondisabled}>POST COMMENT</button>
     </form>
     </div>
     </div>
     
     </div>  
     <div className="newsletteretalldetails">
    <div className="newsletterdiv">
    <p className = "newslettertitle"><strong>Newsletter</strong></p>
    <form>
      <input className = "newsletterinput" name="Email" placeholder="Enter Email"></input>
      <button className="subscribebutton">Subscribe</button>
    </form>
    </div>
  <div classNAme="popular-post">
    <p className = "poppost-title">Popular Posts</p>
    <div className="post">
      <img className ="popular-post-image"src="https://wallpaperstream.com/wallpapers/full/spring-nature/Colorful-Park-Spring-Nature-HD-Wallpaper.jpg"></img>
      <p className="postheading">Vel aliquam quis, nulla pede mi commodo no tristique nam hac luctus torquen</p>
    </div>

  
   
    
    <div className="post">
      <img className ="popular-post-image"src="https://wallpaperstream.com/wallpapers/full/spring-nature/Colorful-Park-Spring-Nature-HD-Wallpaper.jpg"></img>
      <p className="postheading">Vel aliquam quis, nulla pede mi commodo no tristique nam hac luctus torquen</p>
    </div>


   
    
    <div className="post">
      <img className ="popular-post-image"src="https://wallpaperstream.com/wallpapers/full/spring-nature/Colorful-Park-Spring-Nature-HD-Wallpaper.jpg"></img>
      <p className="postheading">Vel aliquam quis, nulla pede mi commodo no tristique nam hac luctus torquen</p>
    </div>


   
   
    <div className="post">
      <img className ="popular-post-image"src="https://wallpaperstream.com/wallpapers/full/spring-nature/Colorful-Park-Spring-Nature-HD-Wallpaper.jpg"></img>
      <p className="postheading">Vel aliquam quis, nulla pede mi commodo no tristique nam hac luctus torquen</p>
    </div>
</div>
 
  </div>  


      </div>
    );


  };
};


export default Articles;