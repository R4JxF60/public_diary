import React from "react";

export const ThemeContext = React.createContext({
    theme: {
        type: "SYSTEM",
        setAsSystem: ()=>{},
        setAsLight: ()=>{},
        setAsDark: ()=>{},
    }
});

class ThemeProvider extends React.Component {
    constructor(props) {
        super(props);
        this.THEME_TYPES = {DARK: "DARK", LIGHT: "LIGHT", SYSTEM: "SYSTEM"}; 
        this.THEME_MATCHER = window.matchMedia("(prefers-color-scheme: dark)");
        this.setAsLight = this.setAsLight.bind(this);
        this.setAsDark = this.setAsDark.bind(this);
        this.setAsSystem = this.setAsSystem.bind(this);
        this.setAsSystemHandler = this.setAsSystemHandler.bind(this);
        this.initTheme = this.initTheme.bind(this);
        this.state = {
            theme: {
                type: this.THEME_TYPES.SYSTEM,
                setAsSystem: this.setAsSystem,
                setAsLight: this.setAsLight,
                setAsDark: this.setAsDark,
            }
        };
        this.initTheme();
    }

    componentWillUnmount() {
        this.THEME_MATCHER ? 
            this.THEME_MATCHER.removeEventListener("change", this.toggleTheme) : 
            false;
    }

    initTheme() {
        const defaultTheme = localStorage.getItem("default_theme");
        switch(defaultTheme) {
            case this.THEME_TYPES.DARK: return this.setAsDark();
            case this.THEME_TYPES.LIGHT: return this.setAsLight();
            default: return this.setAsSystem();
        };
    }

    setAsLight() {
        document.body.classList.remove("dark");
        document.body.style.backgroundColor = "#F6F8FF";
        this.setState(state => (Object.assign({}, state, {theme: {type: this.THEME_TYPES.LIGHT}})));
        window.localStorage.setItem("default_theme", this.state.theme.type);
        return this.state.theme.type;
    } 

    setAsDark() {
        document.body.classList.add("dark");
        document.body.style.backgroundColor = "#11151C";
        this.setState(state => (Object.assign({}, state, {theme: {type: this.THEME_TYPES.DARK}})));
        window.localStorage.setItem("default_theme", this.state.theme.type);
        return this.state.theme.type;
    }

    setAsSystemHandler() {
        this.setState(state => (Object.assign({}, state, {theme: {type: this.THEME_TYPES.SYSTEM}})));
        window.localStorage.setItem("default_theme", this.THEME_TYPES.SYSTEM);
        if(this.THEME_MATCHER.matches) {
            document.body.classList.add("dark");
            document.body.style.backgroundColor = "#11151C";
        }else {
            document.body.style.backgroundColor = "#F6F8FF"; 
            document.body.classList.remove("dark");
        }
        return this.state.theme.type;
    }

    setAsSystem() {
        this.THEME_MATCHER.removeEventListener("change", this.setAsSystemHandler)
        this.THEME_MATCHER.addEventListener("change", this.setAsSystemHandler);
        return this.setAsSystemHandler();
    }

    render() {
        return (
            <ThemeContext.Provider value={this.state}>{this.props.children}</ThemeContext.Provider>
        )
    }
}

export default ThemeProvider;