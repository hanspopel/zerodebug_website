import React from 'react'
import { render } from 'react-dom'
import '../../App.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import data from './Navibar.json';
import data_sub from './SubNavbarData.json';


export default class Navibar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page_id: this.props.page_id,
            data: data,
            data_sub: data_sub,
            submenu_id: this.props.submenu_id
        };
        this.navclass_desc = "navbar navbar-expand-md navbar-dark bg-faded justify-content-center bottom_border_class";
        this.global_opacity = props.opacity;
    }

    nav = React.createRef();

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
        this.nav.current.classList.add('ref={this.nav}');
        if (!this.nav.current) {
            return;
        }
        this.nav.current.classList.add('navbar-black');
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        this.nav.current.classList.remove('ref={this.nav}');
        if (!this.nav.current) {
            return;
        }
        this.nav.current.classList.add('navbar-black');
    }

    formatColor(r, g, b, a) {
        return `rgba(${r}, ${g}, ${b}, ${a})`;
    }




    applyColor(alpha_val) {
        const color = this.formatColor(0, 1, 1, alpha_val);
        //this.nav.current.style.color = 'rgba(1,1,1,1)';
    }

    handleScroll = () => {
        var lastScrollY = window.scrollY;
        if (!this.nav.current) {
            return;
        }
        //return;
        //this.applyColor(lastScrollY/100);
        if (lastScrollY == 0) {
            this.nav.current.classList.add('navbar-transparent');
        }
        else {
            this.nav.current.classList.remove('navbar-transparent');
        }
        if (lastScrollY > 1) {
            this.nav.current.classList.add('navbar-black');
        }
        else {
            this.nav.current.classList.remove('navbar-black');
        }
    };



    render() {



        let app_id = this.state.page_id
        let content;
        var nav_list;
        var products = this.state.data.products
        let submenu_id = this.state.submenu_id


        const products2 = data_sub.products;
        var sub_product;

        for (var i = 0; i < products2.length; ++i) {
            var product_i = products2[i];
            if (product_i.app_id == app_id) {
                sub_product = product_i;
                break;
            }
        }

        if (app_id === "zerodebug") {
            this.navclass_desc = "navbar navbar-expand-md navbar-dark bg-faded bottom_border_class fixed-top";
        }
        else {
            //this.navclass_desc = "fixed-top";
        }

        this.global_opacity = 1;
        let opac = "" + 1;
        var opac_local = "rgb(0,0,0," + this.global_opacity + ")";
        opac_local = "rgba(0,1,0,1)";
        opac_local = "blue";
        let bgcolor = 'blue';
        nav_list = products.map(product => {
            if (product.app_id === this.state.page_id) {
                return (
                    <div class="id-item">
                        <li class="nav-item active text_color_accent">
                            <a class="nav-link text_color_accent" href="#" onClick={submenu_id = "landing_page", this.props.selectProductPage.bind(this, product.app_id, submenu_id)}>{product.app_id}</a>
                        </li>
                    </div>
                )
            }
            else {
                return (
                    <div class="id-item">
                        <li class="nav-item text_color_accent">
                            <a class="nav-link text_color_accent" href="#" onClick={submenu_id = "landing_page", this.props.selectProductPage.bind(this, product.app_id, submenu_id)}>{product.app_id}</a>
                        </li>
                    </div>
                )
            }

        })

        let product_list = products.map(product => {
            if (product.app_id === this.state.page_id) {
                return (
                    <div class="id-item">
                        <li class="nav-item active text_color_accent">
                            <a class="nav-link text_color_accent" href="#" onClick={submenu_id = "landing_page", this.props.selectProductPage.bind(this, product.app_id, submenu_id)}>{product.app_id}</a>
                        </li>
                    </div>
                )
            }
            else {
                return (
                    <div class="id-item">
                        <li class="nav-item text_color_accent">
                            <a class="nav-link text_color_accent" href="#" onClick={submenu_id = "landing_page", this.props.selectProductPage.bind(this, product.app_id, submenu_id)}>{product.app_id}</a>
                        </li>
                    </div>
                )
            }

        })

        let submenus = sub_product.submenus.map(menu => {
            if (this.state.submenu_id === menu.submenu_id) {
                return (
                    <div class="id-item">
                        <li class="nav-item active">
                            <a class="nav-link" onClick={submenu_id = menu.id, this.props.selectProductPage.bind(this, app_id, submenu_id)} href="#">{menu.name}</a>
                        </li>
                    </div>
                )
            }
            else {
                return (
                    <div class="id-item">
                        <li class="nav-item">
                            <a class="nav-link" onClick={submenu_id = menu.id, this.props.selectProductPage.bind(this, app_id, submenu_id)} href="#">{menu.name}</a>
                        </li>
                    </div>
                )
            }

        })

        let social_media_content = sub_product.social_media.map(social_item => (
            <div class="id-item">
            <li class="nav-item">
                <a class="nav-link" href={social_item.url} title={social_item.title} target="blank"><i class={social_item.fa} aria-hidden="true"></i></a>
            </li>
            </div>
        ))


        var divStyle = {
            backgroundColor: `rgb(1,0,'+${opac}+')`
        };

        const divStyle2 = {
            backgroundColor: `rgb(1,1,1)`
        };

        let second_coll_button;

        if (app_id !== "zerodebug") {
            second_coll_button = (
            <button class="navbar-toggler justify-content-end" type="button" data-toggle="collapse" data-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent2" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
        )
        }


        return (
            <nav class={this.navclass_desc} ref={this.nav}>
                <a class="navbar-brand" href="#" onClick={app_id = app_id, submenu_id = "landing_page", this.props.selectProductPage.bind(this, app_id, submenu_id)}><img src={sub_product.icon_source} width="30"></img></a>
                <button class="navbar-toggler justify-content-start" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse w-100" id="navbarSupportedContent">
                    <ul class="navbar-nav w-100  ml-auto justify-content-start">
                    <div class="id-item">
                        <li class="nav-item text_color_accent">
                            <a class="nav-link text_color_accent" href="#" onClick={submenu_id = "landing_page", this.props.selectProductPage.bind(this, "zerodebug", submenu_id)}>Home</a>
                        </li>
                    </div>
                    <div class="id-item">
                        <li class="nav-item text_color_accent">
                            <a class="nav-link text_color_accent" href="http://help.touch-able.com/" target="_blank">Helpdesk</a>
                        </li>
                    </div>
                    <div class="id-item">
                        <li class="nav-item text_color_accent">
                            <a class="nav-link text_color_accent" href="http://community.zerodebug.com/" target="_blank">Forum</a>
                        </li>
                    </div>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Products
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown" style={{backgroundColor:"black"}}>
                                {product_list}
                            </div>
                        </li>
                    </ul>
                </div>
                {second_coll_button}
                <div class="navbar-collapse collapse w-100" id="navbarSupportedContent2">
                    <ul class="nav navbar-nav ml-auto w-100 justify-content-center">
                        {submenus}
                    </ul>
                </div>
                <div class="navbar-collapse collapse w-100" id="navbarSupportedContent2">
                    <ul class="nav navbar-nav ml-auto w-100 justify-content-end">
                        <li class="nav-item">
                            <a class="nav-link" href="#"></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"></a>
                        </li>
                        {social_media_content}
                    </ul>
                </div>
            </nav>

        );
    }
}
