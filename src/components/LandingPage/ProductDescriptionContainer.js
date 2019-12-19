import React from 'react'
import data from './ProductLandingPageData.json';
import Navbar from 'react-bootstrap/Navbar';

export default class ProductDescriptionContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            product_number: props.product_number,
            page_id: props.page_id,
            submenu_id: props.submenu_id,
            store_item: props.store_item,
            heading_text: "Multiplatform",
            image_source: props.store_item.image_source
        };
        this.setState({ store_item: props.store_item });
    }

    change_image(heading, image_source_path) {
        this.state.heading_text = heading;
        this.setState({ heading_text: heading, image_source: image_source_path });
    }

    render() {


        const styles = {
            container: [
                {
                    backgroundColor: "var(--accent-bg-color)"
                },
                {
                    backgroundColor: "var(--secondary-accent-bg-color)"
                },
                {
                    backgroundColor: "var(--third-accent-bg-color)"
                },
                {
                    backgroundColor: "var(--fourth-accent-bg-color)"
                },
                {
                    backgroundColor: "var(--fifth-accent-bg-color)"
                },
            ]
        };
    

        let inner_content = this.state.store_item.list_items.map((list_item, i) => {
        return (
            <div class="col-12 col-sm-12 product_detail_box m-1" style={styles.container[i]}>
                <div class="row align-items-center product_detail_box py-2" onMouseOver={this.change_image.bind(this, list_item.description, list_item.image_source)}>
                    <div class="col-12 col-sm-8 p-1 p-sm-3 align-items-start text-center text-sm-left inner-product-box">
                        <h3 class="text_color_black align-items-start">
                            {list_item.heading}
                        </h3>
                    </div>
                    <div class="col-0 col-sm-0 align-items-center" style={{}}>
                        <img class="img_color_black align-items-center" src={list_item.icon_source} height="00px"></img>
                    </div>
                </div>

            </div>
        )
    })

let image_content = (
    <div class="col-md-8 col-12 align-items-center" style={{ margin: "0px", padding: "0px" }}>
        <img src={this.state.image_source} width="100%"></img>
        <div class="text-block-main-bottom">
            <h2 class="text-center" style={{ fontSize: "2vw" }}>{this.state.heading_text}</h2>
        </div>
    </div>
)

let box_content = (
    <div class="col-md-4 col-12" >
        <div class="row align-items-center" style={{ marginRight: "0px", padding: "0px" }}>
            {inner_content}
        </div>
    </div>
)

let desc_container;

if (this.state.product_number % 2 !== 0) {
    desc_container = (
        <div class="container-fluid " style={{ backgroundColor: "#C0C0C0", color: "black", paddingBottom: "50px", paddingTop: "50px" }}>
            <h1 class="text-center" style={{ backgroundColor: "", color: "black", fontSize: "3vw" }}>{this.state.store_item.heading}</h1>
            <div class="row my-5 align-items-center">
                {image_content}
                {box_content}
            </div>
        </div>)
}
else {
    desc_container = (
        <div class="container-fluid " style={{ backgroundColor: "#181818", color: "white", paddingBottom: "50px", paddingTop: "50px" }}>
            <h1 class="text-center" style={{ backgroundColor: "", color: "white", fontSize: "3vw" }}>{this.state.store_item.heading}</h1>
            <div class="row my-5 align-items-center">
                {box_content}
                {image_content}
            </div>
        </div>)
}

return (
    <div>
        {desc_container}
    </div>
);



    }
}
