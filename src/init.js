import React from "react";
import * as ReactDOM from "react-dom";
import { setTheme } from "./preflight";
import "./styles/main.css";
import App from "./components/App/App";

/** setting the layout of the app */
const mobileSignalDispatcher = window.matchMedia("(max-width: 768px)");
const splitSignalDispatcher = window.matchMedia("(max-width: 640px)");

mobileSignalDispatcher.addEventListener("change", () => {
    createRoot({onMobile: mobileSignalDispatcher.matches, split: splitSignalDispatcher.matches});
});

splitSignalDispatcher.addEventListener("change", () => {
    createRoot({onMobile: mobileSignalDispatcher.matches, split: splitSignalDispatcher.matches});
});

const createRoot = props => {
    ReactDOM.render(
        <React.StrictMode>
            <div className="container max-w-6xl mx-auto">
                <App onMobile={props.onMobile} split={props.split}/>
            </div>
        </React.StrictMode>
    , document.getElementById("root"));
    /** setting the theme of the app */
    setTheme();
};

createRoot({onMobile: mobileSignalDispatcher.matches, split: splitSignalDispatcher.matches});