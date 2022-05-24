import React from "react";
import * as ReactDOM from "react-dom";
import "./styles/main.css";
import App from "./components/App/App";
import ThemeProvider from "./context/theme.context";
import MobileProvider from "./context/mobile.context";

/** setting the layout of the app */
/*const mobileSignalDispatcher = window.matchMedia("(max-width: 768px)");
const splitSignalDispatcher = window.matchMedia("(max-width: 640px)");

mobileSignalDispatcher.addEventListener("change", () => {
    createRoot({onMobile: mobileSignalDispatcher.matches, split: splitSignalDispatcher.matches});
});

splitSignalDispatcher.addEventListener("change", () => {
    createRoot({onMobile: mobileSignalDispatcher.matches, split: splitSignalDispatcher.matches});
});

const setTheme = () => {
    const theme = window.matchMedia('(prefers-color-scheme: dark)');
    theme.addEventListener("change", () => {
        theme.matches ? document.body.style.backgroundColor = "#11151C" : document.body.style.backgroundColor = "#F6F8FF";
    });
    theme.matches ? document.body.style.backgroundColor = "#11151C" : document.body.style.backgroundColor = "#F6F8FF";
}*/

const createRoot = () => {
    ReactDOM.render(
        <React.StrictMode>
            <MobileProvider>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </MobileProvider>
        </React.StrictMode>
    , document.getElementById("root"));
};

createRoot();