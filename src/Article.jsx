import React from 'react';

const Article = (props) =>{
    
return(

    <div className="blogpostsdiv">
  <div className="imagediv">
    <img className = "blogimagehome" src="https://images2.minutemediacdn.com/image/upload/c_fill,w_912,h_516,f_auto,q_auto,g_auto/shape/cover/sport/juventus-v-as-roma-italian-serie-a-5c40534800a9aaf836000001.jpg" alt="Flowers in Chania" ></img>
      </div>
  <div className="articleheadlinesdiv">
    <div className="datediv">
    <p className = "date">{props.article.timestamp.toString()}</p>
      </div>
  <div className = "titlediv">
    <p className = "title"><strong>{props.article.title}</strong></p>
  </div>
   <p>{props.article.blogpost.substring(0,78)}</p>
  <div className="readmorebuttondiv">
    <button className="readmorebutton" onClick ={()=>props.addClick(props.article.title)}>Read More</button>
  </div>
  </div>
</div>
);



}
export default Article;
