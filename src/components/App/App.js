import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Navigations from "../Header/Navigations/Navigations";
import Content from "../Content/Content";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Header onMobile={this.props.onMobile} split={this.props.split} />
                <div className="flex flex-col md:items-center md:flex-row">
                    <Sidebar onMobile={this.props.onMobile} split={this.props.split} />
                    <Content />
                </div>
                {(this.props.split) ? <Navigations onMobile={this.props.onMobile} split={this.props.split} /> : false}
            </React.Fragment>
        );
    }
}

export default App;