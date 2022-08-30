import React from "react";
import ProfileSettings from "./ProfileSettings/ProfileSettings";
import AccountSettings from "./AccountSettings/AccountSettings";

class Settings extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <ProfileSettings />
                <AccountSettings />
            </div>
        );
    }
}

export default Settings;