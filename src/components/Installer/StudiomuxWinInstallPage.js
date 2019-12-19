
import React from 'react'
import data from './ProductInstallPage.json';
import ProductInstallNavbar from './ProductInstallNavbar';

export default class StudiomuxWinInstallPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { page_id: props.page_id, submenu_id: props.submenu_id, item_number: props.item_number, data: data };
        this.vector = {};
    }

    render() {


        this.vector[0] = (
            <div >
                <div class="callout text-center">
                    <h4>Please download our latest server package for the system you use (32bit or 64bit) for Ableton Live</h4>
                    <a href="https://zerodebug.com/server/studiomux_x64_313.exe"><h3>For Windows (64bit):
            <img src="https://zerodebug.com/images/exe.png" alt="exe-icon" class="clipped-image" height="30"></img> Installerpackage v.428 (64bit)</h3></a>
                    <a href="https://zerodebug.com/server/studiomux_x86_313.exe"><h3>For Windows (32bit):
                <img src="https://zerodebug.com/images/exe.png" alt="exe-icon" class="clipped-image" height="30"></img>Installerpackage v.428 (32bit)</h3></a>
                    <h3><a href="https://www.tobias-erichsen.de/software/rtpmidi.html">rtpMIDI <img src="https://zerodebug.com/images/exe.png" alt="exe-icon" class="clipped-image" height="30"></img> for Win64 and Win32</a></h3>

                    <h3><a href="https://www.apple.com/itunes/download/win64">iTunes
            <img src="https://zerodebug.com/images/exe.png" alt="exe-icon" class="clipped-image" height="30"></img> for Windows (64bit)</a></h3>

                    <h3><a href="https://www.apple.com/itunes/download/win32">iTunes <img src="https://zerodebug.com/images/exe.png" alt="exe-icon" class="clipped-image" height="30"></img> for Windows (32bit)</a></h3>

                    <h4>Important: Download iTunes via the link above - don't use the version from the Windows Store!</h4>
                </div>
                <div class="calsl">
                    <h4>Please install rtpMIDI and optionally iTunes for Windows on your computer</h4>
                </div>
            </div>
        )

        this.vector[1] = (
            <div id="block-2">
                <h4>Download and install app and server. Once the server is installed, a new icon appears in the system tray.</h4>
                <h4>The vsts are not installed by default. please right-click the studiomux-icon in the taskbar and select ‘Install 64-Bit VSTs’ or ‘Install 32-Bit VSTs’ depending on your current Windows version.</h4>
                Thereafter, please point your DAW to this folder, or directly install into the DAWs favorite VST directory. if you want to install the VSTs after the first install please make sure to start the server with administrator permissions. also make sure, that the colour depth of your video cards driver is set to 32bit. otherwise the VSTs GUI is not displayed correctly.
            </div>
        )

        this.vector[2] = (
            <div>
                <div class="overflow-auto">

                    <h4>The context menu allows to claim and unclaim virtual MIDI ports and to quit the server. midimux doesn’t claim any ports by default. If you want to control an App with an external MIDI controller connected to your PC, you have to claim these ports via the midimux context menu. Thereafter they appear in the midimux GUI. The context menu doesn’t display local ports of your iOS device, since they cannot be claimed by the midimux app.
5. Connect iOS device and mac via usb cable.</h4>
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






