import React from "react";

class TodayDiv extends React.Component {
    constructor(props) {
        super(props);
        this.clockId;
        this.MONTHS = ["January", "February", "March", "April", "May", "June", "July", "Auguest", "September", "October", "November", "December"];
        this.DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        this.setTime = this.setTime.bind(this);
        this.setDate = this.setDate.bind(this);
        this.setNow = this.setNow.bind(this);
        this.state = this.setNow();
    }

    setDate(now) {
        return { 
            day: (now.getDay().toString().length == 1)? '0'+now.getDay().toString() : now.getDay(),
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
            <div className="lg:w-80 md:w-64 w-52 md:h-24 h-full items-center bg-pd-fade-blue border border-solid border-pd-stroke-blue rounded-lg font-pd-sans-body hidden sm:flex">
                <div className="bg-pd-accent-blue rounded-lg w-2/6 h-full flex items-center justify-center flex-col text-pd-pure-white">
                    <div className="font-semibold lg:text-2xl md:text-xl text-lg"><span>{this.state.currentHrs}</span>:<span>{this.state.currentMin}</span></div>
                    <div className="font-medium lg:text-base md:text-sm text-xs">{this.state.amOrPm}</div>
                </div>
                <div className="ml-3">
                    <div className="font-normal lg:text-2xl md:text-xl text-lg text-pd-accent-blue"><span>{this.state.dayName}, </span><span>{this.state.day}</span></div>
                    <div className="font-normal lg:text-base md:text-sm text-xs text-pd-accent-blue"><span>{this.state.monthName}</span> <span>{this.state.year}</span></div>
                </div>
            </div>
        );
    }
}

export default TodayDiv;