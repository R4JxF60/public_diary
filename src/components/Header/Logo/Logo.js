import React from "react";

class Logo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="flex items-center justify-center">
                <a href="#" className="text-center lg:w-80 w-72 cursor-pointer font-pd-handwrite text-pd-accent-blue lg:text-4xl md:text-3xl hidden md:block dark:text-pd-dark-accent-blue">Public Diary</a>
                <a href="#" className="ml-6 w-16 h-16 rounded-full cursor-pointer font-pd-handwrite text-pd-pure-white text-2xl flex items-center justify-center bg-pd-accent-blue md:hidden dark:text-pd-dark-black dark:bg-pd-dark-accent-blue">PD</a>
            </div>
        );
    }
}

export default Logo;