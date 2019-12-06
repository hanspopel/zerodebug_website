import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';

export default class PageFooter extends React.Component {
    render() {
        return (
            <div class="footer_styles">
            <div class="footer_margin">
            <footer class="container" width="100%">
                <div class="row">
                    <div class="col-6 col-sm">
                        <h5 class="footer-heading footer_margin">Location</h5>
                        <ul class="list-unstyled text-small">
                            <li><a class="text-muted" href="#">Zerodebug</a></li>
                            <li><a class="text-muted" href="#">Niemetzstrasse 47</a></li>
                            <li><a class="text-muted" href="#">12055 Berlin</a></li>
                            <li><a class="text-muted" href="#">Germany</a></li>
                        </ul>
                    </div>
                    <div class="col-6  col-sm">
                        <h5 class="footer-heading footer_margin">Contact</h5>
                        <ul class="list-unstyled text-small">
                            <li><a class="text-muted" href="#">Forum</a></li>
                            <li><a class="text-muted" href="#">Helpdesk</a></li>
                            <li><a class="text-muted" href="#">Mail</a></li>
                            <li><a class="text-muted" href="#"></a></li>
                        </ul>
                    </div>
                    <div class="col-6 col-sm">
                        <h5 class="footer-heading footer_margin">Products</h5>
                        <ul class="list-unstyled text-small">
                            <li><a class="text-muted" href="#">touchAble</a></li>
                            <li><a class="text-muted" href="#">studiomux</a></li>
                            <li><a class="text-muted" href="#">soda</a></li>
                            <li><a class="text-muted" href="#">modstep</a></li>
                        </ul>
                    </div>
                    <div class="col-sm col-sm">
                        <h5 class="footer-heading footer_margin">Resources</h5>
                        <ul class="list-unstyled text-small">
                            <li><a class="text-muted" href="#">Privacy Policy</a></li>
                            <li><a class="text-muted" href="#">Downloads</a></li>
                            <li><a class="text-muted" href="#">Archive</a></li>
                        </ul>
                    </div>
                </div>
                <div class="copyright-footer" style={{padding: '25px'}}>
                    <center>
                        <div class="">
                        &copy; 2018 <img src="./logo_zerodebug_white.png" width="30"></img> zerodebug. All Rights Reserved, zerodebug
                        </div>
                        <container height="25px">
                        </container>
                </center>
                </div>
            </footer>
            </div>
        </div>
        );
    }
}
