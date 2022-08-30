import React from "react";

class LetsReadDiv extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className="bg-pd-accent-blue rounded-xl flex flex-col items-center font-pd-sans-body text-pd-pure-white lg:w-72 w-64 p-3">
            <div className="text-2xl font-semibold">{this.props.name}</div>
            <div className="text-sm">{"Diary writter since "+this.props.joinedDateString}</div>
            <div className="cursor-pointer bg-pd-pure-white text-pd-accent-blue text-xl font-medium pl-3 pr-3 pt-2 pb-2 rounded-xl mt-2">Lets Read</div>
            <div className="material-icons-round cursor-pointer mt-2">more_horiz</div>
        </div>);
    }
}

export default LetsReadDiv;