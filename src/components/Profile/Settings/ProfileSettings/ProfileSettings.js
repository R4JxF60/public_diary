import React from "react";
import BackgroundDiv from "../../../Utils/BackgroundDiv/BackgroundDiv";

class ProfileSettings extends React.Component {
    constructor(props) {
        super(props);
        this.state = { edited: false, name: "Rajitha Kumara", bio: "Nec ullamcorper sit amet risus nullam eget felis eget nunc. Sodales ut etiam sit amet nisl purus. Tempus egestas sed sed risus pretium quam vulputate."}
        this.handleName = this.handleName.bind(this);
        this.handleBio = this.handleBio.bind(this);
    }

    handleName(event) {
        this.setState({edited: true});
        this.setState({name: event.target.value});
    }

    handleBio(event) {
        this.setState({edited: true});
        this.setState({bio: event.target.value});
    }

    render() {
        return <BackgroundDiv>
            <div className="font-pd-sans-heading sm:text-2xl text-xl font-semibold text-pd-text-gray">Profile Settings</div>
            <form className="mt-6 text-pd-text-gray">
                <div className="flex flex-col mb-6">
                    <label htmlFor="nameId" className="text-lg font-medium ml-3 mb-1.5 w-fit">Name</label>
                    <input className="outline-none border border-solid border-pd-stroke-blue rounded-xl bg-pd-fade-blue p-3 lg:w-64" id="nameId" value={this.state.name} name="name" type="text" onChange={this.handleName}></input>
                </div>
                <div className="flex flex-col mb-6">
                    <label htmlFor="bioId" className="text-lg font-medium ml-3 mb-1.5 w-fit">Your Bio</label>
                    <textarea className="outline-none border border-solid border-pd-stroke-blue rounded-xl bg-pd-fade-blue p-3 w-full min-h-fit" id="bioId" value={this.state.bio} name="bio" onChange={this.handleBio}></textarea>
                </div>
                <div>
                    <button type="submit" className="bg-pd-accent-blue pl-3 pr-3 pt-2 pb-2 rounded-xl text-pd-pure-white font-medium text-base mr-3 disabled:cursor-not-allowed disabled:bg-gray-300" disabled={!this.state.edited}>Update Profile</button>
                </div>
            </form>
        </BackgroundDiv>
    }
}

export default ProfileSettings;