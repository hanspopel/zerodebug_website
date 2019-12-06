import React from 'react'
import { render } from 'react-dom'
import '../../App.css';
import Nav from 'react-bootstrap/Nav';
import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';
import SubNavbar from './SubNavbar'
import PageFooter from './PageFooter'
import ProductLandingPage from './ProductLandingPage'
import ManualPage from './ManualPage'
import InstallPage from './InstallPage'


export default class PatientTable extends React.Component {


  constructor(props) {
    super(props);
    this.state = { reload: true, page_id: props.page_id, submenu_id: "landing_page" };
    this.selectSubPage = this.selectSubPage.bind(this);
  }


  selectSubPage(submenu_id) {
    this.setState({ submenu_id: submenu_id, page_id: this.state.page_id });
    console.log("asdasdasdsd")
  };

  createNavbar() {
    let selectSubPage = this.selectSubPage;
    let page_id = this.state.page_id;
    if (page_id != "zerodebug") {
      return (
        <div>
          <SubNavbar page_id={page_id} selectSubPage={selectSubPage} />
        </div>
      )
    }
    else {
      return (
        <div>
        </div>
      )
    }
  }

  createMain(props) {
    let page_id = this.state.page_id;
    let submenu_id = this.state.submenu_id;


    let content;

    if (submenu_id === "landing_page") {
      content = <ProductLandingPage page_id={page_id} submenu_id={submenu_id} />
    }
    else if (submenu_id === "manual") {
      content = <ManualPage page_id={page_id} submenu_id={submenu_id} />
    }
    else if (submenu_id === "setup-mac") {
      content = <InstallPage page_id={page_id} submenu_id={submenu_id} />
    }
    else if (submenu_id === "setup-win") {
      content = <InstallPage page_id={page_id} submenu_id={submenu_id} />
    }
    else {
      content = <div class="main"></div>
    }

    return (
      content
    )

  }
  createFooter(props) {
    return (
      <PageFooter />
    )
  }


  render() {

    return (

      [this.createNavbar(), this.createMain(), this.createFooter()]


    );
  }

}






