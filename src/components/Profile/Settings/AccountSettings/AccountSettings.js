import React from "react";
import BackgroundDiv from "../../../Utils/BackgroundDiv/BackgroundDiv";
import { ThemeContext } from "../../../../context/theme.context";

class AccountSettings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: "rajithakumaraprog@gamil.com"}
    }

    handleEmail(event) {
        this.setState({email: event.target.value});
    }

    handlePassword(event) {
        this.setState({password: event.target.value});
    }

    render() {
        return (
            <BackgroundDiv>
                    <div className="font-pd-sans-heading sm:text-2xl text-xl font-semibold text-pd-text-gray">Account Settings</div>
                    <form className="mt-6 text-pd-text-gray">
                        <div className="flex flex-col mb-6">
                            <label className="text-lg font-medium ml-3 mb-1.5 w-fit">Set Theme</label>
                            <ThemeContext.Consumer>
                                {
                                    ({theme}) => (
                                    <div className="flex mt-1 items-center">
                                        <div className="w-12 h-12 bg-pd-fade-blue rounded-full border-2 border-solid border-pd-stroke-blue cursor-pointer mr-3" onClick={theme.setAsLight}></div>
                                        <div className="w-12 h-12 bg-pd-dark-fade-black rounded-full border-2 border-solid border-pd-dark-black cursor-pointer mr-3 dark:border-pd-dark-accent-blue" onClick={theme.setAsDark}></div>
                                        <div className="w-12 h-12 rounded-full border-2 border-solid border-pd-stroke-blue cursor-pointer mr-3" style={{background: "linear-gradient(to right , #F6F8FF 0%, #F6F8FF 50%, #19212E 50%, #19212E 100%)"}} onClick={theme.setAsSystem}></div>
                                        <div className="text-base font-normal text-pd-accent-blue">Active : <span>{theme.type.charAt()+theme.type.substring(1).toLowerCase()}</span></div>
                                    </div>)
                                }
                            
                            </ThemeContext.Consumer>
                        </div>
                        <div className="flex flex-col mb-6">
                            <label htmlFor="emailId" className="text-lg font-medium ml-3 mb-1.5 w-fit">Email</label>
                            <input id="emailId" type="email" className="outline-none border border-solid border-pd-stroke-blue rounded-xl bg-pd-fade-blue p-3 lg:w-64" value={this.state.email} onChange={this.handleEmail}></input>
                        </div>
                        <div className="flex flex-col mb-6">
                            <label htmlFor="changePasswordId" className="text-lg font-medium ml-3 mb-1.5 w-fit">Change Password</label>
                            <div className="flex flex-wrap gap-3">
                                <input id="changePasswordId" type="password" className="outline-none border border-solid border-pd-stroke-blue rounded-xl bg-pd-fade-blue p-3 sm:w-64 w-full placeholder:text-pd-text-gray placeholder:text-xs placeholder:font-normal" placeholder="Current password" onChange={this.handlePassword}></input>
                                <input type="password" className="outline-none border border-solid border-pd-stroke-blue rounded-xl bg-pd-fade-blue p-3 placeholder:text-pd-text-gray placeholder:text-xs placeholder:font-normal sm:w-64 w-full" placeholder="New password"></input>
                            </div>
                            <a href="#" className="underline text-xs ml-3 mt-1.5 text-pd-accent-blue font-normal">Forgot Password?</a>
                        </div>
                        <div>
                            <button type="submit" className="bg-pd-accent-blue pl-3 pr-3 pt-2 pb-2 rounded-xl text-pd-pure-white font-medium text-base mr-3 disabled:cursor-not-allowed disabled:bg-gray-300" disabled={!this.state.edited}>Update Account</button>
                        </div>
                    </form>
            </BackgroundDiv>
        );
    }
}

export default AccountSettings;