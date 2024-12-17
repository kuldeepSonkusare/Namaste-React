import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { id: "heading"}, "hello from react");

const Title =() => (
    <h1 className="head">
        Namaste react using JSX!
    </h1>
)

const HeadingComponent = () => (
    <div id="container">

        <Title/>
        <h1 className="heading">Namaste react functional component</h1>

    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
