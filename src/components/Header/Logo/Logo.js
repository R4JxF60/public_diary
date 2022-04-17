import React from "react";

class Logo extends React.Component {
    constructor(props) {
        super(props);
        this.render = this.render.bind(this);
    }

    render() {
        return (
            <div>
                <a href="#" className="cursor-pointer font-pd-handwrite text-pd-accent-blue text-pd-3xl-ex">{this.props.logoText}</a>
            </div>
        );
    }
}

export default Logo;