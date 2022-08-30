import React from "react";
import BackgroundDiv from "../../Utils/BackgroundDiv/BackgroundDiv";

class About extends React.Component {
        constructor(props) {
            super(props);
    }

    render() {
        return(
            <BackgroundDiv>
                <div className="text-pd-text-gray">
                    <div className="font-pd-sans-heading sm:text-2xl text-xl font-semibold mb-6">{"About "+this.props.name}</div>
                    <div className="font-pd-sans-body border border-solid border-pd-stroke-blue rounded-xl bg-pd-fade-blue p-3 w-full">{this.props.bio}</div>
                </div>
            </BackgroundDiv>
        );
    }
}

export default About;