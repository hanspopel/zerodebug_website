
import React from 'react'
import '../../App.css';

export default class TouchableMacInstallPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { page_id: props.page_id, submenu_id: props.submenu_id };
    }


    render() {
        return (
            <div style={{marginTop:"56px"}}>

<div id="sidebar" style={{height:"600px"}}>
    <div class="h-25 d-inline-block" style={{backgroundColor:"var(--accent-bg-color)"}}>
    <a class="" href="#block-1">
          <i class=""></i>
          <div class="rotated-text">
          Downloads
          </div>
        </a>
    </div>  
    <div class="h-25 d-inline-block" style={{backgroundColor:"var(--secondary-accent-bg-color)"}}>
    <a href="#block-2">
          <i class="zmdi zmdi-view-dashboard"></i> 
          <div class="rotated-text">
          Install Server
          </div>
        </a>
    </div>   
    <div class="h-25 d-inline-block" style={{backgroundColor:"var(--third-accent-bg-color)"}}>
    <a href="#block-3">
          <i class="zmdi zmdi-view-dashboard"></i> 
          <div class="rotated-text">
          Install Script
          </div>
        </a>
    </div>    
    <div class="h-25 d-inline-block" style={{backgroundColor:"var(--fourth-accent-bg-color)"}}>
    <a href="#block-4">
          <i class="zmdi zmdi-view-dashboard"></i> 
          <div class="rotated-text">
          Configure Live
          </div>
        </a>
    </div>    
    <div class="h-25 d-inline-block" style={{backgroundColor:"var(--fifth-accent-bg-color)"}}>
    <a href="#block-5">
          <i class="zmdi zmdi-view-dashboard"></i> 
          <div class="rotated-text">
          Configure touchAble
          </div>
        </a>
    </div>       
  </div>

                <section id="block-1">
                <div>
                    <div class="callout text-left">

                        <center>
                            <div class="embed-container">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/NjXQ0uP3cY4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                            </div>
                            <h3>touchAble Pro – Mac Setup Video</h3>
                        </center>
                    </div>
                </div>
                </section>
                <section id="block-2">
                <div>
                    <div class="callout text-center">
                        <h3>First Step: Server Download</h3>
                        <h4>Please download our latest server package to the mac you use for Ableton Live</h4>
                        <a href="https://zerodebug.com/server/touchAble428.pkg">
                            <img src="./modstep_icon_web.png" alt="pkg-icon" class="app-icon" height="30"></img> touchAble428.pkg</a>
                        <div class="call">
                            <h4>Next step: Server Installation</h4>
                        </div>
                    </div>
                </div>
                </section>
                <section id="block-3">
                <div >
                    <div class="callout text-center">
                        <h3>Second Step: Server Installation</h3>
                        <img src="https://zerodebug.com/images/downloadedpkg.png" alt="downloadedpkg-icon" class="clipped-image" width="500"></img>
                        <h4>Please double-click the package you just downloaded</h4>
                        <h4>In the upcoming dialogs, just follow through</h4>
                        <img src="https://zerodebug.com//images/install01.png" alt="install1-icon" class="clipped-image" width="500"></img>
                        <h4>Just click "Continue"</h4>
                        <img src="https://zerodebug.com//images/install02.png" alt="install2-icon" class="clipped-image" width="500"></img>
                        <h4>Just click "Install"</h4>
                        <img src="https://zerodebug.com//images/install03.png" alt="install3-icon" class="clipped-image" width="500"></img>
                        <h4>After clicking "Install" you will have to authorize the installation with an admin-password</h4>
                        <img src="https://zerodebug.com//images/install04.png" alt="install4-icon" class="clipped-image" width="500"></img>
                        <h4>Installation is done, just click "Close"</h4>
                        <h4>The server will start automatically
            <br></br>
                            <img src="https://zerodebug.com//images/touchAble.app.png" alt="touchAble.app-icon" class="app-icon" width="120"></img>
                        </h4>
                        <p></p>
                        <div class="call">
                            <h4>You have successfully installed the server on the MAC you have Ableton Live installed on.
            IMPORTANT: In case you use touchAble Pro for Windows on a Windows touchscreen,<br></br>
                                you have to install and run the server on that Windows 10 machine, too!<br></br>For the server-installation on a Windows PC follow our Win-Guide.</h4></div>
                        <div class="call">
                            <h4>Next step: Script Installation</h4>
                        </div>
                    </div>
                </div>
                </section>
                <section id="block-4">
                <div>

                    <div class="callout text-center">
                        <h3>Third Step: Script Installation</h3>
                        <h4>Be aware that touchAble.app is a windowless application!</h4>
                        <h4>touchAble only puts a small icon in the right side of the menubar.</h4>
                        <img src="https://zerodebug.com//images/touchAbleMenubarIcon.jpg" alt="touchAbleMB-icon" class="clipped-image" width="350"></img>
                        <h4>Click the touchAble-icon in the menubar</h4>
                        <img src="https://zerodebug.com//images/install05.png" alt="scriptdialog" class="clipped-image" width="350"></img>
                        <h4>Click "Install Script" or hit "Shift-Command-R"</h4>
                        <h4>The Installation-Dialog pops up</h4>
                        <img src="https://zerodebug.com//images/scriptinstall3.png" alt="install4-icon" class="clipped-image" width="500"></img>
                        <h4>Click on the triangle and the dialog shows you your instances of Live</h4>
                        <img src="https://zerodebug.com//images/scriptinstall4.png" alt="install4-icon" class="clipped-image" width="500"></img>
                        <h4>Select the version of Live you want the scripts install into.</h4>
                        <img src="https://zerodebug.com//images/scriptinstall5.png" alt="install4-icon" class="clipped-image" width="500"></img>
                        <h4>Click "Install"</h4>
                        <img src="https://zerodebug.com//images/scriptinstall6.png" alt="install4-icon" class="clipped-image" width="500"></img>
                        <h4>Congratulation! The scripts are installed in Ableton Live</h4>
                        <div class="call">
                            <h4>Next step: Configuration of Live's Preferences</h4>
                        </div>
                    </div>
                </div>
                </section>
                <section id="block-5">
                <div>
                    <div class="callout text-center">
                        <h3>Fourth Step: Configuration of Live's Preferences</h3>
                        <h4>Open the version of Ableton Live you installed the scripts into</h4>
                        <img src="https://zerodebug.com//images/live01.png" alt="live" class="clipped-image" width="500"></img>
                        <h4>Open Live's preferences</h4>
                        <img src="https://zerodebug.com//images/live02.png" alt="liveprefs" class="clipped-image" width="500"></img>
                        <h4>Select "touchAble" as your "Control Surface"</h4>
                        <h4>Set the "Input" to "touchAble Script Input", leave "Output" alone</h4>
                        <h4>In the "Midi Ports"-section activate "Track" and "Remote" for "touchAble" and</h4>
                        <h4>deactivate "Track", "Sync" and "Remote" for  "touchAble Input (touchAble Script Input)"</h4>
                        <h4>If your Preferences look like the image above, you are good to go</h4>
                        <img src="https://zerodebug.com//images/live03.png" alt="livequit" class="clipped-image" width="300"></img>
                        <h4>Quit Ableton Live and re-open it</h4>
                        <h4>Congratulation! Ableton Live is configured correctly</h4>
                        <div class="call">
                            <h4>Next step: Configure touchAble Pro on your mobile device</h4>
                        </div>

                    </div>
                </div>
                </section>
                <section id="block-6">
                <div>
                    <div class="callout text-center">
                        <h3>Fifth Step: Configuration of touchAble Pro
                            on your mobile device
        </h3>
                        <h4>Open touchAble Pro on your mobile device</h4>
                        <h5>If you open touchAble Pro for the first time on your mobile device,
                            the touchAble Pro icon will pop up and fade into the opening-screen.
        </h5>
                        <img src="https://zerodebug.com//images/tap01.png" alt="tap-opening" class="clipped-image" width="500"></img>
                        <img src="https://zerodebug.com//images/tap03.png" alt="tap-opening3" class="clipped-image" width="500"></img>
                        <h4>Click the connection-icon (in the screenshot red)
                            in the main bar on top to see the connection-status
        </h4>
                        <h4>The color of the connection-icon is "red"
                            as long as touchAble doesn't find any server,
                            it changes to "white" when servers are found.
                            The moment touchAble is connected to Live
                            the icon changes to a blue wifi-beam icon
        </h4>
                        <img src="https://zerodebug.com//images/connection01.png" alt="connections01" class="clipped-image" width="500"></img>
                        <h4>The dialog shows all servers touchAble can connect to.
                            In our example there are two servers available.
                            For each server the dialog shows the name of the computer, the version of Live ,
                            the version of the server-software and the version of the installed scripts.
        </h4>
                        <h4>In our example, the server "Peters-MacBook-Pro" shows
                            Live 10.0.3, server-software version 412 and script-version 412 correctly installed.
        </h4>
                        <h4>The server "Olivers-MacBook-Pro" shows that Ableton Live is not running.
                            You have to start Live before you can connect to this server.
        </h4>
                        <h4>Click on the server-information for the server you want to connect to.
                            touchAble will connect to the chosen server.
        </h4>
                        <img src="https://zerodebug.com//images/connection02.png" alt="connections02" class="clipped-image" width="500"></img>
                        <div class="call">
                            <h4>Congratulations, touchAble Pro on your Mobile Device
                                is now connected to your Ableton Live
            </h4>
                        </div>
                        <h4>You want to know how many connections from different
                            instances of "touchAble Pro" to your Ableton Live are running?
                            Just click the touchAble-Pro-server-icon in the menubar and you will see.
        </h4>
                        <img src="https://zerodebug.com//images/install05.png" alt="numberofconnections" class="clipped-image" width="300"></img>
                        <h4>In the connection-dialog, problems that would hinder touchAble
                            to connect to a specific server are shown in RED in the information for that server.
        </h4>
                        <img src="https://zerodebug.com//images/connection03.png" alt="connections03" class="clipped-image" width="500"></img>
                        <h4>The information "Control Surface not responding"
                            while Ableton Live is up and running may
                            indicate problems with your script-installation.
                            Please check and reinstall the scripts if necessary.
        </h4>

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
                </div>
                </section>
            </div>
        );
    }
}






