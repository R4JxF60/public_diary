import React from "react";


class PresentDayDiv extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className="font-pd-sans-body flex items-center justify-between bg-pd-fade-blue border border-solid border-pd-stroke-blue p-3 rounded-xl hover:border-pd-accent-blue duration-200 ease-in-out cursor-pointer">
            <div className="flex items-center">
                {
                    this.props.onDiaries ? 
                        <div className="rounded-full lg:w-9 lg:h-9 w-8 h-8 border border-solid border-pd-stroke-blue bg-pd-pure-white flex items-center justify-center text-pd-accent-blue lg:text-base text-sm font-medium mr-3">{this.props.date}</div> : 
                        false
                }
                <div>
                    <div className="lg:text-lg text-base font-medium text-pd-accent-blue dark:text-pd-dark-accent-blue">{this.props.dayTitle}</div>
                    <div className="font-normal lg:text-sm text-xs text-pd-text-gray dark:text-pd-dark-text-blue">{this.props.dateString}</div>
                </div>
            </div>
            <div>
                <div className="material-icons"></div>
                <div className="font-medium rounded-full lg:h-6 lg:w-6 h-5 w-5 flex justify-center items-center bg-pd-lotus-red lg:text-sm text-xs text-pd-pure-white dark:text-pd-dark-black">{this.props.notificationCount >= 9 ? "9+" : this.props.notificationCount.toString()}</div>
            </div>
        </div>);
    }
}

export default PresentDayDiv;