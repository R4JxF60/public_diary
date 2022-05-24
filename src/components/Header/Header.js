import React from "react";
import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import Navigations from "./Navigations/Navigations";
import Notification from "./Notification/Notification";
import SignOut from "./SignOut/SignOut";
import { MobileContext } from "../../context/mobile.context";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="bg-pd-pure-white flex items-center h-[100px] lg:h-[150px] border border-solid border-pd-stroke-blue rounded-2xl mt-1.5 mr-1.5 ml-1.5 mb-1.5 dark:bg-pd-dark-fade-black dark:border-none">
                <Logo />
                <div className="flex items-center justify-between w-full">
                    <Search />
                        <MobileContext.Consumer>
                            {value => (!value.onScreenSplit ? <Navigations /> : false)}
                        </MobileContext.Consumer>
                    <SignOut />
                </div>
            </div>
        );
    
    }
}

export default Header;