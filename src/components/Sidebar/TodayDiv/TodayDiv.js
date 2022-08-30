import React from "react";

class TodayDiv extends React.Component {
    constructor(props) {
        super(props);
        this.clockId;
        this.MONTHS = ["January", "February", "March", "April", "May", "June", "July", "Auguest", "September", "October", "November", "December"];
        this.DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        this.setTime = this.setTime.bind(this);
        this.setDate = this.setDate.bind(this);
        this.setNow = this.setNow.bind(this);
        this.state = this.setNow();
    }

    setDate(now) {
        return { 
            day: (now.getDate().toString().length == 1)? '0'+now.getDate().toString() : now.getDate().toString(),
            dayName: this.DAYS[now.getDay()],
            month: now.getMonth(),
            monthName: this.MONTHS[now.getMonth()],
            year: now.getFullYear()
        }
    }

    setTime(now) {
        let timeStringArr = now.toLocaleTimeString().split(':');
        timeStringArr[2] = timeStringArr[2].split(' ')[1];
        return { 
            currentHrs: timeStringArr[0], 
            currentMin: timeStringArr[1], 
            amOrPm: timeStringArr[2]
        };
    }

    setNow() {
        const now = new Date();
        return Object.assign({}, this.setTime(now), this.setDate(now));
    }

    componentDidMount() {
        this.clockId = setInterval(() => {
            this.setState(this.setNow());
        }, 1000);
        
    }

    componentWillUnmount() {
        if(this.clockId) clearInterval(this.clockId);
    }

    render() {
        return (
            <div className="w-52 lg:w-80 md:w-64 md:h-24 sm:h-full h-full items-center bg-pd-fade-blue border border-solid border-pd-stroke-blue font-pd-sans-body flex dark:border-none dark:bg-pd-dark-black md:mr-0 md:mb-3 mr-1.5 rounded-xl">
                <div className="bg-pd-accent-blue rounded-xl w-2/6 h-full flex items-center justify-center flex-col text-pd-pure-white dark:bg-pd-dark-accent-blue dark:text-pd-dark-black">
                    <div className="font-semibold lg:text-2xl md:text-lg text-base"><span>{this.state.currentHrs}</span>:<span>{this.state.currentMin}</span></div>
                    <div className="font-medium lg:text-base md:text-sm text-xs">{this.state.amOrPm}</div>
                </div>
                <div className="ml-3 text-pd-accent-blue dark:text-pd-dark-accent-blue">
                    <div className="font-medium lg:text-xl md:text-lg text-base"><span>{this.state.dayName}, </span><span>{this.state.day}</span></div>
                    <div className="font-normal md:text-sm text-xs"><span>{this.state.monthName}</span> <span>{this.state.year}</span></div>
                </div>
            </div>
        );
    }
}

export default TodayDiv;