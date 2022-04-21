import React from "react";

class TodayDiv extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="lg:w-80 md:w-64 w-64 h-24 flex items-center bg-pd-fade-blue border border-solid border-pd-stroke-blue rounded-lg m-2">
                <div className="bg-pd-accent-blue rounded-lg w-2/6 h-full flex items-center justify-center flex-col font-pd-sans-body text-pd-pure-white">
                    <div className="font-semibold text-2xl">3:16</div>
                    <div className="font-medium text-base">PM</div>
                </div>
                <div></div>
            </div>
        );
    }
}

export default TodayDiv;