import React from 'react'
import '../../App.css';
import data from './ProductLandingPageData.json';
import data2 from './Zerodebug_Productbox.json';
import Navbar from 'react-bootstrap/Navbar';

export default class ProductLandingPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page_id: props.page_id,
            submenu_id: props.submenu_id,
            data: data
        };
    }

    play_video() {





    }

    render() {
        let submenu_id = this.state.submenu_id
        let page_id = this.state.page_id;
        const data = this.state.data;

        const products = data.products;
        const products2 = data2.products;
        var product;
        var store_list;
        var desc_container;
        var first_container;
        var second_container;
        var zerodebug_productboxes;
        var intro_text_field;
        var video_field;

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

        store_list = product.intro_field.app_store.map(store_item => (
            <li class="list-group-item flex-fill"><a class="store-button btn btn-outline-secondary btn-block." href={store_item.url}><i class="fa fa-apple" aria-hidden="true"></i> {store_item.name}</a></li>
        ))

        zerodebug_productboxes = products2.map((a_product,i) => {
            let class_def = "text-center col product_row_box";
            if (i === 0) {
                class_def = "text-center col product_row_box background_color_accent";
            }
            else if (i === 1) {
                class_def = "text-center col product_row_box background_color_accent_sec";
            }
            else if (i === 2) {
                class_def = "text-center col product_row_box background_color_accent_third";
            }
            else if (i === 3) {
                class_def = "text-center col product_row_box background_color_accent_fourth";
            }
           return (
            <div class={class_def} >
                <a href={a_product.app_id}>
                    <div>
                        <h4 class="text_color_black">
                            {a_product.app_id}
                        </h4>
                        <div class="bottom_small_margin">
                        <div class="product_box_desc text_color_black">
                            {a_product.description}
                        </div>
                        </div>
                        <img src={a_product.icon_source} width="80px"></img>
                    </div>
                </a>
            </div>
        )})


        
        var first_subcontainer;

        //if (product.app_id != "zerodebug") {
            first_subcontainer = (
                <div class="text-block-main-right">
                    <h1>{product.intro_field.sub_intro_text}</h1>
                </div>
            )
        //}

        first_container = (<div class="position-relative overflow-hidden text-center container-main">
            <div class="">
                <img src={product.intro_field.image_source} width="100%"></img>
                <div class="text-block-main ">
                    <div class="text-block-main2" style={{marginTop:"100px"}}>
                        <img src={product.icon_source} width="50"></img>
                        <h1 class="display-4 display-44 font-weight-normal">{product.app_name_string}</h1>
                        <p class="lead font-weight-normal uniform_big_margin">{product.intro_field.intro_text}</p>
                        <div class="store-icon-list">
                            <ul class="list-group list-group-horizontal">
                                {store_list}
                            </ul>
                        </div>
                    </div>
                </div>
                {first_subcontainer}
            </div>
        </div>)

        if (product.app_id === "zerodebug") {
            second_container = (
                <div>
                    <div class="row product_row">
                        {zerodebug_productboxes}
                    </div>
                </div>)
        }

        if (product.app_id != "zerodebug") {
            intro_text_field = (
                <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center ">
                    <div>
                        <h1 class="display-4 font-weight-normal"><img src={product.intro_text.intro_icon} width="50px"></img>{product.intro_text.intro_heading}</h1>
                        <p class="justify">{product.intro_text.intro_text}</p>
                    </div>
                </div>
            )
        }

        desc_container = product.desc_container.map((store_item, i) => {


            var dark_mode = ""
            if (i % 2 === 0) {
                //return (<div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 bg-dark desc_box_sdsdf">
                return (<div class="position-relative overflow-hidden">
                    <div class={store_item.text_class}>
                        <h3 class="display-4 font-weight-normal text-right">{store_item.heading}</h3>
                        <ul class="ul_text_left top_big_margin" height="100%">
                            {store_item.list_items.map(list_item => (
                                <li class="list-group-item"> {list_item} </li>
                            ))}
                        </ul>
                    </div>
                    <div class={store_item.image_class}>
                        <img src={store_item.image_source} width="100%"></img>
                    </div>
                </div>);
            }
            else {
                return (<div class="position-relative overflow-hidden">
                    <div class={store_item.image_class}>
                        <img src={store_item.image_source} width="100%"></img>
                    </div>
                    <div class={store_item.text_class}>
                        <h3 class="display-4 font-weight-normal text-left">{store_item.heading}</h3>
                        <ul class="list-group ul_text_left top_big_margin" height="100%" >
                            {store_item.list_items.map(list_item => (
                                <li class="list-group-item"> {list_item} </li>
                            ))}
                        </ul>
                    </div>
                </div>);
            }
        });


        video_field = (
            <div class="videoWrapper">
                <iframe width="560" height="349" src={product.intro_video.src_url} frameborder="0" allowfullscreen></iframe>
            </div>
        )

        return (
            <div class="main">
                {first_container}
                {intro_text_field}
                {second_container}
                {video_field}
                {desc_container}
            </div>
        );
    }
}
