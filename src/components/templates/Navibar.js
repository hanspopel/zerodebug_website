import React from 'react'
import { render } from 'react-dom'
import '../../App.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
//import touchAble from './Content.json'
//import scrollscript from './scrollscript'
var data = require('./Content.json');



export default class Navibar extends React.Component{

  constructor(props) {
    super(props);
    this.state = {page_id: this.props.page_id};
    //var super_header = React.createElement('navclass',{id: 'navigation'})
  }



render() {
    let app_id = this.state.page_id
    let content;
    
    if (app_id == "touchAble") {
        //content = <img src="https://zerodebug.com/images/ta_logo_2048.png" width="30"></img>
    }
        else if (app_id == "modstep") {
        //content = <img src="./modstep_icon_web.png" width="30"></img>
    }
        else if (app_id == "soda") {
        //content = <img src="./soda_icon_web.png" width="30"></img>
    }
       else if (app_id == "studiomux") {
        //content = <img src="./studiomux_icon_web.png" width="30"></img>
    }
    else {
        //content = <img src="./logo_zerodebug_white.png" width="30"></img>
    }

return (

 <nav class="navbar navbar-expand-md navbar-dark bg-dark  bg-faded justify-content-center">
             <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
    <ul class="navbar-nav w-100 justify-content-start">
    <li class="nav-item active">
     <a class="navbar-brand" href="#" onClick={app_id = "zerodebug", this.props.selectProductPage.bind(this,app_id)}><img src="./logo_zerodebug_white.png" width="30"></img></a> 
        </li>
    <li class="nav-item active">
     <a class="navbar-brand" href="#" onClick={app_id = "zerodebug", this.props.selectProductPage.bind(this,app_id)}>zerodebug</a> 
        </li>
        <li class="nav-item active">
            <a class="nav-link"  href="#" onClick={app_id = "touchAble", this.props.selectProductPage.bind(this,app_id)}>touchAble</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#" onClick={app_id = "studiomux", this.props.selectProductPage.bind(this,app_id)}>studiomux</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#" onClick={app_id = "modstep", this.props.selectProductPage.bind(this,app_id)}>modstep</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#" onClick={app_id = "soda", this.props.selectProductPage.bind(this,app_id)}>soda</a>
        </li>
    </ul>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar3">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse collapse w-100" id="collapsingNavbar3">
<ul class="nav navbar-nav ml-auto w-100 justify-content-center">
<li class="nav-item active">
     <a class="navbar-brand" href="#" onClick={this.props.selectProductPage.bind(this,app_id)}>{content}</a> 
        </li>
</ul>
</div>
    <div class="navbar-collapse collapse w-100" id="collapsingNavbar3">

        <ul class="nav navbar-nav ml-auto w-100 justify-content-end">
            <li class="nav-item">
                <a class="nav-link" href="#">Helpdesk</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Forum</a>
            </li>
        </ul>
    </div>
</nav> 

);
}
}
