import React from "react";

class SignOutInfoDiv extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div ref={this.infoDiv} className="font-pd-sans-body text-pd-pure-white rounded-2xl bg-pd-accent-blue p-4 absolute right-0 min-w-max mt-1.5 mr-6 dark:bg-pd-dark-accent-blue dark:text-pd-dark-black">
                <div>
                    <div>
                        <div className="text-sm sm:text-base font-normal">Signed as</div>
                        <div>
                            <a className="cursor-pointer underline font-medium sm:text-lg text-base">Rajitha Kumara</a>
                        </div>
                    </div>
                    <div><a className="cursor-pointer underline text-sm sm:text-base font-normal">Sign out</a></div>
                </div>
            </div>
        );
    }
}

export default SignOutInfoDiv;