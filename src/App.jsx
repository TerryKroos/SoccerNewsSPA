import React, { Component } from 'react';
import {Link, Route, Switch} from 'react-router-dom';

import './App.css';
import {getArticles} from './services.js'

import Articles from './Articles';

class App extends Component {
 constructor(){
   super();
   this.state = {
     blogposts:[
     
     
     ],
     isMounted:false,
     errormessage:""
   }
 }

 componentDidMount(){
 
  
     this.timer = setInterval(this.addArticles,5000);
 }

 addArticles = () =>{
   getArticles().then(result =>{
   
  this.setState({
    blogposts:result,
    isMounted:true
  });
   }).catch(result=>{
     this.setState({
       errormessage:result.code
     });
   });
 }


  render() {
    if(this.state.isMounted){
      return (
        
          <div className = "main-div">
	<header className="header">
		<h1 className="logo"><a href="#">JuveBlog</a></h1>
      <ul className="main-nav">
          <li><a href="#">Home</a></li>
          <li><a href="#">Archive</a></li>
          
          <li><a href="#">Contact</a></li>
      </ul>
	</header> 
  <img className="firstimage" src="http://images2.fanpop.com/images/photos/7800000/Nature-Full-HD-Wallpaper-national-geographic-7822288-1920-1080.jpg" alt="homeimage"></img>
	<div className="cssgrid">

		<div className="collection">
      <Articles blogposts = {this.state.blogposts}></Articles>
    </div>
    </div>
   
  <div className="footerdiv">
    <div className="footerdetails">
    <span className = "aboutdiv">
      <h5 className="about">About Us</h5>
      <p className="aboutinfo">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.
      </p>

    </span>
    <div className="footernewsletterdiv">
      <h5 className ="footernewsletter">Newsletter</h5>
      <div className="stayupdated">Stay updated with our latest<div/>

      <form className="footerform">
        <input className="footeremail" name="Email" placeholder="Enter Email"></input>
        <button className="footeremailbutton"></button>
      </form>

    </div>
    

  </div>
  </div>
</div>

    </div>
        );
    }
   
    return(

<h2>{this.state.errormessage}</h2>
    );
  }
}

export default App;
