import React from "react";

class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="border border-solid border-pd-stroke-blue rounded-2xl bg-pd-pure-white dark:bg-pd-dark-fade-black dark:border-none w-full h-full md:mb-0 mb-1.5"></div>
        );
    }
}

export default Content;