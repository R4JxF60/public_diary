import React from "react";

class BackgroundDiv extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return <div className="font-pd-sans-body p-6 bg-pd-pure-white border border-solid border-pd-stroke-blue rounded-2xl dark:bg-pd-dark-fade-black dark:border-none w-full h-fit mb-1.5">{this.props.children}</div>
    }
}

export default BackgroundDiv;