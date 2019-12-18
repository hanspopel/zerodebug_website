import React from 'react'
import '../../App.css';

export default class ProductLandingContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            product: props.product,

        };
    }
    render() {
        var product = this.state.product;


        if (!product) {
            return (
                <ul class="navbar-nav w-100 justify-content-start">
                    <li class="nav-item active">
                        <a class="nav-link" href="https://www.zerodebug.com">no page found</a>
                    </li>
                </ul>
            );
        }

        let first_subcontainer = (
            <div class="text-block-main-right">
                <h1>{product.intro_field.sub_intro_text}</h1>
            </div>
        )

        let store_list = product.intro_field.app_store.map(store_item => (
            <li class="list-group-item flex-fill" style={{ borderWidth: "0px" }}><a class="store-button btn btn-outline-secondary btn-block." href={store_item.url}><i class="fa fa-apple" aria-hidden="true"></i> {store_item.name}</a></li>
        ))

        let first_container = (<div class="position-relative overflow-hidden text-center container-main">
            <div class="">
                <img src={product.intro_field.image_source} width="100%"></img>
                <div class="text-block-main ">
                    <div class="" style={{ marginTop: "10%" }}>
                        <img src={product.icon_source} width="80"></img>
                        <h1 class="" style={{ fontSize: "4vw" }}>{product.app_name_string}</h1>
                        <p class="" style={{ fontSize: "2vw", margin: "5%" }}>{product.intro_field.intro_text}</p>
                        <div class="store-icon-list mx-5 px-5">
                            <ul class="list-group list-group-horizontal borderless w-100 justify-content-center" style={{ paddingLeft: "25%", paddingRight:"25%" }}>
                                {store_list}
                            </ul>
                        </div>
                    </div>
                </div>
                {first_subcontainer}
            </div>
        </div>)


        return (
            <div class="">
                {first_container}
            </div>
        );
    }
}
