import React from 'react'
import { styles } from '../Styles.js'
import DefaultPage from '../DefaultPage'

export default class ProductOverviewContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            product: props.product,
        };
        this.styles = styles;
    }


    render() {

        if (!this.state.product) {
            return (
                <DefaultPage />
            );
        }

        let productboxes = this.state.product.overview_container.map((a_product, i) => {
            return (
                <div class="align-items-center text-center col-sm product_row_box py-2 m-1 py-md-5 mx-md-3" style={this.styles.backgrounds[i % 8]}>
                    <a href={a_product.heading}>
                        <div class="row inner-product-box">
                            <div class="col-8 col-sm-12">
                                <h4 class="text_color_black">
                                    {a_product.heading}
                                </h4>
                                <div class="mb-1 mb-md-5">
                                    <div class="product_box_desc text_color_black">
                                        {a_product.description}
                                    </div>
                                </div>
                            </div>
                            <div class="col-4 col-sm-12">
                                <img class="img_color_black" src={a_product.icon_source} height="80px"></img>
                            </div>
                        </div>
                    </a>
                </div>
            )
        })

        return (
            <div class="align-items-center">
                <div class="p-3" style={{ backgroundColor: "#C0C0C0", color: "black" }}>
                    <h1 >{this.state.product.intro_text.intro_heading}</h1>
                    <div class="my-5">
                    <div class="row my-5 align-items-center" >
                        {productboxes}
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}
