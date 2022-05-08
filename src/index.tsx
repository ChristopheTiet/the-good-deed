import React from "react";
import ReactDOM from "react-dom/client";
import GoodDeedsApp from "./GoodDeedsApp";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <GoodDeedsApp />
    </React.StrictMode>
);
