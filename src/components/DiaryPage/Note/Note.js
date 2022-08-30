import React from "react";


class Note extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(<div className="p-3 bg-pd-fade-blue rounded-xl border border-solid border-pd-stroke-blue mb-2">
            <div className="font-pd-sans-body text-base text-pd-text-gray">
                <span className="pr-2">{this.props.note}</span>
                <div className="text-pd-accent-blue items-center inline-flex">
                    <div className="text-xs mr-2">{this.props.timeString}</div>
                    <div className="material-icons-round cursor-pointer select-none font-thin">more_horiz</div>
                </div>
            </div>
        </div>);
    }
}

export default Note;