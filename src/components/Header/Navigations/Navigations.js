import React from "react";
import Notification from "../Notification/Notification";

class Navigations extends React.Component {
    constructor(props) {
        super(props);
        this.meta = [
            {
                link: "Diaries", 
                href: "/diaries", 
                icon: "view_timeline"
            }, 
            {
                link: "My Diary",
                href:"/my_diary", 
                icon: "vertical_split"
            },
            {
                link: "Profile",
                href: "/profile",
                icon: "person"
            }
                
        ]
    }

    render(){
        if(this.props.onMobile && this.props.split) {
            return (
                <div className="bg-pd-pure-white border border-solid border-pd-stroke-blue rounded-2xl h-[12vh] flex items-center mt-1.5 mr-1.5 ml-1.5 mb-1.5 dark:bg-pd-dark-fade-black dark:border-none">
                    <div className="mr-6 ml-6 flex items-center justify-between text-pd-accent-blue w-full dark:text-pd-dark-accent-blue">
                        {this.meta.map(nav => {return <div key={nav.href} className="cursor-pointer material-icons-round md-24">{nav.icon}</div>;})}
                        <Notification />
                    </div>
                </div>
            );
        }
        return (
            <div className="font-medium font-pd-sans-body flex items-center justify-evenly w-full lg:text-lg md:text-sm sm:text-xs text-pd-accent-blue dark:text-pd-dark-accent-blue">
                {
                    (this.props.onMobile) ? this.meta.map(nav => {return <div key={nav.href} className="cursor-pointer material-icons-round md-24">{nav.icon}</div>;}): this.meta.map(nav => {return <div key={nav.href} className="cursor-pointer underline">{nav.link}</div>;})  
                }
                <Notification />
            </div>
        );

    }
}

export default Navigations;