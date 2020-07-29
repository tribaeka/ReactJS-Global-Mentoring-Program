import React from "react";

React.createElement();
export default function App() {
    return (
        <>
            <HelloArrowPlusCreateElement/>
            <HelloComponent/>
            <HelloPureComponent/>
            <HelloFunction/>
        </>
    );
}

const HelloArrowPlusCreateElement = () => {
    return React.createElement("h1", null, `Hello World`);
};

class HelloComponent extends React.Component {
    render() {
        return <h2>Hello World</h2>;
    }
}

class HelloPureComponent extends React.PureComponent {
    render() {
        return <h3>Hello World</h3>;
    }
}

function HelloFunction() {
    return <h4>Hello World</h4>;
}
