import React from 'react'
import SubNavbar from './Navbar/SubNavbar'
import PageFooter from './PageFooter'
import ProductLandingPage from './LandingPage/ProductLandingPage'
import ManualPage from './Manual/ManualPage'
import ProductInstallPage from './Installer/ProductInstallPage'
import ProductFAQPage from './FAQ/ProductFAQPage'


export default class PatientTable extends React.Component {


  constructor(props) {
    super(props);
    this.state = { reload: true, page_id: props.page_id, submenu_id: props.submenu_id };
    this.selectSubPage = this.selectSubPage.bind(this);
  }

  nav = React.createRef();


  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
    this.nav.current.classList.add('ref={this.nav}');
    //this.nav.current.classList.add('fixed-bottom');
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    this.nav.current.classList.remove('ref={this.nav}');
  }

  handleScroll = () => {
    let lastScrollY = window.scrollY;
    if (!this.nav.current) {
      return;
    }
    if (lastScrollY > 56 && this.state.page_id !== "zerodebug") {
      //this.nav.current.style.marginTop = 56 + "px";
    }
    else {
      //this.nav.current.style.marginTop = 0 + "px";

    }
  }

  selectSubPage(submenu_id) {
    this.setState({ submenu_id: submenu_id, page_id: this.state.page_id });
    console.log("asdasdasdsd")
  };

  createNavbar() {
    let selectSubPage = this.selectSubPage;
    let page_id = this.state.page_id;
    if (page_id === "szerodebug") {
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
    else if (submenu_id === "setup-mac" || submenu_id === "setup-win") {
      content = <ProductInstallPage page_id={page_id} submenu_id={submenu_id} />
    }
    else if (submenu_id === "faq") {
      content = <ProductFAQPage page_id={page_id} submenu_id={submenu_id} />
    }
    else {
      content = <div class="main"></div>
    }

    return (
      <div ref={this.nav}>
        {content}
      </div>
    )

  }
  createFooter(props) {
    if (this.state.submenu_id === "landing_page") {
      return (
        <PageFooter />
      )
    }
    return (
      <div>
      </div>
    )
 
  }


  render() {

    return (

      [this.createNavbar(), this.createMain(), this.createFooter()]


    );
  }

}






