import React from "react";
import TodayDiv from "./TodayDiv/TodayDiv";

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        // lg:h-[calc(85vh-1.125rem)] md:h-[calc(88vh-1.125rem)]
    }

    render() {
        return (
            <div className="order-last md:order-first flex md:flex-col flex-row border border-solid bg-pd-pure-white border-pd-stroke-blue rounded-2xl md:mr-1.5 dark:bg-pd-dark-fade-black dark:border-none p-2 md:h-full h-[100px]">
                <TodayDiv />
                <TodayDiv />
            </div>
        );
    }
}

export default Sidebar;