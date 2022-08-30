import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import DiaryPage from "../DiaryPage/DiaryPage";
import Diaries from "../Diaries/Diaries";
import Profile from "../Profile/Profile";

class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="w-full h-full md:mb-0 mb-1.5 overflow-y-scroll scrollbar-none">
                <Routes>
                    <Route path="/diaries" element={<DiaryPage 
                    title="The Day Of The Month And This Is Fake"
                    dateString="Sunday, 01, October 2021"
                    likesCount={21}
                    publicNotesCount={32}
                />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
                <Route index element={<div>Index</div>}></Route>
                </Routes>
            </div>
        );
    }
}

export default Content;