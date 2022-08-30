import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Navigations from "../Header/Navigations/Navigations";
import Content from "../Content/Content";
import  { MobileContext } from "../../context/mobile.context";
import  ThemeProvider  from "../../context/theme.context";
import MobileProvider from "../../context/mobile.context";
import DateTimeProvider from "../../context/dateTime.context";


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MobileProvider>
                <ThemeProvider>
                    <DateTimeProvider>
                    <div className="container max-w-6xl mx-auto min-w-[356px]">
                        <Header />
                        <div className="flex flex-col md:items-center md:flex-row mb-1.5 mr-1.5 ml-1.5 lg:h-[calc(100vh-9.125rem)] sm:h-[calc(100vh-7.375rem)] h-[calc(100vh-12.25rem)] min-h-[300px]">
                            <Sidebar />
                            <Content />
                        </div>
                        <MobileContext.Consumer>
                            {value => (value.onScreenSplit ? <Navigations /> : false)}
                        </MobileContext.Consumer>
                    </div>
                    </DateTimeProvider>
                </ThemeProvider>
            </MobileProvider>
        );
    }
}

export default App;