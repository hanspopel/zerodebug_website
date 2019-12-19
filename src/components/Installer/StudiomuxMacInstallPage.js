
import React from 'react'
import data from './ProductInstallPage.json';
import ProductInstallNavbar from './ProductInstallNavbar';

export default class StudiomuxMacInstallPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { page_id: props.page_id, submenu_id: props.submenu_id, item_number: props.item_number, data: data };
        this.vector = {};
    }


    render() {


        this.vector[0] = (
            <div>
            <div class="callout text-center">
                <h4>Download and install the app and server and make sure to deinstall previous versions of midimux and audiomux.</h4>
                <a href="https://zerodebug.com/server/studiomux_310b.pkg">
                    <img src="https://zerodebug.com/images/pkg.png" alt="pkg-icon" class="app-icon" height="30"></img> touchAble428.pkg</a>
                <div class="call">
                <h4>Once the server is installed and the mac has been restarted, a new icon will appear in the system tray.
The context menu displays the currently available and connected iOS devices and the status of the audio device.
On Mac OSX 10.8+ you can load or unload the audio device by clicking load/unload audio device.
Each status change requires an admin password entry.
You may quit the server by clicking quit and restart it – whenever you need it – from the Applications folder.</h4>
                </div>
            </div>
        </div>
        )

        this.vector[1] = (
            <div>
            <div class="callout text-left">
                <center>
                    <h3>Connect iOS device and mac via usb cable</h3>
                </center>
            </div>
        </div>
        )

        return (
            <div>
                {this.vector[this.state.item_number]}
            </div>
        );
    }
}






