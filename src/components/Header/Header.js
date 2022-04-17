import React from "react";
import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import Navigations from "./Navigations/Navigations";
import Notification from "./Notification/Notification";
import SignOut from "./SignOut/SignOut";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.render = this.render.bind(this);
    }

    render() {
        return (
            <div className="flex align-middle">
                <Logo logoText="Public Diary" />
                <Search />
                <Navigations />
                <Notification />
                <SignOut />
            </div>
        );
    
    }
}

export default Header;