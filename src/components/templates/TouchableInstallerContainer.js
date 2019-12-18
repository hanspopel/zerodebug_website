import React from 'react'
import '../../App.css';

export default class TouchableInstallerContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            product_number: props.product_number,
            page_id: props.page_id,
            submenu_id: props.submenu_id,
            store_item: props.store_item,
            heading_text: "Multiplatform",
            image_source: props.store_item.image_source,
            main_content: props.main_content
        };
    }

    change_image(heading, image_source_path) {
        this.state.heading_text = heading;
        this.setState({ heading_text: heading, image_source: image_source_path });
    }

    render() {

        let heading_text = this.state.heading_text;

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
                {
                    backgroundColor: "var(--sixth-accent-bg-color)"
                },
                {
                    backgroundColor: "var(--seventh-accent-bg-color)"
                },
            ]
        };
    

        let inner_content = this.state.store_item.list_items.map((list_item, i) => {
            var a_ref = "#block-1";
            if (i===1){
                a_ref = "#block-2";
            }
            else if (i===2){
                a_ref = "#block-3";
            }
            else if (i===3){
                a_ref = "#block-4";
            }
            else if (i===4){
                a_ref = "#block-5";
            }
            else if (i===5){
                a_ref = "#block-6";
            }
            else if (i===6){
                a_ref = "#block-2";
            }
            else if (i===7){
                a_ref = "#block-2";
            }


        return (
            
            <div class="col-12 col-sm-12 product_detail_box m-1" style={styles.container[i]}>
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


    let inner_image_content;


        inner_image_content =  (
           <div>
               {this.state.main_content}
               </div>

        )
    

let image_content = (
    <div class="col-md-10 col-12 vh-100 overflow-auto align-items-center " style={{ backgroundColor: "#181818", margin: "0px", padding: "0px" }}>
                                <div style={{backgroundColor:"black",height:"56px"}}>
</div>
        {inner_image_content}
    </div>
)

let box_content = (
    <div class="col-md-2 col-12" >
        <div class="row align-items-center" style={{ marginRight: "0px", padding: "0px" }}>
            {inner_content}
        </div>
    </div>
)

let desc_container;

if (this.state.product_number % 2 !== 0) {
    desc_container = (
        <div>
        <div id="sidebar">
        {inner_content}
        </div>
        <div class="container-fluid" style={{ backgroundColor: "#C0C0C0", color: "black"}}>
            <div class="row align-items-center">
                {image_content}
            </div>
        </div>
        </div>)
}
else {
    desc_container = (
        <div class="container-fluid vh-100" style={{ backgroundColor: "black", color: "white"}}>
            <div class="row align-items-center">
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
