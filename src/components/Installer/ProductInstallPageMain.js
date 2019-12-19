import React from 'react'
import data from './ProductInstallPage.json';
import TouchableWinInstallPage from './TouchableWinInstallPage';
import TouchableMacInstallPage from './TouchableMacInstallPage';
import StudiomuxWinInstallPage from './StudiomuxWinInstallPage';
import StudiomuxMacInstallPage from './StudiomuxMacInstallPage';
import { styles } from '../Styles.js'
import DefaultPage from '../DefaultPage'

export default class ProductInstallPageMain extends React.Component {

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
                <DefaultPage />
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
                <DefaultPage />
            );
        }

        let inner_content = current_navbar.list_items.map((list_item, i) => {

            var a_ref = "block-" + i;
            let content;

            if (this.state.app_id === "touchAble") {
                if (this.state.submenu_id === "setup-mac") {
                    content = (<TouchableMacInstallPage page_id={this.state.app_id} submenu_id={this.state.submenu_id} item_number={i} />)
                }
                if (this.state.submenu_id === "setup-win") {
                    content = (<TouchableWinInstallPage page_id={this.state.app_id} submenu_id={this.state.submenu_id} item_number={i} />)
                }
            }
            else if (this.state.app_id === "studiomux") {
                if (this.state.submenu_id === "setup-mac") {
                    content = (<StudiomuxMacInstallPage page_id={this.state.app_id} submenu_id={this.state.submenu_id} item_number={i} />)
                }
                if (this.state.submenu_id === "setup-win") {
                    content = (<StudiomuxWinInstallPage page_id={this.state.app_id} submenu_id={this.state.submenu_id} item_number={i} />)
                }
            }

            return (

                <div class="col-12 col-sm-12" style={this.styles.backgrounds[i]}>
                    <h1 class="text-left text_color_black align-items-start">
                        {list_item.heading}
                    </h1>
                    <section id={a_ref} style={this.styles.backgrounds[i]}>
                        {content}
                    </section>
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
