import React from 'react';
import '../../App.css';
import Navibar from './Navibar'
import ProductPage from './ProductPage'
import { Helmet } from 'react-helmet'


export default class MainPage extends React.Component {

  constructor(props) {
    super(props);
    this.selectProductPage = this.selectProductPage.bind(this);
    this.state = { page_id: "zerodebug", submenu_id: "landing_page" };
    this.current_window = window;
  }

  selectProductPage(app_id, submenu_id) {
    this.setState({ page_id: app_id, submenu_id: submenu_id });
  };

  handleScroll(event) {
    this.setState({ page_id: "app_id", submenu_id: "submenu_id" });
  }

  render() {
    let selectProductPage = this.selectProductPage;
    let page_id = this.state.page_id;
    let submenu_id = this.state.submenu_id;
    let content;
    content = <ProductPage page_id={page_id} submenu_id={submenu_id} />
    let margin_type;
    let opacity;
    if (page_id === "zerodebug") {
      //margin_type = "main_bar_margin"
    }
    else {
      let lastScrollY = window.scrollY;
      opacity = lastScrollY;
      if (lastScrollY > 56) {
        //margin_type = "sub_bar_margin"
      }
      else {
        //margin_type = "sub_bar_margin";
      }
    }

    return (
      <>
        <Helmet>
          <title>Zerodebug</title>
          <script> src="./javascripts.js"</script>
        </Helmet>

        <div class={margin_type}>
          <PageContent selectProductPage={selectProductPage} />
        </div>
      </>
    );

    function PageContent(props) {
      let selectProductPage = props.selectProductPage;
      return (
        <div>
          <div>
            <div>
              <Navibar selectProductPage={selectProductPage} page_id={page_id} opacity={opacity}/>
            </div>
          </div>
          {content}
        </div>
      );
    }
  }
}


