import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Navigations from "../Header/Navigations/Navigations";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Header onMobile={this.props.onMobile} split={this.props.split} />
                <Sidebar onMobile={this.props.onMobile} split={this.props.split} />
                {(this.props.split) ? <Navigations onMobile={this.props.onMobile} split={this.props.split} /> : false}
            </React.Fragment>
        );
    }
}

export default App;