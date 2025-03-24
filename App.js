import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "h1",
    { id: "heading" },
    "hello world from react "
);

const parents = React.createElement(
    "div",
    { id: "parents" },
    React.createElement(
        "div",
        { id: "child" },
        [React.createElement(
            "h1",
            {},
            "Hi vedant "
        ),
        React.createElement(
            "h2",
            {},
            "hello world from react h2"
        )]

    )
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parents);