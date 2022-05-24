import React from "react";

export const MobileContext = React.createContext({
    onMobileScreen: false,
    onScreenSplit: false
});


class MobileProvider extends React.Component {
    constructor(props) {
        super(props);
        this.consideringSplittingWidth = 640;
        this.consideringMobileScreenWidth = 936;
        this.onSplitQuery = window.matchMedia(`screen and (max-width: ${this.consideringSplittingWidth}px)`);
        this.onMobileQuery = window.matchMedia(`screen and (max-width: ${this.consideringMobileScreenWidth}px)`);
        this.state = { 
            onMobileScreen: screen.width <= this.consideringMobileScreenWidth ? true : false, 
            onScreenSplit: screen.width <= this.consideringSplittingWidth ? true : false 
        };
        this.setOnMobileScreen = this.setOnMobileScreen.bind(this);
        this.setOnScreenSplit = this.setOnScreenSplit.bind(this);
    }

    setOnMobileScreen() {
        this.onMobileQuery.matches ? this.setState(state => (Object.assign({}, state, {onMobileScreen: true}))) : this.setState(state => (Object.assign({}, state, {onMobileScreen: false})));
        console.log(this.state)
    }

    setOnScreenSplit() {
        this.onSplitQuery.matches ? this.setState(state => (Object.assign({}, state, {onScreenSplit: true}))) : this.setState(state => (Object.assign({}, state, {onScreenSplit: false})));
        console.log(this.state);
    }

    componentDidMount() {
        this.onMobileQuery.addEventListener("change", this.setOnMobileScreen);
        this.onSplitQuery.addEventListener("change", this.setOnScreenSplit);
    }

    componentWillUnmount() {
        this.onMobileQuery.removeEventListener("change", this.setOnMobileScreen);
        this.onSplitQuery.removeEventListener("change", this.setOnScreenSplit);
    }

    render() {
        return (<MobileContext.Provider value={this.state}>{this.props.children}</MobileContext.Provider>);
    }
}

MobileContext.displayName = "MobileContext";
MobileProvider.displayName = "MobileProvider";

export default MobileProvider;