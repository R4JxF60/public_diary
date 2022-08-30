import React from "react";
import Settings from "./Settings/Settings";
import About from "./About/About";
import ReadingDiaries from "./ReadingDiaries/ReadingDiaries";

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div >
            <About 
                name="Rajitha Kumara"
                bio="Nec ullamcorper sit amet risus nullam eget felis eget nunc. Sodales ut etiam sit amet nisl purus. Tempus egestas sed sed risus pretium quam vulputate."
            />
            <ReadingDiaries />
            <Settings />
        </div>);
    }
}

export default Profile;