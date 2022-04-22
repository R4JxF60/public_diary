import React from "react";
import TodayDiv from "./TodayDiv/TodayDiv";

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="order-last h-[10vh]  md:order-first lg:h-[calc(85vh-1.125rem)] md:h-[calc(88vh-1.125rem)] border border-solid bg-pd-pure-white border-pd-stroke-blue rounded-2xl mr-1.5 ml-1.5 mt-1.5 md:mb-1.5 dark:bg-pd-dark-fade-black dark:border-none p-2">
                <TodayDiv />
            </div>
        );
    }
}

export default Sidebar;