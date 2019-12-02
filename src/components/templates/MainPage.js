import React from 'react';
import '../../App.css';
import Navibar from './Navibar'
import ProductPage from './ProductPage'
import PageHeader from './PageHeader'
import { Helmet } from 'react-helmet'


export default class MainPage extends React.Component{

  constructor(props) {
    super(props);
    this.selectProductPage = this.selectProductPage.bind(this);
    this.state = {page_id: "touchAble", submenu_id:"landing_page"};
  }


  //selectProductPage() { /* completing stuff */ }


  selectProductPage(app_id, submenu_id) {
    this.setState({page_id: app_id,submenu_id: submenu_id});
  };

  //  componentDidMount() {
  //    document.title = "Zerodebug";
  //  }


  handleScroll(event) {
    this.setState({page_id: "app_id",submenu_id: "submenu_id"});
  }

render() {
    let selectProductPage = this.selectProductPage;
    let page_id = this.state.page_id;
    let submenu_id= this.state.submenu_id;
    let content;
    content = <ProductPage page_id={page_id} submenu_id={submenu_id}/>


return (
  <>
  <Helmet>
  <title>Zerodebug</title> 
  <script> src="./scrollscript.js"</script>

  </Helmet>
 
    <div>
    <PageContent selectProductPage={selectProductPage}/>
    </div>
    </>
);

   function  PageContent(props) {
    let selectProductPage = props.selectProductPage;
    return (
    <div>
    <PageHeader/>
    <div>
    <div>
    <Navibar selectProductPage ={selectProductPage} page_id ={page_id}/>
    </div>
    </div>
    {content}
    </div>
    );
}
}
}


