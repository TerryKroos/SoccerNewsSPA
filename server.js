const express = require('express');
const app = express();
const PORT = 4000;
const blog = require('./blog');

app.use(express.static('./public'));


app.get('/',(req,res)=>{
const blogs = blog.blogposts;
res.json(blogs);

});

app.get('/blogposts',(req,res)=>{
const {blogposttitle} = req.query;
const blogz = blog.blogposts;
let currentblogpost;

for(let bpost = 0;bpost>=blogz.length;bpost++){
  if(blogposttitle === blogz[bpost].title){
  	currentblogpost = blogz[bpost];
  	break;
  }

}
res.json(currentblogpost);

});

app.post('/blogposts',express.json(),(req,res)=>{
const {title,blogpost} = req.body;
const comments = [];
blog.addPost({title:title,timestamp:new Date(),blogpost:blogpost,comments:comments});


});

app.post('/comments',express.json(),(req,res)=>{
 const {comment,user,title} = req.query;
 
  	blog.addComment(comment:comment,user:user,title:title);


});




app.listen(PORT,()=> console.log(`listening on port ${PORT}`);