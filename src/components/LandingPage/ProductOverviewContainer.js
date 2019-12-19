import React from 'react'

export default class ProductOverviewContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            product: props.product,
        };
    }


    render() {

        if (!this.state.product) {
            return (
                <ul class="navbar-nav w-100 justify-content-start">
                    <li class="nav-item active">
                        <a class="nav-link" href="https://www.zerodebug.com">no page found</a>
                    </li>
                </ul>
            );
        }



        let zerodebug_productboxes = this.state.product.overview_container.map((a_product, i) => {
            let class_def = "text-center col-sm product_row_box";
            if (i === 0) {
                class_def = "align-items-center text-center col-sm product_row_box py-2 m-1 py-md-5 mx-md-3 background_color_accent";
            }
            else if (i === 1) {
                class_def = "align-items-center text-center col-sm product_row_box py-2 m-1 py-md-5 mx-md-3 background_color_accent_sec";
            }
            else if (i === 2) {
                class_def = "align-items-center text-center col-sm product_row_box py-2 m-1 py-md-5 mx-md-3 background_color_accent_third";
            }
            else if (i === 3) {
                class_def = "align-items-center text-center col-sm product_row_box py-2 m-1 py-md-5 mx-md-3 background_color_accent_fourth";
            }
            return (
                <div class={class_def} >
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

        let second_container = (
            <div class="p-3" style={{ backgroundColor: "#C0C0C0", color: "black" }}>
                <h1 >{this.state.product.intro_text.intro_heading}</h1>
                <div class="row my-5 align-items-center" >
                    {zerodebug_productboxes}
                </div>
            </div>
        )


        return (
            <div class="align-items-center" style={{ backgroundColor: "#C0C0C0", color: "black" }}>
                {second_container}
            </div>
        );
    }
}
