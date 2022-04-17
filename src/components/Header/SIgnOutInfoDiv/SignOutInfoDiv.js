import React from "react";

class SignOutInfoDiv extends React.Component {
    constructor(props) {
        super(props);
        this.render = this.render.bind(this);
    }

    render() {
        return (
            <div ref={this.infoDiv} className="font-pd-sans-body text-pd-pure-white rounded-2xl bg-pd-accent-blue p-4 absolute">
                <div>
                    <div>
                        <div className="text-sm font-normal">Signed as</div>
                        <div>
                            <a className="cursor-pointer underline font-medium text-base">Rajitha Kumara</a>
                        </div>
                    </div>
                    <div><a className="cursor-pointer underline text-sm font-normal">Sign out</a></div>
                </div>
            </div>
        );
    }
}

export default SignOutInfoDiv;