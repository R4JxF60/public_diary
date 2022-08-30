import React from "react";

class Readings extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="border border-solid border-pd-stroke-blue bg-pd-fade-blue rounded-xl flex w-fit p-3 font-pd-sans-body text-base text-pd-text-gray hover:border-pd-accent-blue">
                <div className="mr-3"><span className="text-pd-accent-blue underline font-normal">{this.props.name}</span>'s Diary</div>
                <div className="material-icons-round text-pd-lotus-red cursor-pointer">remove_circle</div>
            </div>
        );
    }
}

export default Readings;