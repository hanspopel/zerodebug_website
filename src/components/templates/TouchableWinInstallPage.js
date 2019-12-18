
import React from 'react'
import '../../App.css';
import data from './TouchableInstallerPage.json';
import TouchableInstallerContainer from './TouchableInstallerContainer';

export default class TouchableWinInstallPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { page_id: props.page_id, submenu_id: props.submenu_id, data: data };
    }




    render() {

        let page_id = this.state.page_id;
        const data = this.state.data;

        const products = data.products;
        var product;

        var add_id = "";
        for (var i = 0; i < products.length; ++i) {
            var product_i = products[i];
            if (product_i.app_id == page_id) {
                product = product_i;
                break;
            }
        }

        if (!product) {
            return (
                <ul class="navbar-nav w-100 justify-content-start">
                    <li class="nav-item active">
                        <a class="nav-link" href="https://www.zerodebug.com">no page found</a>
                    </li>
                </ul>
            );
        }



        let main_content = (
            <div>
            <section id="block-1">

        <div class="videoWrapper">
        <iframe width="560" height="349" src="https://www.youtube.com/embed/ZCfKtxPxwAc" frameborder="0" allowfullscreen></iframe>
        </div>


            <div class="callout text-center" style={{marginTop:"56px"}}>
                <h3>First Step: Download server and prerequisites</h3>
                <h4>Please download our latest server package for the system you use (32bit or 64bit) for Ableton Live</h4>

                <a href="https://zerodebug.com/server/touchAble_428_x64.exe"><h3>For Windows (64bit):
            <img src="https://zerodebug.com/images/exe.png" alt="exe-icon" class="clipped-image" height="30"></img> Installerpackage v.428 (64bit)</h3></a>

                <a href="/server/touchAble_428_x86.exe"><h3>For Windows (32bit):
<img src="https://zerodebug.com/images/exe.png" alt="exe-icon" class="clipped-image" height="30"></img>Installerpackage v.428 (32bit)</h3></a>

                <h3><a href="https://www.tobias-erichsen.de/software/rtpmidi.html">rtpMIDI <img src="https://zerodebug.com/images/exe.png" alt="exe-icon" class="clipped-image" height="30"></img> for Win64 and Win32</a></h3>

                <h3><a href="https://www.apple.com/itunes/download/win64">iTunes
            <img src="https://zerodebug.com/images/exe.png" alt="exe-icon" class="clipped-image" height="30"></img> for Windows (64bit)</a></h3>

                <h3><a href="https://www.apple.com/itunes/download/win32">iTunes <img src="https://zerodebug.com/images/exe.png" alt="exe-icon" class="clipped-image" height="30"></img> for Windows (32bit)</a></h3>



                <h4>Important: Download iTunes via the link above - don't use the version from the Windows Store!</h4>
            </div>

            <div class="call">

                <h4>Please install rtpMIDI and optionally iTunes for Windows on your computer</h4>
            </div>
        </section>
            <section id="block-2" style={{marginTop:"56px"}}>
            <div class="overflow-auto" style={{marginTop:"56px"}}>

                <h4>Next step: Server Installation</h4>
            </div>
            <div class="callout text-center">
                <h3>Second Step: Server Installation</h3>
                <h4>Please double-click the package you just downloaded</h4>
                <img src="https://zerodebug.com/images/installer_on_desktop.png" alt="downloadedpexe-icon" class="clipped-image" width="500"></img>
                <h4>Please double-click the package you just downloaded</h4>
                <h4>In the upcoming dialogs, just follow through</h4>
                <img src="https://zerodebug.com/images/installer1.png" alt="install1-icon" class="clipped-image" width="500"></img>
                <h4>Just click "Next" (or click "View our Setup Guide" to visit this page)</h4>
                <img src="https://zerodebug.com/images/installer2.png" alt="install2-icon" class="clipped-image" width="500"></img>
                <h4>Just click "Next"</h4>
                <img src="https://zerodebug.com/images/installer3.png" alt="install3-icon" class="clipped-image" width="500"></img>
                <h4>Just click "Next"</h4>
                <img src="https://zerodebug.com/images/installer5.png" alt="install4-icon" class="clipped-image" width="500"></img>
                <h4>Just click "Next"</h4>
                <img src="https://zerodebug.com/images/installer6.png" alt="install4-icon" class="clipped-image" width="500"></img>
                <h4>Installation is nearly done, click "Finish"</h4>
                <h4>The just installed server will start automatically</h4>



                <div class="call">
                    <h4>You have successfully installed the server on the Windows machine you have Ableton Live installed on.
                    IMPORTANT: In case you use touchAble Pro for Windows on another Windows touchscreen,
you have to install and run the server on that Windows 10 machine, too!</h4></div>
                <div class="call">
                    <h4>Next step: Script Installation</h4>
                </div>
            </div>
        </section>
        
            <section id="block-3">
            <div style={{marginTop:"200px"}}>
            <div class="callout text-center" style={{marginTop:"56px"}}>
                <h3>Third Step: Script Installation</h3>
                <h4>Be aware that the server is a windowless application!</h4>
                <h4>The server only puts a small icon in the system tray.</h4>
                <img src="https://zerodebug.com/images/server1.png" alt="server-icon" class="clipped-image" width="500"></img>
                <h4>Click the server-icon in the system tray</h4>
                <img src="https://zerodebug.com/images/server2.png" alt="scriptdialog" class="clipped-image" width="500"></img>
                <h4>Click "Install Script"</h4>
                <img src="https://zerodebug.com/images/installer7.png" alt="scriptdialog" class="clipped-image" width="500"></img>
                <h4>The Installation-Dialog for the scripts pops up</h4>
                <h4>Click on the triangle and the dialog shows you other instances
                    of Live you may have installed on your computer.
                    Select the version of Live you want the scripts install into.
                Click "Install"</h4>

                <img src="https://zerodebug.com/images/installer8.png" alt="install4-icon" class="clipped-image" width="500"></img>
                <h4>Congratulation! The scripts are installed in Ableton Live</h4>

                <div class="call">
                    <h4>Next step: Configuration of Live's Preferences</h4>
                </div>
            </div>
            </div>
        </section>
        
            <section id="block-4" style={{marginTop:"56px"}}>
            <div class="callout text-center" style={{marginTop:"56px"}}>
                <h3>Fourth Step: Configuration of Live's Preferences</h3>
                <h4>Open the version of Ableton Live you installed the scripts into</h4>
                <img src="https://zerodebug.com/images/live01.png" alt="live" class="clipped-image" width="500"></img>
                <h4>Open Live's preferences</h4>
                <img src="https://zerodebug.com/images/live_preferences.png" alt="liveprefs" class="clipped-image" width="500"></img>
                <h4>Select "touchAble" as your "Control Surface"</h4>
                <h4>Set the "Input" to "touchAble Script Input", leave "Output" alone</h4>
                <h4>In the "Midi Ports"-section activate "Track" and "Remote" for "touchAble" and</h4>
                <h4>deactivate "Track", "Sync" and "Remote" for  "touchAble Input (touchAble Script Input)"</h4>
                <h4>If your Preferences look like the image above, you are good to go</h4>
                <h4>Quit Ableton Live and re-open it</h4>
                <h4>Congratulation! Ableton Live is configured correctly</h4>

                <div class="call">
                    <h4>Next step: Configure touchAble Pro on your mobile device</h4>
                </div>
            </div>
        </section>

            <section id="block-5">
            <div class="callout text-center">
                <h3>Fifth Step: Configuration of touchAble Pro
                on your mobile device</h3>

                <h4>Open touchAble Pro on your mobile device</h4>
                <h5>If you open touchAble Pro for the first time on your mobile device,
                    the touchAble Pro icon will pop up and fade into the opening-screen.

                If touchAble Pro was opened before, you will be led directly to the opening-screen.</h5>

                <img src="https://zerodebug.com/images/tap01.png" alt="tap-opening" class="clipped-image" width="500"></img>

                <img src="https://zerodebug.com/images/tap03.png" alt="tap-opening3" class="clipped-image" width="500"></img>
                <h4>Click the connection-icon (in the screenshot red) in the main bar on top to see the connection-status</h4>

                <img src="https://zerodebug.com/images/connection01.png" alt="connections01" class="clipped-image" width="500"></img>

                <h4>The dialog shows all servers touchAble can connect to.
                    In our example there are two servers available.
                    For each server the dialog shows the name of the computer, the version of Live ,
                the version of the server-software and the version of the installed scripts.</h4>

                <h4>In our example, the server "Peters-MacBook-Pro" shows
                Live 10.0.3, server-software version 412 and script-version 412 correctly installed.</h4>

                <h4>The server "Olivers-MacBook-Pro" shows that Ableton Live is not running.
                You have to start Live before you can connect to this server.</h4>

                <h4>Click on the server-information for the server you want to connect to.
                    touchAble will connect to the chosen server.
                Establishing a connection to a Windows-PC works just the same!</h4>

                <img src="https://zerodebug.com/images/connection02.png" alt="connections02" class="clipped-image" width="500"></img>
                <div class="call">
                    <h4>Congratulations, touchAble Pro on your Mobile Device
                    is now connected to your Ableton Live</h4>

                </div>
                <h4>In the connection-dialog, problems that would hinder touchAble
                to connect to a specific server are shown in RED in the information for that server.</h4>

                <img src="https://zerodebug.com/images/connection03.png" alt="connections03" class="clipped-image" width="500"></img>
                <h4>The information "Control Surface not responding"
                    while Ableton Live is up and running may
                    indicate problems with your script-installation.
                Please check and reinstall the scripts if necessary.</h4>


                <div class="call">

                </div>

                <div class="call"><strong>
                    <h2>C O N G R A T U L A T I O N</h2>
                </strong>
                    <strong>
                        <h2>Y O U R&nbsp;&nbsp;&nbsp;S E T U P&nbsp;&nbsp;&nbsp;I S&nbsp;&nbsp;&nbsp;D O N E</h2>
                    </strong>
                    <strong>
                        <h2>You are ready to rumble!</h2>
                    </strong></div>
            </div>
        </section>
    </div>

        )


        let desc_container = product.desc_container.map((store_item, i) => {
            return (
                <TouchableInstallerContainer product_number={i} page_id={this.state.page_id} submenu_id={this.state.submenu_id} store_item={store_item} main_content={main_content} />
            );
        });


        return (
            
            
            <div>
            <div>
            {desc_container}
            </div>
            </div>
            
        );


    }
}






