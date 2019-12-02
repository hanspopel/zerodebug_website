import React from 'react'
import '../../App.css';
import data from './ProductLandingPageData.json';

export default class  ProductLandingPage extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            page_id: props.page_id, 
            submenu_id: props.submenu_id,
            data: data
        };
      }


    render() {
        let submenu_id = this.state.submenu_id
        let page_id = this.state.page_id;
        const data = this.state.data;
    
        const products = data.products;
        var product;
        var store_list;
        var desc_container;

        var add_id = "";
        for(var i=0; i < products.length; ++i) {
            var product_i = products[i];
            if(product_i.app_id == page_id) {
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

    desc_container = product.desc_container.map(store_item => (
        <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 bg-dark">
        <div class={store_item.text_class}>
            <h3 class="display-4 font-weight-normal">{store_item.heading}</h3>
            <ul>
            {store_item.list_items.map(list_item => (
                    <li> {list_item} </li> 
            ))}
            </ul>
        </div>
        <div class={store_item.image_class}>
            <img src="./touchable_landing.png" width="100%"></img>
        </div>
    </div>
     ))



        if (this.state.page_id == "touchAble") {
        return (
            <div class="main">
            <div class="position-relative overflow-hidden p-md-5 text-center">
                <div class="container-main">
                    <img src={product.intro_field.image_source} width="100%"></img>
                    <div class="text-block-main">
                        <div class="text-block-main2">
                            <img src="https://zerodebug.com/images/ta_logo_2048.png" width="50"></img>
                            <h1 class="display-4 display-44 font-weight-normal">{product.app_name_string}</h1>
                            <p class="lead font-weight-normal">{product.intro_field.intro_text}</p>
                            <div class="store-icon-list">
                                <ul class="list-group list-group-horizontal">
                                        {store_list}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="text-block-main-right">
                        <div class="text-block-main2">
                            <p class="lead font-weight-normal">{product.intro_field.sub_intro_text}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-dark">
                <div>
                    <h1 class="display-4 font-weight-normal">{product.intro_text.intro_heading}</h1>
                     <p class="justify">{product.intro_text.intro_text}</p>
                </div>
            </div>
            <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3">
                <p>&nbsp;</p>
                <p></p>
                <center>
                    <div class="embed-container">
                        <iframe width="1000" height="500"  src={product.intro_video.src_url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
                    </div>
                </center>
            </div>
            <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 bg-dark">
                <div class="desc-text-left">
                    <h3 class="display-4 font-weight-normal">full control</h3>
                    <ul>
                        <li>  Eight years ago touchAble </li> 
                        <li>  Eight years ago touchAble  </li> 
                        <li>  Eight years ago touchAble  </li> 
                        <li>  Eight years ago touchAble  </li> 
                        <li>   Eight years ago touchAble </li> 
                    </ul>
                </div>
                <div class="desc-image-right">
                    <img src="./touchable_landing.png" width="100%"></img>
                </div>
            </div>
            <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3">
                <div class="desc-image-left">
                    <img src="./touchable_landing.png" width="100%"></img>
                </div>
                <div class="desc-text-right">
                    <h3 class="display-4 font-weight-normal">full control</h3>
                    <ul>
                        <li>  Eight years ago touchAble   </li> 
                        <li>  Eight years ago touchAble  </li> 
                        <li>  Eight years ago touchAble  </li> 
                        <li>  Eight years ago touchAble  </li> 
                        <li>   Eight years ago touchAble </li> 
                    </ul>
                </div>
            </div>
            {desc_container}
        </div>
            );
        }
        else {
            return (
            <div class="main">
            </div>
            );
        }
}
}
