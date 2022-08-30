import React from "react";


class DayDiv extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="flex items-center justify-between font-pd-sans-body border border-solid border-pd-stroke-blue rounded-xl bg-pd-fade-blue p-3 dark:bg-pd-dark-black dark:border-none mb-2 hover:border-pd-accent-blue duration-200 ease-in-out cursor-pointer lg:w-72 w-64">
                <div>
                    <div className="text-base font-medium text-pd-accent-blue dark:text-pd-dark-accent-blue">{this.props.dayTitle}</div>
                    <div className="text-xs font-normal text-pd-text-gray dark:text-pd-dark-text-blue"><span className="font-medium underline cursor-pointer text-pd-accent-blue dark:text-pd-dark-accent-blue">{this.props.user}</span>'s day</div>
                </div>
                <div className="font-medium rounded-full h-6 w-6 flex justify-center items-center bg-pd-lotus-red text-xs text-pd-pure-white dark:text-pd-dark-black">{this.props.notificationCount >= 9 ? "9+" : this.props.notificationCount.toString()}</div>
            </div>
        );
    }
}

export default DayDiv;