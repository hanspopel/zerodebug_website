import React from 'react'
import { render } from 'react-dom'
import '../../App.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import data from './Navibar.json';



export default class Navibar extends React.Component {

    constructor(props) {
        super(props);
        this.state = { page_id: this.props.page_id, data: data };
        this.navclass_desc = "navbar navbar-expand-md navbar-dark bg-faded justify-content-center bottom_border_class";
        this.global_opacity = props.opacity;
    }

    nav = React.createRef();

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
        this.nav.current.classList.add('ref={this.nav}');
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        this.nav.current.classList.remove('ref={this.nav}');
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
        //this.applyColor(lastScrollY/100);
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


        if (app_id === "zerodebug") {
            this.navclass_desc = "navbar navbar-expand-md navbar-dark bg-faded justify-content-center bottom_border_class fixed-top";
        }
        else {
            //this.navclass_desc = "fixed-top";
        }

        this.global_opacity = 1;
        let opac = "" + 1;
        var opac_local = "rgb(0,0,0," + this.global_opacity +")";
        opac_local = "rgba(0,1,0,1)";
        opac_local = "blue";
        let bgcolor = 'blue';
        nav_list = products.map(product => {
                return (
                    <div class="id-item">
                        <li class="nav-item text_color_accent">
                            <a class="nav-link text_color_accent" href="#" onClick={this.props.selectProductPage.bind(this, product.app_id)}>{product.app_id}</a>
                        </li>
                    </div>
                )
        })

        var divStyle = {
            backgroundColor: `rgb(1,0,'+${opac}+')`
        };

        const divStyle2 = {
            backgroundColor: `rgb(1,1,1)`
        };

        return (
            <nav class={this.navclass_desc} ref={this.nav}>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <ul class="navbar-nav w-100 justify-content-start">
                    <li class="nav-item active">
                        <a class="navbar-brand" href="#" onClick={app_id = "zerodebug", this.props.selectProductPage.bind(this, app_id)}><img src="./logo_zerodebug_white.png" width="30"></img></a>
                    </li>

                    <li class="nav-item">
                        <a class="navbar-brand" href="#" onClick={app_id = "zerodebug", this.props.selectProductPage.bind(this, app_id)}>zerodebug</a>
                    </li>
                    {nav_list}
                </ul>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar3">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse w-100" id="collapsingNavbar3">
                    <ul class="nav navbar-nav ml-auto w-100 justify-content-center">
                        <li class="nav-item active">
                            <a class="navbar-brand" href="#" onClick={this.props.selectProductPage.bind(this, app_id)}>{content}</a>
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
