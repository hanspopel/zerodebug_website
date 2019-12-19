import React from 'react'

export default class ManualPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { page_id: props.page_id, submenu_id: props.submenu_id };
    }


    render() {

        let src_url = "";

        if (this.state.page_id === "touchAble") {
            src_url = "https://zerodebug.com/touchable/touchAbleProManual.pdf";
        }
        else if (this.state.page_id === "studiomux") {
            src_url = "https://zerodebug.com/StudiomuxManualReduced.pdf";
        }

        return (
            <div class="main">
                <embed src={src_url} width="100%" height="3000px" type="application/pdf"></embed>
            </div>
        );
    }
}
