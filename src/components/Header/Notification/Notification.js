import React from "react";

class Notification extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="relative cursor-pointer select-none w-fit">
                <div className="flex justify-center items-center">
                    <div className="w-2.5 h-2.5 bg-pd-lotus-red rounded-full absolute right-0 top-0.5"></div>
                    <div className="material-icons-round md-24 text-pd-accent-blue">notifications</div>
                </div>
            </div>
        );
    }
}

export default Notification;