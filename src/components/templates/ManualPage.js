import React from 'react'
import '../../App.css';

export default class ManualPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { page_id: props.page_id, submenu_id: props.submenu_id };
    }


    render() {
        return (
            <div class="main" style={{marginTop:"56px"}}>
                <embed src="https://zerodebug.com/touchable/touchAbleProManual.pdf" width="100%" height="3000px" type="application/pdf"></embed>
            </div>
        );
    }
}
