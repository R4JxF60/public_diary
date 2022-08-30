import React from "react";

class Like extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="bg-pd-fade-blue border border-solid border-pd-stroke-blue w-fit rounded-xl p-3 text-pd-text-gray">
                <span>Liked by </span><span className="text-pd-accent-blue cursor-pointer underline">{this.props.by}</span>
            </div>
        );
    }
}

export default Like;