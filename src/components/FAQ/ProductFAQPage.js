import React from 'react'
import data from './ProductFAQPage.json';
import './ProductFAQPage.css';
import DefaultPage from '../DefaultPage'
import { styles } from '../Styles.js'

export default class ProductFAQPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { page_id: props.page_id, submenu_id: props.submenu_id, data: data};
        this.styles = styles;
    }

    render() {



        const data = this.state.data;
        let page_id = this.state.page_id;
        const products = data.products;
        var product;
        var current_faqs;

        for (var i = 0; i < products.length; ++i) {
            var product_i = products[i];
            if (product_i.app_id == page_id) {
                product = product_i;
                break;
            }
        }

        if (!product || !product.faqs) {
            return (
                <DefaultPage />
            );
        }

        current_faqs = product.faqs;

        let inner_content = current_faqs.map((list_item, i) => {
            var a_ref = "check-" + i;
            return (
                <div>
                    <input type="checkbox" id={a_ref}></input>
                    <label for={a_ref} style={this.styles.backgrounds[i % 8]}>
                        {list_item.question}
                    </label>
                    <article>
                        {list_item.answer}
                    </article>
                </div>
            )
        })

        return (
            <div>
                <div id="container">
                    <section id="accordion">
                        {inner_content}
                    </section>
                </div>
            </div>
        );
    }
}






