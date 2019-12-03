import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';
import '../../App.css';

export default class  PageFooter extends React.Component{
    render() {
        return (
            <footer class="container asdasd py-5 bg-dark" width="100%">
            <div class="row">
                <div class="col-6 col-sm">
                    <h5 class="footer-heading">Location</h5>
                    <ul class="list-unstyled text-small">
                        <li><a class="text-muted" href="#">Zerodebug</a></li>
                        <li><a class="text-muted" href="#">Niemetzstrasse 47</a></li>
                        <li><a class="text-muted" href="#">12055 Berlin</a></li>
                        <li><a class="text-muted" href="#">Germany</a></li>
                    </ul>
                </div>
                <div class="col-6  col-sm">
                    <h5 class="footer-heading">Contact</h5>
                    <ul class="list-unstyled text-small">
                        <li><a class="text-muted" href="#">Forum</a></li>
                        <li><a class="text-muted" href="#">Helpdesk</a></li>
                        <li><a class="text-muted" href="#">Mail</a></li>
                        <li><a class="text-muted" href="#"></a></li>
                    </ul>
                </div>
                <div class="col-6 col-sm">
                    <h5 class="footer-heading">Products</h5>
                    <ul class="list-unstyled text-small">
                        <li><a class="text-muted" href="#">touchAble</a></li>
                        <li><a class="text-muted" href="#">studiomux</a></li>
                        <li><a class="text-muted" href="#">soda</a></li>
                        <li><a class="text-muted" href="#">modstep</a></li>
                    </ul>
                </div>
                <div class="col-sm col-sm">
                    <h5 class="footer-heading">Resources</h5>
                    <ul class="list-unstyled text-small">
                        <li><a class="text-muted" href="#">Privacy Policy</a></li>
                        <li><a class="text-muted" href="#">Downloads</a></li>
                        <li><a class="text-muted" href="#">Archive</a></li>
                    </ul>
                </div>
            </div>
            <div class="copyright-footer">
                <center >
                    &copy; 2018 <img src="./logo_zerodebug_white.png" width="30"></img> zerodebug. All Rights Reserved, zerodebug
                </center>
            </div>
        </footer>

            );
}
}
