import React from "react";
import TodayDiv from "./TodayDiv/TodayDiv";
import DayDiv from "./DayDiv/DayDiv";
import PresentDayDiv from "./PresentDayDiv/PresentDayDiv";
import LetsReadDiv from "./LetsReadDiv/LetsReadDiv";
import SelectDate from "./SelectDate/SelectDate";


import { Routes, Route } from "react-router-dom";

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="order-last md:order-first flex md:flex-col flex-row border border-solid bg-pd-pure-white border-pd-stroke-blue rounded-2xl md:mr-1.5 dark:bg-pd-dark-fade-black dark:border-none md:h-full h-[100px] p-3 md:w-fit w-full">
                <Routes>
                    <Route path="/diaries" element={<DayDiv 
                        dayTitle={"The Day Of The Month"}
                        notificationCount = {56}
                        user = {"Pasan Dissanayake"}
                    />}></Route>

                    <Route path="/my_diary" element={<SelectDate />}>

                    </Route>

                    <Route index element={<DayDiv 
                        dayTitle={"End Of The World"}
                        notificationCount = {6}
                        user = {"Gaurav Hetti"}
                    />}></Route>

                    <Route path="/profile" element={<LetsReadDiv 
                        joinedDateString={"January, 2, 2021"}
                        name={"Rajitha Kumara"}
                    />}></Route>

                </Routes>
                {/*<PresentDayDiv
                    date = {27}
                    onDiaries = {true}
                    dayTitle={"Edge To Next Day"}
                    notificationCount = {56}
                    dateString = {"Sunday, 27 October 2021"}
        />*/}
            </div>
        );
    }
}

export default Sidebar;