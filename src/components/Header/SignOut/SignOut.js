import React from "react";
import SignOutInfoDiv from "../SIgnOutInfoDiv/SignOutInfoDiv";

class SignOut extends React.Component {
    constructor(props) {
        super(props);
        this.render = this.render.bind(this);
        this.handleExpand = this.handleExpand.bind(this);
        this.expandBtn = React.createRef();
        this.state = {isExpaned: false, icon: "expand_more"};
    }

    handleExpand() {
        this.state.isExpaned ? this.setState({icon: "expand_more"}) : this.setState({icon: "expand_less"});
        this.setState({isExpaned: !this.state.isExpaned});
    }

    render() {
        return (
            <div className="relative">
                <div ref={this.expandBtn} onClick={this.handleExpand} className="bg-pd-accent-blue w-9 h-9 rounded-full material-icons-round md-24 text-pd-pure-white flex justify-center items-center cursor-pointer select-none">{this.state.icon}</div>
                {this.state.isExpaned ? <SignOutInfoDiv /> : false}
            </div>
        );
    }
}

export default SignOut;