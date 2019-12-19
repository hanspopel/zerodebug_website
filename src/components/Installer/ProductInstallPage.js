
import React from 'react'
import data from './ProductInstallPage.json';
import ProductInstallNavbar from './ProductInstallNavbar';
import ProductInstallPageMain from './ProductInstallPageMain';

export default class ProductInstallPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { page_id: props.page_id, submenu_id: props.submenu_id, data: data };
    }

    render() {

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

        let nav_bar = (
            <div class="col-md-2 col-12" >
                <div class="row align-items-center" style={{ marginRight: "0px", padding: "0px" }}>
                <ProductInstallNavbar page_id={this.state.page_id} submenu_id={this.state.submenu_id}/>
                </div>
            </div>
        )

        let installer_content = (
            <div class="col-md-10 col-12 vh-100 overflow-auto align-items-center " style={{ backgroundColor: "#181818", margin: "0px", padding: "0px" }}>
                <div style={{ backgroundColor: "black", height: "56px" }}>
                </div>
                <ProductInstallPageMain page_id={this.state.page_id} submenu_id={this.state.submenu_id}/>
            </div>
        )


        let all_content = ( <div class="container-fluid vh-100" style={{ backgroundColor: "black", color: "white" }}>
        <div class="row align-items-center">
            {nav_bar}
            {installer_content}
        </div>
        </div>
        )


        return (
            <div>
            {all_content}
            </div>
        );


    }
}






