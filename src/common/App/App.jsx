import React from "react";

import HelloArrowPlusCreateElement from "../HelloArrowPlusCreateElement/HelloArrowPlusCreateElement";
import HelloComponent from "../HelloComponent/HelloComponent";
import HelloPureComponent from "../HelloPureComponent/HelloPureComponent";
import HelloFunction from "../HelloFunction/HelloFunction";

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
