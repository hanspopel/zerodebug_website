import React from 'react'

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
                <h1 style={{ fontSize: "2vw"}}>{product.intro_field.sub_intro_text}</h1>
            </div>
        )

        let store_list = product.intro_field.app_store.map(store_item => (
            <li class="list-group-item flex-fill" style={{borderColor: "transparent", borderWidth: "0px" }}><h1 class="p-4 btn-outline-secondary" style={{borderColor: "transparent", borderWidth: "0px" }} href={store_item.url}><i class={store_item.class} aria-hidden="true"></i> {store_item.name}</h1></li>
        ))

        let store_part;

        if (product.intro_field.app_store.length > 0) {
            store_part = (
                <div class="store-icon-list my-5 mx-1 px-1 mx-md-5 px-md-5">
                            <ul class="list-group list-group-horizontal borderless w-100 justify-content-center px-1">
                                {store_list}
                            </ul>
                </div>
            )
        }

        let first_container = (<div class="position-relative overflow-hidden vh-100 text-center container-main">
            <div class="glitch">
                <img class="img-fluid" src={product.intro_field.image_source} width="100%"></img>
                <div class="text-block-main ">
                    <div class="" style={{ marginTop: "10%" }}>
                        <img src={product.icon_source} width="6%"></img>
                        <h1 class="" style={{ fontSize: "4vw" }}>{product.app_name_string}</h1>
                        <p class="" style={{ fontSize: "2vw", margin: "5%" }}>{product.intro_field.intro_text}</p>
                    </div>
                </div>
                {first_subcontainer}
            </div>
        </div>)


        return (
            <div class="">
                {first_container}
                {store_part}
            </div>
        );
    }
}
