import React from "react";

class TodayDiv extends React.Component {
    constructor(props) {
        super(props);
        this.setTime = this.setTime.bind(this);
        this.state = this.setTime();
        this.clockId;
    }

    setTime() {
        const now = new Date();
        let timeStringArr = now.toLocaleTimeString().split(':');
        timeStringArr[2] = timeStringArr[2].split(' ')[1];
        return { currentHrs: timeStringArr[0], currentMin: timeStringArr[1], amOrPm: timeStringArr[2]};
    }

    componentDidMount() {
        this.clockId = setInterval(() => {
            this.setState(this.setTime());
        }, 1000);
        
    }

    componentWillUnmount() {
        if(this.clockId) clearInterval(this.clockId);
    }

    render() {
        return (
            <div className="lg:w-80 md:w-64 w-64 h-24 flex items-center bg-pd-fade-blue border border-solid border-pd-stroke-blue rounded-lg m-2">
                <div className="bg-pd-accent-blue rounded-lg w-2/6 h-full flex items-center justify-center flex-col font-pd-sans-body text-pd-pure-white">
                    <div className="font-semibold text-2xl"><span>{this.state.currentHrs}</span>:<span>{this.state.currentMin}</span></div>
                    <div className="font-medium text-base">{this.state.amOrPm}</div>
                </div>
                <div></div>
            </div>
        );
    }
}

export default TodayDiv;