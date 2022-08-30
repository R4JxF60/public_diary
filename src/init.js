import React from "react";
import * as ReactDOM from "react-dom";
import "./styles/main.css";
import App from "./components/App/App";
import Diaries from "./components/Diaries/Diaries";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const createRoot = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<App />}></Route>
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    , document.getElementById("root"));
};

createRoot();