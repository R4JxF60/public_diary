import React from "react";

export const DateTimeContext = React.createContext({
    today: 5
});

class DateTimeProvider extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <DateTimeContext.Provider>{this.props.children}</DateTimeContext.Provider>
    }
}

DateTimeProvider.contextType = DateTimeContext;
DateTimeContext.displayName = "DateTimeContext";

export default DateTimeProvider;