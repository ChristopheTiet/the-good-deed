import React from "react";
import ReactDOM from "react-dom/client";
import IndecisionApp from "./IndecisionApp";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <IndecisionApp />
    </React.StrictMode>
);
