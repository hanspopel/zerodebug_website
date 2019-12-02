import React from 'react'
import { render } from 'react-dom'
import '../../App.css';
import Nav from 'react-bootstrap/Nav';
import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';
import data from './SubNavbarData.json';

let lastScrollY = 0;
let ticking = false;

export default class SubNavbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      page_id: props.page_id,
      submenu_id: "touchAble",
      data: data,
      social_media_content: ""
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  nav = React.createRef();
  //selectProductPage() { /* completing stuff */ }
handleScroll = () => {
    lastScrollY = window.scrollY;
    if (lastScrollY > 56) {
        this.nav.current.classList.add('fixed-top');
        this.nav.current.classList.add('bottom_border_class');
    }
    else {
        this.nav.current.classList.remove('fixed-top');
        this.nav.current.classList.remove('bottom_border_class');
    }
  };

createSubMenus(){
    let submenu_id = this.state.submenu_id
    let page_id = this.state.page_id;
    const data = this.state.data;

    const products = data.products;
    var product;
    var add_id = "";
    
    for(var i=0; i < products.length; ++i) {
        var product_i = products[i];
        if(product_i.app_id == page_id) {
            product = product_i;
            break;
        }
    }
    
    if (!product) {
        return ( 
            <ul class="navbar-nav w-100 justify-content-start">
            <li class="nav-item active">
                <a class="nav-link" href="https://www.zerodebug.com">no page found</a>
            </li>
            </ul>
        );
    }

    let icon_source = "https://zerodebug.com/images/ta_logo_2048.png";
    let icon_content;
    icon_content = <img src={product.icon_source} width="30"></img>
    let content;

  

    content = product.submenus.map(menu => (
        <li class="nav-item">
        <a class="nav-link" onClick={submenu_id = menu.id, this.props.selectSubPage.bind(this,submenu_id)} href="#">{menu.name}</a>
        </li>
    ))
    
    let social_media_list;

    this.state.social_media_content = product.social_media.map(social_item => (
        <li class="nav-item">
        <a class="nav-link" href={social_item.url} title={social_item.title} target="_blank"><i class={social_item.fa} aria-hidden="true"></i></a>
        </li>
    ))
    

    return (
        <ul class="navbar-nav w-100 justify-content-start" >
        <li class="nav-item">
        <a class="navbar-brand" href="#" onClick={submenu_id = "landing_page", this.props.selectSubPage.bind(this,submenu_id)}>
        {icon_content}
        </a>  
        </li>
        {content}
        {social_media_list}
        </ul>
    )
}

createNavbar(props){
    let submenu_id = this.state.submenu_id
    let page_id = this.state.page_id;
    
    let submenus = this.createSubMenus();


return (
<nav class="navbar fixed-top-2 navbar-dark bg-dark navbar-expand-md bg-faded justify-content-center" ref={this.nav}>
    {submenus}
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar3">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse collapse w-100" id="collapsingNavbar3">
        <ul class="nav navbar-nav ml-auto w-100 justify-content-end">
            {this.state.social_media_content}
        </ul>
    </div>
</nav>
)
}

render() {
    
return (

[this.createNavbar()]

);
}

}
