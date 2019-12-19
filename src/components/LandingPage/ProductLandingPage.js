import React from 'react'
import data from './ProductLandingPageData.json';
import ProductDescriptionContainer from './ProductDescriptionContainer';
import ProductOverviewContainer from './ProductOverviewContainer';
import ProductLandingContainer from './ProductLandingContainer';

export default class ProductLandingPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page_id: props.page_id,
            submenu_id: props.submenu_id,
            data: data,
            blaheading: "asd"
        };
        this.current_desc_number = 0;
    }

    change_desc_container(acurrent_desc_number) {
        this.current_desc_number = acurrent_desc_number;
        this.setState({ current_desc_number:acurrent_desc_number,blaheading:acurrent_desc_number});
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

        let video_field = (
            <div class="videoWrapper">
                <iframe width="560" height="349" src={product.intro_video.src_url} frameborder="0" allowfullscreen></iframe>
            </div>
        )

        var number = this.current_desc_number;
        var a_number = number;

        let heading_container = product.desc_container.map((store_item, i) => {
            return (
                <div class="col" onClick={this.change_desc_container.bind(this, i)}>
                    {this.state.blaheading} {a_number}
                     <h1><a>{store_item.heading}</a></h1>
                </div>
            );
        });

    let new_desc_container;

        if (number === 0) {
            new_desc_container = (
                <div class="row">
                {heading_container}
                <ProductDescriptionContainer product_number={a_number} page_id={this.state.page_id} submenu_id={this.state.submenu_id} store_item={product.desc_container[0]} />
            </div>
            )
        }
        else if (number === 1) {
            new_desc_container = (
                <div class="row">
                {heading_container}
                <ProductDescriptionContainer product_number={a_number} page_id={this.state.page_id} submenu_id={this.state.submenu_id} store_item={product.desc_container[2]} />
            </div>
            )
        }
        else if (number === 2) {
            new_desc_container = (
                <div class="row">
                {heading_container}
                <ProductDescriptionContainer product_number={a_number} page_id={this.state.page_id} submenu_id={this.state.submenu_id} store_item={product.desc_container[3]} />
            </div>
            )
        }
        else if (number === 3) {
            new_desc_container = (
                <div class="row">
                {heading_container}
                <ProductDescriptionContainer product_number={a_number} page_id={this.state.page_id} submenu_id={this.state.submenu_id} store_item={product.desc_container[4]} />
            </div>
            )
        }



        let desc_container = product.desc_container.map((store_item, i) => {
            return (
                <ProductDescriptionContainer product_number={i} page_id={this.state.page_id} submenu_id={this.state.submenu_id} store_item={store_item} />
            );
        });




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
