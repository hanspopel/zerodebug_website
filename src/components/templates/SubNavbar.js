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
    nav = React.createRef();

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
        this.nav.current.classList.add('ref={this.nav}');
        //this.nav.current.classList.add('fixed-bottom');
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        this.nav.current.classList.remove('ref={this.nav}');
    }

    handleScroll = () => {
        lastScrollY = window.scrollY;
        if (!this.nav.current) {
            return;
        }
        if (lastScrollY == 0) {
            //this.nav.current.classList.add('fixed-bottom');
            //this.nav.current.style.bottom = 0;
            //this.nav.current.classList.add('navbar-transparent');

        }
        else {
            //this.nav.current.classList.remove('fixed-bottom');
            //this.nav.current.classList.add('navbar-black');

            if (lastScrollY < window.innerHeight - 45) {
                //this.nav.current.style.bottom = "" + lastScrollY +"px";
                //this.nav.current.classList.add('fixed-bottom');
                //this.nav.current.classList.remove('fixed-top');
            }
            else {
                //this.nav.current.classList.remove('fixed-bottom');
                //this.nav.current.classList.add('fixed-top');
            }
        }
        if (lastScrollY > 56) {
            this.nav.current.classList.add('fixed-top');
            this.nav.current.classList.add('navbar-black');

            //this.nav.current.classList.add('bottom_border_class');
            this.nav.current.classList.add('bottom_big_margin');
            //this.nav.current.classList.add('bottom_big_margin');
            //this.nav.current.classList.add('navbar-black');
        }
        else {
            this.nav.current.classList.remove('fixed-top');
            this.nav.current.classList.remove('navbar-black');

            //this.nav.current.classList.remove('bottom_border_class');
            this.nav.current.classList.remove('bottom_big_margin');
            //this.nav.current.classList.add('bottom_big_margin');
        }
    };

    createSubMenus() {
        let submenu_id = this.state.submenu_id
        let page_id = this.state.page_id;
        const data = this.state.data;

        const products = data.products;
        var product;
        var add_id = "";

        for (var i = 0; i < products.length; ++i) {
            var product_i = products[i];
            if (product_i.app_id == page_id) {
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
        icon_content = <img src={product.icon_source} height="30px"></img>
        let content;



        content = product.submenus.map(menu => {
            if (this.state.submenu_id === menu.submenu_id) {
                return (
                    <div class="id-item">
                    <li class="nav-item active">
                        <a class="nav-link" onClick={submenu_id = menu.id, this.props.selectSubPage.bind(this, submenu_id)} href="#">{menu.name}</a>
                    </li>
                    </div>
                )
            }
            else {
                return (
                    <div class="id-item">
                    <li class="nav-item">
                        <a class="nav-link" onClick={submenu_id = menu.id, this.props.selectSubPage.bind(this, submenu_id)} href="#">{menu.name}</a>
                    </li>
                    </div>
                )
            }

        })

        let social_media_list;

        this.state.social_media_content = product.social_media.map(social_item => (
            <div class="id-item">
            <li class="nav-item">
                <a class="nav-link" href={social_item.url} title={social_item.title} target="blank"><i class={social_item.fa} aria-hidden="true"></i></a>
            </li>
            </div>
        ))


        return (
            <div class="navbar-collapse collapse w-100" id="collapsingNavbar3">
            <ul class="navbar-nav w-100 justify-content-start" id="collapsingNavbar3">
                <li class="nav-item">
                    <a class="navbar-brand" href="#" onClick={submenu_id = "landing_page", this.props.selectSubPage.bind(this, submenu_id)}>
                        {icon_content}
                    </a>
                </li>
                {content}
            </ul>
            </div>
        )
    }

    createNavbar(props) {
        let submenu_id = this.state.submenu_id
        let page_id = this.state.page_id;
        let submenus = this.createSubMenus();



        
        return (
            <nav class="navbar fixed-top-2 navbar-dark navbar-expand-md bg-faded" ref={this.nav}>
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
