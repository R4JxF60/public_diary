import React from "react";

class Navigations extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="text-pd-accent-blue font-medium font-pd-sans-body">
                <a className="cursor-pointer underline">Diaries</a>
                <a className="cursor-pointer underline">My Diary</a>
                <a className="cursor-pointer underline">Profile</a>
            </div>
        );
    }
}

export default Navigations;