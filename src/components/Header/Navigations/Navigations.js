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
        return (
            <div className="font-medium font-pd-sans-body flex items-center justify-evenly w-full lg:text-lg md:text-sm sm:text-xs text-pd-accent-blue">
                {
                    (this.props.onMobile) ? this.meta.map(nav => {return <div key={nav.href} className="cursor-pointer material-icons-round md-24">{nav.icon}</div>;}): this.meta.map(nav => {return <div key={nav.href} className="cursor-pointer underline">{nav.link}</div>;})  
                }
                <Notification />
            </div>
        );
    }
}

export default Navigations;