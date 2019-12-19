import React from 'react'
import data from './ProductInstallPage.json';
import { styles } from '../Styles.js'

export default class ProductInstallNavbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            app_id: props.page_id,
            submenu_id: props.submenu_id,
            data: data
        };
        this.styles = styles;
    }

    change_image(heading, image_source_path) {
        this.state.heading_text = heading;
        this.setState({ heading_text: heading, image_source: image_source_path });
    }

    render() {

        const data = this.state.data;
        let page_id = this.state.app_id;
        let submenu_id = this.state.submenu_id;
        const products = data.products;
        var product;
        var current_navbar;

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

        const installer_navbars = product.installer_navbars;


        for (var i = 0; i < installer_navbars.length; ++i) {
            var installer_navbar_i = installer_navbars[i];
            if (installer_navbar_i.submenu_id == submenu_id) {
                current_navbar = installer_navbar_i;
                break;
            }
        }

        if (!current_navbar) {
            return (
                <ul class="navbar-nav w-100 justify-content-start">
                    <li class="nav-item active">
                        <a class="nav-link" href="https://www.zerodebug.com">no page found</a>
                    </li>
                </ul>
            );
        }

        let inner_content = current_navbar.list_items.map((list_item, i) => {
            var a_ref = "#block-" + i;
                        
            return (
                <div class="col-12 col-sm-12 product_detail_box m-1" style={this.styles.backgrounds[i]}>
                    <a href={a_ref}>
                        <div class="row align-items-center product_detail_box py-0" onClick={this.change_image.bind(this, list_item.heading, list_item.image_source)}>
                            <div class="col-12 col-sm-12 p-0 p-sm-3 align-items-start text-center text-sm-left inner-product-box">
                                <h4 class="text_color_black align-items-start">
                                    {list_item.heading}
                                </h4>
                            </div>
                        </div>
                    </a>
                </div>
            )
        })


        return (
            <div>
                {inner_content}
            </div>
        );



    }
}
