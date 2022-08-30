import React from "react";
import DiaryPage from "../DiaryPage/DiaryPage";


class Diaries extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<DiaryPage 
            title={"Edge To Tommorrow"}
            dateString={"Sunday, 01, October 2021"}
            likeCount={56}
            publicNotesCount={1}
        />);
    }
}

export default Diaries;