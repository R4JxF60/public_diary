import React from "react";
import Cookies from "js-cookie";

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
        this.DEFAULT_THEME = "DEFAULT_THEME";
        this.THEME_TYPES = {DARK: "DARK", LIGHT: "LIGHT", SYSTEM: "SYSTEM"}; 
        this.THEME_MATCHER = null;
        this.persist = this.persist.bind(this);
        this.setAsLight = this.setAsLight.bind(this);
        this.setAsDark = this.setAsDark.bind(this);
        this.setAsSystem = this.setAsSystem.bind(this);
        this.setAsSystemHandler = this.setAsSystemHandler.bind(this);
        this.initTheme = this.initTheme.bind(this);
        this.clearSystemThemeListener = this.clearSystemThemeListener.bind(this);
        this.state = {
            theme: {
                type: this.THEME_TYPES.SYSTEM,
                setAsSystem: this.setAsSystem,
                setAsLight: this.setAsLight,
                setAsDark: this.setAsDark,
            }
        };
    }

    componentDidMount() {
        this.THEME_MATCHER = window.matchMedia("(prefers-color-scheme: dark)");
        this.initTheme();
    }

    componentWillUnmount() {
        this.clearSystemThemeListener();
    }

    initTheme() {
        const defaultTheme = Cookies.get(this.DEFAULT_THEME);
        switch(defaultTheme) {
            case this.THEME_TYPES.DARK: return this.setAsDark();
            case this.THEME_TYPES.LIGHT: return this.setAsLight();
            default: return this.setAsSystem();
        };
    }

    clearSystemThemeListener() {
        this.THEME_MATCHER ? 
            this.THEME_MATCHER.removeEventListener("change", this.setAsSystemHandler) : 
            false;
    }

    setAsLight() {
        document.body.classList.remove("dark");
        document.body.style.backgroundColor = "#F6F8FF";
        this.setState(state => {
            state.theme.type = this.THEME_TYPES.LIGHT;
            this.persist(state.theme.type);
            this.clearSystemThemeListener();
            return state;
        });
    } 

    setAsDark() {
        document.body.classList.add("dark");
        document.body.style.backgroundColor = "#11151C";
        this.setState(state => {
            state.theme.type = this.THEME_TYPES.DARK;
            this.persist(state.theme.type);
            this.clearSystemThemeListener();
            return state;
        });
    }

    persist(type) {
        Cookies.remove(this.DEFAULT_THEME);
        Cookies.set(this.DEFAULT_THEME, type, {expires: 90, sameSite: "Lax", secure: true});
    }

    setAsSystemHandler() {
        this.setState(state => {
            state.theme.type = this.THEME_TYPES.SYSTEM;
            this.persist(state.theme.type);
            return state;
        });
        if(this.THEME_MATCHER.matches) {
            document.body.classList.add("dark");
            document.body.style.backgroundColor = "#11151C";
        }else {
            document.body.style.backgroundColor = "#F6F8FF"; 
            document.body.classList.remove("dark");
        }
    }

    setAsSystem() {
        this.clearSystemThemeListener();
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