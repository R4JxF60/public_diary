import React from "react";

class SignOutInfoDiv extends React.Component {
    constructor(props) {
        super(props);
        this.render = this.render.bind(this);
    }

    render() {
        return (
            <div ref={this.infoDiv} className="font-pd-sans-body text-pd-pure-white rounded-2xl bg-pd-accent-blue p-4 absolute right-0 min-w-max mt-1.5 mr-6 dark:bg-pd-dark-accent-blue dark:text-pd-dark-black">
                <div>
                    <div>
                        <div className="text-sm sm:text-xs font-normal">Signed as</div>
                        <div>
                            <a className="cursor-pointer underline font-medium lg:text-lg md:text-base sm:text-sm">Rajitha Kumara</a>
                        </div>
                    </div>
                    <div><a className="cursor-pointer underline text-sm sm:text-xs font-normal">Sign out</a></div>
                </div>
            </div>
        );
    }
}

export default SignOutInfoDiv;