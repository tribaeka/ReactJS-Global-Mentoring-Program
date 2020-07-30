import React from "react";

import HelloArrowPlusCreateElement from "./components/HelloArrowPlusCreateElement/HelloArrowPlusCreateElement";
import HelloComponent from "./components/HelloComponent/HelloComponent";
import HelloPureComponent from "./components/HelloPureComponent/HelloPureComponent";
import HelloFunction from "./components/HelloFunction/HelloFunction";

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
