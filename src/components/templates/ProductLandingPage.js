import React from 'react'
import '../../App.css';
import data from './ProductLandingPageData.json';
import data2 from './Zerodebug_Productbox.json';
import Navbar from 'react-bootstrap/Navbar';
import ProductDescriptionContainer from './ProductDescriptionContainer';
import ProductOverviewContainer from './ProductOverviewContainer';
import ProductLandingContainer from './ProductLandingContainer';

export default class ProductLandingPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page_id: props.page_id,
            submenu_id: props.submenu_id,
            data: data
        };
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

        let landing_container =(<ProductLandingContainer product={product} />)

        let overview_container =(<ProductOverviewContainer product={product} />)

        let desc_container = product.desc_container.map((store_item, i) => {
            return (
                <ProductDescriptionContainer product_number={i} page_id={this.state.page_id} submenu_id={this.state.submenu_id} store_item={store_item} />
            );
        });

        let video_field = (
            <div class="videoWrapper">
                <iframe width="560" height="349" src={product.intro_video.src_url} frameborder="0" allowfullscreen></iframe>
            </div>
        )


        return (
            <div class="main">
                {landing_container}
                {overview_container}
                {video_field}
                {desc_container}
            </div>
        );
    }
}
