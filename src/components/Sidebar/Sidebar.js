import React from "react";

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="order-last h-[10vh]  md:order-first lg:h-[calc(85vh-1.125rem)] md:h-[calc(88vh-1.125rem)] border border-solid bg-pd-pure-white border-pd-stroke-blue rounded-2xl mr-1.5 ml-1.5 mt-1.5 md:mb-1.5">
                <div className="lg:w-80 md:w-64 w-64 h-[64px]"></div>
            </div>
        );
    }
}

export default Sidebar;