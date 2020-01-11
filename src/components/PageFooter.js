import React from 'react'

export default class PageFooter extends React.Component {
    render() {
        return (
            <div class="footer_styles">
            <div class="footer_margin">
            <footer class="container" width="100%">
            <button class="navbar-toggler justify-content-start" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="row" id="navbarSupportedContent">
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
                            <li><a class="text-muted" href="https://community.zerodebug.com/" target="blank">Forum</a></li>
                            <li><a class="text-muted" href="http://help.touch-able.com/" target="blank">Helpdesk</a></li>
                            <li><a class="text-muted" href="mailto:pascal@zerodebug.com?subject=A%20Mail%20from%20Website">Mail</a></li>
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
